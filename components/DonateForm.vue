<script setup lang="ts">
interface DonateOptions {
  mode: "once" | "monthly";
  onceAmounts?: number[];
  monthlyAmounts?: number[];
}

const { formatCurrency } = useFormat();

const donateOptions = ref<DonateOptions>({
  mode: "once",
  onceAmounts: [50, 100, 200, 500, 1000],
  monthlyAmounts: [50, 100, 200, 500],
});

const formData = ref({
  mode: "once",
  amount: 50,
});

const changeMode = (mode: "once" | "monthly") =>
  (donateOptions.value.mode = mode);
</script>
<template>
  <div class="donate__options action-cont">
    <button
      @click="() => changeMode('once')"
      :class="`btn ${donateOptions.mode == 'once' ? 'btn--active' : ''}`"
    >
      Give Once
    </button>
    <button
      @click="() => changeMode('monthly')"
      :class="`btn ${donateOptions.mode == 'once' ? 'btn--active' : ''}`"
    >
      Give Monthly
    </button>
  </div>
  <form action="" class="site-form donate-once-form">
    <div class="wrapper">
      <div class="form-group">
        <label
          :for="`amount-${amount}`"
          v-for="amount in donateOptions.onceAmounts"
          class="form-control form-control--radio"
        >
          {{ formatCurrency(amount) }} USD
          <input
            :key="amount"
            type="radio"
            :id="`amount-${amount}`"
            :value="amount"
            class="form-radio"
            v-model="formData.amount"
          />
        </label>
      </div>
    </div>
  </form>
</template>
