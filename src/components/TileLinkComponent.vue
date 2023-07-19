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
      class="font-normal text-center text-primary-dark text-xl group-hover:text-white"
    >
      {{ tile.title }}
    </h2>
    <img
      class="absolute -bottom-2 -right-2 opacity-30 object-cover"
      :src="tile.icon_side"
      :alt="tile.title"
    />
  </a>
</template>
