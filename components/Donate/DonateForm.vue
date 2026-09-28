<script setup lang="ts">
import { LoaderIcon } from "lucide-vue-next";
const { calculateDonationImpact } = useDonate();
const { formatCurrency } = useFormat();

const isLoading = ref(false);

const donateOptions = ref<DonateOptions>({
  mode: "monthly",
  onceAmounts: [25, 50, 100, 200, 500, 1000, "custom"],
  monthlyAmounts: [50, 100, 150, 500, "custom"],
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

const amounts = computed(() =>
  donateOptions.value.mode === "once"
    ? donateOptions.value.onceAmounts
    : donateOptions.value.monthlyAmounts,
);

const impact = computed(
  () =>
    calculateDonationImpact(formData.value.amount, formData.value.mode)
      .statement,
);

const actionLabel = computed(() => {
  const amount = Number(formData.value.amount) || 0;
  const verb = formData.value.mode === "once" ? "Give" : "Give";
  const suffix = formData.value.mode === "once" ? "once" : "monthly";
  return amount > 0
    ? `${verb} ${formatCurrency(amount)} ${suffix}`
    : `${verb} ${suffix}`;
});

const hasAmount = computed(() => Number(formData.value.amount) > 0);

const handleSubmit = () => {
  if (!hasAmount.value) return;
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    window.open("http://paypal.me/openkidsafrica", "__blank");
  }, 2000);
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
  <form @submit.prevent="handleSubmit" class="donate-form">
    <div class="wrapper">
      <div class="donate-form__modes" role="group" aria-label="How often">
        <button
          type="button"
          class="donate-form__mode"
          :class="{ 'donate-form__mode--active': donateOptions.mode == 'once' }"
          :aria-pressed="donateOptions.mode == 'once'"
          @click="() => changeMode('once')"
        >
          Give Once
        </button>
        <button
          type="button"
          class="donate-form__mode"
          :class="{
            'donate-form__mode--active': donateOptions.mode == 'monthly',
          }"
          :aria-pressed="donateOptions.mode == 'monthly'"
          @click="() => changeMode('monthly')"
        >
          Give Monthly
        </button>
      </div>

      <div class="form-control !gap-3">
        <span class="donate-form__label">
          {{
            donateOptions.mode == "once"
              ? "Choose an amount to give once"
              : "Choose an amount to give monthly"
          }}
        </span>
        <DonateAmountFormGroup
          :amounts="amounts"
          v-model:form-data="formData"
        />
      </div>

      <div v-if="impact" class="donate-form__impact" aria-live="polite">
        <span class="donate-form__impact-label">What this gift does</span>
        <p class="donate-form__impact-text">{{ impact }}</p>
      </div>

      <div class="mt-auto flex flex-col gap-3">
        <button
          :disabled="isLoading || !hasAmount"
          type="submit"
          class="btn w-full !py-4"
        >
          <LoaderIcon v-if="isLoading" class="icon animate-spin" />
          <span class="text">{{ actionLabel }}</span>
        </button>
        <p class="donate-form__note">
          You will complete your gift securely on PayPal.
        </p>
      </div>
    </div>
  </form>
</template>
