<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Complaints / Feedback", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-mx-6">
      <h1
        class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[300px]"
      >
        <span class="text-white font-semibold ml-8">Complaints / Feedback</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <ul class="pb-4 ps-8 capitalize">
        <li>Mr. Hafiz Shahzad</li>
        <li>Assistant Manager (Punjab)</li>
        <li>SMEDA</li>
        <li>
          Address: 3rd Floor, 3rd Building, Aiwan-e-Iqbal Complex, Egerton Road,
          Lahore
        </li>
        <li>Phone: (042)111-111-456</li>
        <li>Email: helpdesk.punjab@smeda.org.pk</li>
      </ul>
    </div>
  </section>
</template>
