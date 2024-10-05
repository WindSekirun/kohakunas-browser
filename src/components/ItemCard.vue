<template>
  <v-card class="pa-2" outlined :id="index" @click="openLink(item)">
    <v-list-item
      density="comfortable"
      min-height="80px"
      :subtitle="item.description"
    >
      <template v-slot:title>
        <span class="font-weight-bold text-h5">
          {{ item.title }}
        </span>
      </template>
      <template v-slot:append>
        <v-tooltip text="VPN 연결 필요" location="top">
          <template v-slot:activator="{ props }">
            <v-icon
              icon="mdi-vpn"
              class="me-5"
              v-if="item.requiresVpn"
              v-bind="props"
            ></v-icon>
          </template>
        </v-tooltip>

        <v-icon icon="mdi-link" v-if="item.type == 'url'"></v-icon>
        <v-icon icon="mdi-send" v-if="item.type == 'telegram'"></v-icon>
      </template>
    </v-list-item>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  item: Item;
  index: number;
}>();

const openLink = (item: Item) => {
  switch (item.type) {
    case "url":
      window.open(item.url, "_blank");
      break;
    case "telegram":
      window.open(`https://t.me/${item.url}`, "_blank");
      break;
  }
};
</script>
