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
      <span class="text-primary-dark font-semibold">SEZs Services</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Special Economic Zone (SEZ) represents a delineated geographical region
      within a country that aims to foster accelerated economic expansion and
      attract foreign investment. SEZs typically enjoy distinctive and
      advantageous economic regulations, encompassing tax incentives, reduced
      tariffs, streamlined customs protocols, and relaxed labor laws. These
      zones are established to cultivate an investor-centric milieu, prompting
      the establishment of local and international businesses, encompassing
      manufacturing units, thereby fostering substantial economic growth and
      employment opportunities. For further details, click here.
    </p>
    <a
      href="https://sezmis.invest.gov.pk/sez"
      target="_blank"
      class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
      >SEZMIS
    </a>
  </div>
</template>
