<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit(
    "background",
    require("@/assets/images/Construction-Permit-Background-image.jpg")
  );
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Construction Permit", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-ms-6">
      <h1
        class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
      >
        <span class="text-white font-semibold ml-8">Construction Permit</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px] grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-2">
        <p class="font-normal pb-4">
          Driven by a profound commitment to the construction industry's
          progress and efficient construction permits, the Government of
          Punjab's e-Khidmat project pioneers specialized industrial services.
          To acquire construction permits and their associated information,
          including official authorizations to commence construction or
          renovation projects within a specific geographical region.
        </p>
        <p class="font-normal pb-4">
          To access more information, kindly click
          <a
            href="https://ekhidmat.punjab.gov.pk/construction-industry-services"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >here</a
          >
        </p>
      </div>
      <div
        class="flex items-center justify-center w-[300px] md:w-[370px] md:h-[388px]"
      >
        <img
          class="object-cover rounded-2xl"
          src="@/assets/images/Construction-Permit-side.png"
          alt="Construction Permit"
        />
      </div>
    </div>
  </section>
</template>
