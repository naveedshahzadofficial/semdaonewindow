<script setup>
import { defineProps } from "vue";

defineProps({ tile: { required: true, type: Object } });
</script>
<template>
  <a
    :href="tile.link"
    target="_blank"
    :class="tile.classes"
    class="group h-[237px] w-[201px] rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer overflow-hidden"
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
      class="font-normal text-center text-primary-dark text-base group-hover:text-white break-words px-2"
    >
      {{ tile.title }}
    </h2>
    <img
      class="absolute -bottom-6 -right-5 opacity-20 object-cover"
      :src="tile.icon_side"
      :alt="tile.title"
    />
  </a>
</template>
