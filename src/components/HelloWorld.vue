<template>
  <v-app :dark="true">
    <v-container color="#3B4252">
      <v-row class="align-center justify-center" style="margin-top: 125px">
        <v-avatar size="52px">
          <v-img
            alt="Avatar"
            src="../assets/android-chrome-192x192.png"
            variant="elevated"
          ></v-img>
        </v-avatar>
        <span class="ms-2 text-h2 font-weight-bold title-text">KohakuNas</span>
      </v-row>
      <v-row
        class="align-center justify-center title-text"
        style="margin-bottom: 80px"
      >
        <span class="text-h6">by @WindSekirun</span>
      </v-row>

      <ArrowView @click="routeToList()" />

      <DividerView title="Services" />

      <ItemGroup :list="urlList" v-slot="{ item, index }">
        <ItemCard :item="item" :index="index"></ItemCard>
      </ItemGroup>

      <DividerView title="Telegram" />

      <ItemGroup :list="telegramList" v-slot="{ item, index }">
        <ItemCard :item="item" :index="index"></ItemCard>
      </ItemGroup>

      <DividerView title="Spec" />
      <div class="" v-if="spec">
        <SpecElement label="cpu" :spec="spec" />
        <SpecElement label="ram" :spec="spec" />
        <SpecElement label="model" :spec="spec" />
        <SpecElement label="gpu" :spec="spec" />
        <SpecElement label="disk0" :spec="spec" />
        <SpecElement label="disk1" :spec="spec" />
        <SpecElement label="os" :spec="spec" />
        <SpecElement label="internet" :spec="spec" />
      </div>

      <div style="height: 200px"></div>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { Item } from "../model/Item";
import { Spec } from "../model/Spec";

const items = ref<Item[]>([]);
const spec = ref<Spec>();

const urlList = computed(() => {
  return items.value
    .filter((element) => element.type == "url")
    .sort((a, b) => a.title.localeCompare(b.title));
});

const telegramList = computed(() => {
  return items.value
    .filter((element) => element.type == "telegram")
    .sort((a, b) => a.title.localeCompare(b.title));
});

const routeToList = () => {
  window.location.hash = (items.value.length / 3).toString();
};

onMounted(async () => {
  try {
    const itemResponse = await fetch("/data/items.json");
    if (itemResponse.ok) {
      items.value = await itemResponse.json();
    }

    const specResponse = await fetch("/data/spec.json");
    if (specResponse.ok) {
      spec.value = await specResponse.json();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
.title-text {
  color: #d8dee9;
}
</style>
