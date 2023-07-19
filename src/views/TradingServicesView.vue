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
      <span class="text-primary-dark font-semibold">Trading Services</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <h2 class="font-semibold py-2">Pakistan Single Window (PSW)</h2>

    <p class="font-normal pb-4">
      Pakistan Single Window (PSW) system serves as an established centralized
      hub designed to streamline and digitize cross-border trade processes in
      Pakistan.
    </p>
    <p class="font-normal pb-4">
      PSW subscribers can benefit from a range of services, including
      registration with Customs for clearance and interaction with Other
      Government Authorities (OGAs) for obtaining regulatory licenses, permits,
      certificates, and other necessary documents. The system also facilitates
      electronic payments, making transactions more efficient.
    </p>
    <p class="font-normal pb-4">
      For further details and registration, click on the button below
    </p>
    <a
      href="https://www.psw.gov.pk/"
      target="_blank"
      class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
      >Pakistan Single Window
    </a>
  </div>
</template>
