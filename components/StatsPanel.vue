<script setup lang="ts">
defineProps<{
  stats: { value: string; label: string }[];
}>();
</script>
<template>
  <dl class="stats">
    <div v-for="stat in stats" :key="stat.label" class="stats__item">
      <dt class="stats__value">{{ stat.value }}</dt>
      <dd class="stats__label">{{ stat.label }}</dd>
    </div>
  </dl>
</template>
