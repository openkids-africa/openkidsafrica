<script setup lang="ts">
interface AmountFormGroupProps {
  amounts: DonateAmountOption[];
  formData: DonateFormData;
}

const { formatCurrency } = useFormat();

defineProps<AmountFormGroupProps>();
defineEmits(["update:formData"]);
</script>
<template>
  <div class="form-group donate-form__amount-group">
    <label
      :for="`amount-${amount}`"
      v-for="amount in amounts.filter(
        (amount) => typeof amount == 'number',
      ) as number[]"
      class="form-control form-control--radio"
    >
      {{ formatCurrency(amount) }} USD
      <input
        :key="amount"
        type="radio"
        :id="`amount-${amount}`"
        :value="amount"
        class="form-radio"
        v-model="formData.amountOption"
        @input="
          (e) =>
            (formData.amount = parseInt((e.target as HTMLInputElement)?.value))
        "
      />
    </label>
    <label for="custom-amount" class="form-control form-control--radio">
      <input
        type="radio"
        id="custom-amount"
        class="form-radio"
        value="custom"
        v-model="formData.amountOption"
      />
      <span v-if="formData.amountOption !== 'custom'"> Custom amount </span>
      <span v-else>
        $
        <input
          type="number"
          class="form-input"
          placeholder="Custom Amount"
          v-model="formData.amount"
        />
        USD
      </span>
    </label>
  </div>
</template>
