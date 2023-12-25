<script setup>
defineProps({
  name: {
    type: String,
    default: "John",
  },
  phone: {
    type: String,
    default: "+1 2345678",
  },
  email: {
    type: String,
    default: "john@johns.pizza",
  },
  message: {
    type: String,
    default: "I am John",
  },
});

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
</script>

<template>
  <EHtml>
    <EHead />
    <EPreview
      >Connecting every African child to a digital future through open
      educational resources</EPreview
    >
    <EBody :style="main">
      <EContainer :style="container">
        <EImg
          src="/android-chrome-512x512.png"
          width="100"
          height="100"
          alt="Openkids Africa"
          :style="logo"
        />
        <EText :style="paragraph"> Form submission by {{ name }}, </EText>
        <EText :style="paragraph">
          Welcome to Openkids Africa, we are excited to have you join our
          community of educators and learners.
          <br />
          We will be in touch with you shortly to get you started.
        </EText>
        <ESection :style="container">
          <EHeading as="h2" size="lg" :style="paragraph">
            Form submission details
          </EHeading>

          <ERow>
            <EColumn>
              <EText :style="paragraph"> Name: </EText>
            </EColumn>
            <EColumn>
              <EText :style="paragraph"> {{ name }} </EText>
            </EColumn>
          </ERow>
          <ERow>
            <EColumn>
              <EText :style="paragraph"> Phone: </EText>
            </EColumn>
            <EColumn>
              <EText :style="paragraph"> {{ phone }} </EText>
            </EColumn>
          </ERow>
          <ERow>
            <EColumn>
              <EText :style="paragraph"> Email: </EText>
            </EColumn>
            <EColumn>
              <EText :style="paragraph"> {{ email }} </EText>
            </EColumn>
          </ERow>
          <ERow>
            <EColumn>
              <EText :style="paragraph"> Message: </EText>
            </EColumn>
            <EColumn>
              <EText :style="paragraph"> {{ message }} </EText>
            </EColumn>
          </ERow>
          <!-- <EButton
            px="12"
            py="12"
            :style="button"
            href="https://getOpenkids Africa.com"
          >
            Get started
          </EButton> -->
        </ESection>
        <EText :style="paragraph">
          Best,
          <br />
          The Openkids Africa team
        </EText>
        <EHr :style="hr" />
        <EText :style="footer"
          >© 2023 OpenKids Africa. Registered charity number 189502</EText
        >
      </EContainer>
    </EBody>
  </EHtml>
</template>
