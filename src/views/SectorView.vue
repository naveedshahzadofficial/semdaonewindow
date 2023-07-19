<script setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <section>
    <div class="-mx-6">
      <h1 class="flex items-center">
        <span
          ><img
            src="@/assets/images/heading-left.png"
            alt="heading-icon"
          />
        </span>
        <span class="text-primary-dark font-semibold">Select Sector</span>
      </h1>
    </div>
    <!-- Start: Tiles -->
    <div class="flex items-center justify-center gap-6 py-10">
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

        <h2
          class="font-medium text-white text-xl group-hover:text-primary-dark"
        >
          Cutlery
        </h2>
        <img
          class="absolute bottom-0 right-0 opacity-50"
          src="@/assets/images/construction-permits.png"
          alt="Pharmaceuticals"
        />
      </div>
      <div
        class="group h-60 w-60 bg-blue-400 rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer hover:scale-110 transition-transform"
      >
        <img
          src="@/assets/images/construction-permits.png"
          alt="Pharmaceuticals"
        />
        <h2
          class="font-medium text-white text-xl group-hover:text-primary-dark"
        >
          Pharmaceuticals
        </h2>
        <img
          class="absolute bottom-0 right-0 opacity-50"
          src="@/assets/images/construction-permits.png"
          alt="Pharmaceuticals"
        />
      </div>
      <div
        class="group h-60 w-60 bg-red-400 rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer hover:scale-110 transition-transform"
      >
        <img
          src="@/assets/images/construction-permits.png"
          alt="Agrofood"
        />
        <h2
          class="font-medium text-white text-xl group-hover:text-primary-dark"
        >
          Agrofood
        </h2>
        <img
          class="absolute bottom-0 right-0 opacity-50"
          src="@/assets/images/construction-permits.png"
          alt="Pharmaceuticals"
        />
      </div>
      <div
        class="group h-60 w-60 bg-slate-400 rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer hover:scale-110 transition-transform"
      >
        <img
          src="@/assets/images/construction-permits.png"
          alt="Autoparts"
        />
        <h2
          class="font-medium text-white text-xl group-hover:text-primary-dark"
        >
          Autoparts
        </h2>
        <img
          class="absolute bottom-0 right-0 opacity-50"
          src="@/assets/images/construction-permits.png"
          alt="Pharmaceuticals"
        />
      </div>
    </div>
    <!-- End: Tiles -->
  </section>
</template>
<style scoped lang="scss"></style>
