<script setup>
import { defineProps } from "vue";

defineProps({ tile: { required: true, type: Object } });
</script>
<template>
  <RouterLink
    :to="{ name: tile.link }"
    :style="{ background: `url(${tile.bg}) no-repeat` }"
    class="group h-[439px] w-[295px] from-blue-600 to-green-300 bg-opacity-70 rounded flex flex-col items-center justify-center relative gap-4 cursor-pointer"
  >
  <div class="mt-52">
    <h2
      class="text-center font-medium text-primary-dark text-3xl group-hover:text-white"
    >
      {{ tile.title }}
    </h2>

    <p
      v-if="tile.tag_line"
      class="text-black font-normal text-center group-hover:text-white h-[25px]"
    >
      {{ tile.tag_line }}
    </p>
  </div>
  </RouterLink>
</template>
