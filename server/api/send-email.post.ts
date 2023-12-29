// server/api/send-email.post.ts
import nodemailer from "nodemailer";
import { useCompiler } from "#vue-email";
import Mail from "nodemailer/lib/mailer";

const password = process.env.GMAIL_PASSWORD;

export default defineEventHandler(async (event) => {
  try {
    const { name, phone, email, message } = (await readBody(event)) as {
      name: string;
      phone: string;
      email: string;
      message: string;
    };

    const template = await useCompiler("WelcomeEmail.vue", {
      props: {
        url: "https://www.openkidsafrica.org/",
        name,
        phone,
        email,
        message,
      },
    });

    if (!template) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
      });
    }

    // const testAccount = await nodemailer.createTestAccount()

    // const transporter = nodemailer.createTransport({
    //   host: process.env.HOST || 'smtp.ethereal.email',
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: testAccount.user,
    //     pass: testAccount.pass,
    //   },
    // })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "openkidsafrica@gmail.com",
        pass: password,
      },
    });

    const options: Mail.Options = {
      from: "openkidsafrica@gmail.com",
      to: `${email}, openkidsafrica@gmail.com`,
      subject: "Open Kids Africa Contact Form",
      html: template.html,
      text: template.text,
    };

    console.log("Sending email...", options);

    await transporter.sendMail(options);
    return { message: "Email sent" };
  } catch (error) {
    console.error(error);

    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
