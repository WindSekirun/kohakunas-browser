<template>
  <div class="d-flex align-center" style="height: 100px">
    <span class="text-h5 font-weight-light me-2">{{ title }}</span>
    <v-divider></v-divider>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
