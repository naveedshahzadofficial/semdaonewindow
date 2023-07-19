<script setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <div class="-mx-6">
    <h1 class="flex items-center">
      <span
        ><img
          src="@/assets/images/heading-left.png"
          alt="heading-icon"
        />
      </span>
      <span class="text-primary-dark font-semibold">Pharmaceuticals</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
      cupiditate quos dignissimos voluptatum numquam ut alias magnam totam
      maxime ea et, consectetur at voluptas necessitatibus corporis, a quibusdam
      omnis similique.
    </p>
  </div>
</template>
