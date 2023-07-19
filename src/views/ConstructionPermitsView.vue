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
      <span class="text-primary-dark font-semibold">Construction Permit</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      To acquire construction permits and their associated information,
      including official authorizations to commence construction or renovation
      projects within a specific geographical region, please refer to the link
      below. The provided resource encompasses crucial details for the
      following: 
      <ul class="pb-4 list-disc ps-8">
        <li>Approval of Building Plans</li>
        <li>Private Housing Scheme Approval</li>
        <li>Change of Land Use</li>
        <li>Issuance of Completion Certificates</li>
      </ul>
    </p>

    <a
      href="https://ekhidmat.punjab.gov.pk/construction-industry-services"
      target="_blank"
      class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
      >e-Khidmat Markaz
    </a>

  </div>
</template>
