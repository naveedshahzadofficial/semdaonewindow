<script setup>
import { defineProps } from "vue";

defineProps({ tile: { required: true, type: Object } });
</script>
<template>
  <a
    :href="tile.link"
    target="_blank"
    :class="tile.classes"
    class="group h-60 w-60 rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer"
  >
    <span class="relative">
      <img
        class="object-cover transition-opacity"
        :src="tile.icon"
        :alt="tile.title"
      />
      <img
        class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        :src="tile.icon_hover"
        :alt="tile.title"
      />
    </span>

    <h2
      class="font-normal text-center text-white text-xl group-hover:text-primary-dark"
    >
      {{ tile.title }}
    </h2>
    <img
      class="absolute bottom-0 right-0 opacity-50"
      :src="tile.icon_side"
      :alt="tile.title"
    />
  </a>
</template>
