<template>
  <v-row>
    <v-col
      v-for="(item, index) in list"
      :key="index"
      cols="12"
      sm="6"
      xs="12"
      lg="4"
    >
      <slot :item="item" :index="index"></slot>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps<{
  list: any[];
}>();
</script>
