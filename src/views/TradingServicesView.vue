<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Trading Services", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-mx-6">
      <h1 class="flex items-center space-x-2">
        <span
          ><img
            src="@/assets/images/heading-left.png"
            alt="heading-icon"
          />
        </span>
        <span class="text-primary-dark font-semibold">Trading Services</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <p class="font-normal pb-4">
        Pakistan Single Window (PSW) system serves as an established centralized
        hub designed to streamline and digitize cross-border trade processes in
        Pakistan.
      </p>
      <p class="font-normal pb-4">
        PSW subscribers can benefit from a range of services, including
        registration with Customs for clearance and interaction with Other
        Government Authorities (OGAs) for obtaining regulatory licenses,
        permits, certificates, and other necessary documents. The system also
        facilitates electronic payments, making transactions more efficient.
      </p>
      <p class="font-normal pb-4">
        For further details and registration, click
        <a
          href="https://www.psw.gov.pk/"
          target="_blank"
          class="text-blue-500 font-bold hover:underline"
          >here</a
        >
      </p>
    </div>
  </section>
</template>
