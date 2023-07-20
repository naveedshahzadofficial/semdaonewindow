<script setup>
import { defineProps } from "vue";

defineProps({
  breadcrumbs: { type: Object },
});
</script>
<template>
  <div
    v-if="breadcrumbs"
    class="w-full bg-blue-400 h-8"
  >
    <ul class="flex items-center px-4 h-full">
      <template
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
      >
        <li
          v-if="breadcrumb.link"
          class="cursor-pointer text-primary-dark font-semibold hover:text-primary-light"
        >
          <RouterLink :to="{ name: breadcrumb.link }">
            {{ breadcrumb.title }}
          </RouterLink>
        </li>
        <li v-else>
          <span class="text-gray-200 font-semibold">{{
            breadcrumb.title
          }}</span>
        </li>
        <li
          v-if="breadcrumbs.length - 1 !== index"
          class="text-gray-300 font-semibold"
        >
          &nbsp;/&nbsp;
        </li>
      </template>
    </ul>
  </div>
</template>
