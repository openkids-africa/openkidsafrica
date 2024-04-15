<script setup lang="ts">
import { LoaderIcon } from "lucide-vue-next";
import { HelpingHandIcon } from "lucide-vue-next";
const { calculateDonationImpact } = useDonate();

const isLoading = ref(false);

const donateOptions = ref<DonateOptions>({
  mode: "monthly",
  onceAmounts: [25, 50, 100, 200, 500, 1000, "custom"],
  monthlyAmounts: [50, 100, 150, 500, "custom"],
  // onceAmounts: ["custom"],
  // monthlyAmounts: ["custom"],
});

const formData = ref<DonateFormData>({
  mode: "monthly",
  amountOption: 50,
  amount: 50,
});

const changeMode = (mode: "once" | "monthly") => {
  donateOptions.value.mode = mode;
  formData.value.mode = mode;
};

const handleSubmit = () => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    window.open("http://paypal.me/openkidsafrica", "__blank");
  }, 2000);

  console.log(formData.value);
};

watch(
  () => formData.value.mode,
  (newFormDataMode, oldFormDataMode) => {
    if (newFormDataMode !== oldFormDataMode) {
      const firstAmount = donateOptions.value[`${newFormDataMode}Amounts`][0];

      formData.value.amountOption = firstAmount;
      formData.value.amount = firstAmount as number;
    }
  },
);
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    class="site-form donate-form donate-form--once"
  >
    <div class="wrapper">
      <div class="donate__options btn-group">
        <button
          type="button"
          @click="() => changeMode('once')"
          :class="`btn btn--alt ${
            donateOptions.mode == 'once' ? 'btn--active' : ''
          }`"
        >
          Give Once
        </button>
        <button
          type="button"
          @click="() => changeMode('monthly')"
          :class="`btn btn--alt  ${
            donateOptions.mode == 'monthly' ? 'btn--active' : ''
          }`"
        >
          Give Monthly
        </button>
      </div>
      <div v-if="donateOptions.mode == 'once'" class="form-control !gap-4">
        <span class="form-label"> Choose an amount to give once</span>
        <DonateAmountFormGroup
          :amounts="donateOptions.onceAmounts"
          v-model:form-data="formData"
        />
        {{ calculateDonationImpact(formData.amount, formData.mode).statement }}
      </div>

      <div v-else class="form-control !gap-4">
        <span class="form-label"> Choose an amount give monthly </span>
        <DonateAmountFormGroup
          :amounts="donateOptions.monthlyAmounts"
          v-model:form-data="formData"
        />
        {{ calculateDonationImpact(formData.amount, formData.mode).statement }}
      </div>
      <div>
        <button :disabled="isLoading" type="submit" class="btn w-full">
          <LoaderIcon v-if="isLoading" class="icon animate-spin" />
          <HelpingHandIcon v-else class="icon" />
          <span class="text">
            {{ donateOptions.mode == "once" ? "Give Once" : "Give Monthly" }}
          </span>
        </button>
      </div>
    </div>
  </form>
</template>
