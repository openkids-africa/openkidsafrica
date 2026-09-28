<script setup lang="ts">
interface AmountFormGroupProps {
  amounts: DonateAmountOption[];
  formData: DonateFormData;
}

const { formatCurrency } = useFormat();

const props = defineProps<AmountFormGroupProps>();
defineEmits(["update:formData"]);

/* The custom option fills whatever is left of the last row, so it never
   sits alone in a corner or wraps its label. Two columns on phones, three
   from sm up. */
const customSpan = computed(() => {
  const presets = props.amounts.filter((a) => typeof a === "number").length;
  const phone = presets % 2 === 0 ? "col-span-2" : "col-span-1";
  const wide = { 0: "sm:col-span-3", 1: "sm:col-span-2", 2: "sm:col-span-1" }[
    presets % 3
  ];
  return `${phone} ${wide}`;
});

const customInput = ref<HTMLInputElement | null>(null);
const isCustom = computed(() => props.formData.amountOption === "custom");

/* Choosing "Custom amount" opens a proper field and puts the cursor in it. */
watch(isCustom, async (custom) => {
  if (!custom) return;
  await nextTick();
  customInput.value?.focus();
  customInput.value?.select();
});
</script>
<template>
  <div class="donate-form__amounts">
    <div class="donate-form__amount-group">
      <label
        :for="`amount-${amount}`"
        v-for="amount in amounts.filter(
          (amount) => typeof amount == 'number',
        ) as number[]"
        :key="amount"
        class="form-control form-control--radio"
      >
        {{ formatCurrency(amount) }}
        <input
          type="radio"
          :id="`amount-${amount}`"
          :value="amount"
          class="form-radio"
          v-model="formData.amountOption"
          @input="
            (e) =>
              (formData.amount = parseInt(
                (e.target as HTMLInputElement)?.value,
              ))
          "
        />
      </label>
      <label
        for="custom-amount"
        class="form-control form-control--radio whitespace-nowrap"
        :class="customSpan"
      >
        <input
          type="radio"
          id="custom-amount"
          class="form-radio"
          value="custom"
          v-model="formData.amountOption"
        />
        Custom amount
      </label>
    </div>

    <div v-if="isCustom" class="donate-form__custom">
      <label for="custom-amount-input" class="donate-form__label">
        Enter your amount
      </label>
      <div class="donate-form__custom-field">
        <span class="donate-form__custom-affix" aria-hidden="true">$</span>
        <input
          ref="customInput"
          id="custom-amount-input"
          type="number"
          inputmode="numeric"
          min="1"
          step="1"
          placeholder="0"
          class="donate-form__custom-input"
          aria-describedby="custom-amount-hint"
          v-model.number="formData.amount"
        />
        <span class="donate-form__custom-affix donate-form__custom-affix--end">
          USD
        </span>
      </div>
      <p id="custom-amount-hint" class="donate-form__custom-hint">
        Any amount helps deliver free tech lessons to rural schools.
      </p>
    </div>
  </div>
</template>
