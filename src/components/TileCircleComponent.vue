<script setup>
import { defineProps } from "vue";

defineProps({ tile: { required: true, type: Object } });
</script>
<template>
  <RouterLink
    :to="{ name: tile.link }"
    class="group h-[237px] w-[275px] bg-gradient-to-r from-blue-600 to-green-300 bg-opacity-70 rounded-2xl flex flex-col items-center justify-center relative gap-4 cursor-pointer"
  >
    <div
      class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center"
    >
      <div
        class="w-[153px] h-[153px] bg-gradient-to-r from-blue-600 to-green-300 border-4 rounded-full flex justify-center items-center -mt-20"
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
      </div>
    </div>

    <h2
      class="text-center font-medium text-primary-dark text-3xl group-hover:text-white"
    >
      {{ tile.title }}
    </h2>
  </RouterLink>
</template>
