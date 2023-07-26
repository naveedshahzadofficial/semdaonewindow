<script setup>
import { defineProps } from "vue";

defineProps({
  breadcrumbs: { type: Object },
});
</script>
<template>
  <div
    v-if="breadcrumbs"
    class="w-full bg-[#0064e9] h-8 overflow-hidden"
  >
    <ul class="flex items-center px-4 h-full">
      <template
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
      >
        <li
          v-if="breadcrumb.link"
          class="cursor-pointer text-primary-dark font-normal md:font-semibold hover:text-primary-light text-xs md:text-sm"
        >
          <RouterLink :to="{ name: breadcrumb.link }">
            {{ breadcrumb.title }}
          </RouterLink>
        </li>
        <li v-else>
          <span
            class="text-gray-200 font-normal md:font-semibold text-xs md:text-sm"
            >{{ breadcrumb.title }}</span
          >
        </li>
        <li
          v-if="breadcrumbs.length - 1 !== index"
          class="text-gray-300 font-normal md:font-semibold text-xs md:text-sm"
        >
          &nbsp;/&nbsp;
        </li>
      </template>
    </ul>
  </div>
</template>
