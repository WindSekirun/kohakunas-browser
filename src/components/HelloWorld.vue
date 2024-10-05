<template>
  <v-app :dark="true">
    <v-container>
      <v-row class="d-flex align-center justify-center" style="height: 400px">
        <span class="text-h2 font-weight-bold">KohakuNas</span>
      </v-row>

      <svg class="arrows" @click="routeToList()">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>

      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="6"
          xs="12"
          lg="4"
        >
          <v-card class="mx-auto" outlined :id="index">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.description }}</v-card-subtitle>

            <v-card-actions>
              <v-btn @click="openLink(item.url)" icon>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
              <v-icon v-if="item.requiresVpn" class="ml-auto"> mdi-vpn </v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Item {
  title: string;
  description: string;
  url: string;
  requiresVpn: boolean;
}

const items = ref<Item[]>([]);

const openLink = (url: string) => {
  window.open(url, "_blank");
};

const routeToList = () => {
  window.location.hash = (items.value.length / 2).toString();
};

onMounted(async () => {
  try {
    const response = await fetch("/data/items.json");
    if (response.ok) {
      items.value = await response.json();
    } else {
      console.error("Failed to fetch data");
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

.arrows {
  width: 60px;
  height: 72px;
  position: relative;
  left: 50%;
  margin-left: -30px;
  bottom: 20px;
}

.arrows path {
  stroke: #666666;
  fill: transparent;
  stroke-width: 1px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}

@keyframes arrow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes arrow /*Safari and Chrome*/ {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.arrows path.a1 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {
  animation-delay: 0s;
  -webkit-animation-delay: 0s; /* Safari 和 Chrome */
}
</style>
