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
      Pakistan Single Window (PSW) system is a digital platform established to
      streamline and digitize cross-border trade processes in Pakistan. It
      serves as a centralized hub where businesses can access various services
      related to cross-border trade and transit. PSW subscribers can benefit
      from a range of services, including registration with Customs for
      clearance and interaction with Other Government Authorities (OGAs) for
      obtaining regulatory licenses, permits, certificates, and other necessary
      documents. The system also facilitates electronic payments, making
      transactions more efficient. The primary objectives of the PSW system are
      to reduce costs and time associated with cross-border trade, enhance
      transparency in trade regulations, and provide data visibility. In
      addition to its operational goals, the PSW system also focuses on data
      processing capabilities.
    </p>
    <a
      href="https://www.psw.gov.pk/"
      target="_blank"
      class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
      >Pakistan Single Window
    </a>
  </div>
</template>
