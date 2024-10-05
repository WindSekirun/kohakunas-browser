<template>
  <div>
    <span class="title-text">
      {{ uppercaseLabel }}:
      <span class="font-weight-bold title-text">{{ value }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Spec } from "../model/Spec";

const props = defineProps<{
  label: string;
  spec: Spec;
}>();

const uppercaseLabel = computed(() => {
  return props.label.toUpperCase();
});

const value = computed(() => {
  return props.spec[props.label];
});
</script>

<style>
.title-text {
  color: #d8dee9;
}
</style>
