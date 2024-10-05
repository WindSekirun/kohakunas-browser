<template>
  <div class="d-flex align-center" style="height: 100px">
    <span class="text-h5 font-weight-light me-2 title-text">{{ title }}</span>
    <v-divider></v-divider>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="css">
.title-text {
  color: #d8dee9;
}
</style>
