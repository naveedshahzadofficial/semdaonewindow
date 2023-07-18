<script setup>
defineProps(["tile"]);
</script>
<template>
  <div
    class="group h-60 w-60 bg-orange-400 rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer hover:scale-110 transition-transform"
  >
    <span class="relative">
      <img
        class="object-cover transition-opacity"
        src="@/assets/images/construction-permits.png"
        alt="Cutlery"
      />
      <img
        class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        src="@/assets/images/construction-permits-hover.png"
        alt="Cutlery"
      />
    </span>

    <h2 class="font-medium text-white text-xl group-hover:text-primary-dark">
      Cutlery
    </h2>
    <img
      class="absolute bottom-0 right-0 opacity-50"
      src="@/assets/images/construction-permits.png"
      alt="Pharmaceuticals"
    />
  </div>
</template>
