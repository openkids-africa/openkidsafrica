<script setup lang="ts">
import { RotateCcwIcon } from "lucide-vue-next";
import { LoaderIcon } from "lucide-vue-next";
import { SendHorizontalIcon, SendIcon } from "lucide-vue-next";
const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const isLoading = ref(false);
const submitted = ref(false);
const submitForm = () => {
  isLoading.value = true;
  console.log(formData.value);
  try {
    useFetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    }).then((res) => {
      console.log(res);
      if (res.data) {
        submitted.value = true;
      }
      isLoading.value = false;
    });
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};
const resetForm = () => {
  formData.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  submitted.value = false;
};
</script>
<template>
  <form @submit.prevent="submitForm" class="site-form">
    <div class="wrapper">
      <div class="form-control">
        <label class="form-label" for="name">Name*</label>
        <input
          v-model="formData.name"
          class="form-input"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          :disabled="submitted"
        />
      </div>
      <div class="form-group">
        <div class="form-control">
          <label for="Phone Number" class="form-label">Phone number</label>
          <input
            v-model="formData.phone"
            class="form-input"
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            :disabled="submitted"
          />
        </div>
        <div class="form-control">
          <label for="email" class="form-label">Email address*</label>
          <input
            v-model="formData.email"
            class="form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            required
            :disabled="submitted"
          />
        </div>
      </div>
      <div class="form-control">
        <label for="message" class="form-label">Message*</label>
        <textarea
          v-model="formData.message"
          class="form-textarea"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
          :disabled="submitted"
        ></textarea>
      </div>
      <div class="action-cont !justify-start">
        <button
          :disabled="isLoading || submitted"
          type="submit"
          class="btn btn--primary"
        >
          <LoaderIcon v-if="isLoading" class="icon animate-spin" />
          <SendIcon v-else class="icon" />
          <span class="text">
            {{ isLoading ? "Sending..." : "Send Message" }}
          </span>
        </button>
        <button
          v-if="submitted"
          class="btn"
          :disabled="isLoading"
          @click.prevent="() => resetForm()"
        >
          <RotateCcwIcon class="icon" />
          <span class="text">Reset</span>
        </button>
      </div>
    </div>
  </form>
</template>
