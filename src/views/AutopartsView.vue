<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    {
      title: "Sector/Business Specific Information",
      link: "expansion-diversification",
    },
    { title: "Autoparts", link: "" },
  ]);
});
</script>
<style lang="scss">
tr:nth-child(even) {
  background-color: #f2f2f2; /* Set the background color for even rows */
}

tr:nth-child(odd) {
  background-color: #ffffff; /* Set the background color for odd rows */
}
td {
  @apply px-2 py-2;
  border: 1px solid #ccc; /* Add border to each td */
  padding: 8px; /* Add padding to each td */
}
</style>
<template>
  <section class="px-4 py-8">
    <div class="flex justify-between">
      <div class="-mx-6">
        <h1
          class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
        >
          <span class="text-white font-semibold ml-8">Autoparts</span>
        </h1>
      </div>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <h1
        class="flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[250px] h-[27px]"
      >
        <span class="text-primary-dark font-semibold ml-4"
          >Pre-Feasibility Reports</span
        >
      </h1>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>
          <a
            href="https://smeda.org/phocadownload/Prefeasibility_Studies/Engineering_and_Manufacturing/Motorcycle%20Chain%20Manufacturing%20Unit%20Rs.%20247.13%20million%20Jan-2023.pdf"
            target="_blank"
            class="text-primary-dark hover:underline"
            >Motorcycle Chain Manufacturing Unit [Rs. 247.13 million,
            Jan-2023]</a
          >
        </li>
        <li>
          <a
            href="https://smeda.org/phocadownload/Prefeasibility_Studies/Automobiles_and_Transport/Setting%20up%20Tractor%20and%20Agricultural%20Equipment%20Repair%20Unit%20Rs.%203.4%20million%20Aug-2021.pdf"
            target="_blank"
            class="text-primary-dark hover:underline"
            >Setting up Tractor / Agricultural Equipment Repair Unit [Rs. 3.4
            million, Aug-2021]</a
          >
        </li>
        <li>
          <a
            href="https://smeda.org/phocadownload/Prefeasibility_Studies/Automobiles_and_Transport/Setting-up%20Automotive%20Glass%20Replacement%20Shop%20Rs.%201.75%20million%20Aug-2021.pdf"
            target="_blank"
            class="text-primary-dark hover:underline"
            >Setting-up Automotive Glass Replacement Shop [Rs. 1.75 million,
            Aug-2021]</a
          >
        </li>
      </ul>
      <h1
        class="flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[250px] h-[27px]"
      >
        <span class="text-primary-dark font-semibold ml-4"
          >Know Your Approvals</span
        >
      </h1>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Construction
      </h3>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>NOC for Building Plan Approval</li>
        <li>Building Plan Approval</li>
        <li>Building Plans Approval, Controlled Area</li>
        <li>Building Plans Approval, LDA Housing Scheme</li>
        <li>
          Revised / Addition / Alteration / Rebuild Building Plans Approval
        </li>
        <li>Annual Commercialization Renewal</li>
        <li>Approval of conversion of land use</li>
        <li>Conversion of land use</li>
        <li>
          L-42-B License (Possession of rectified spirit for educational,
          scientific purpose)
        </li>
        <li>
          L-42-B License (Possession of rectified spirit for industrial purpose)
        </li>
        <li>Land Use - Permissible Commercial</li>
        <li>Land use- Permitted Commercial (List A Roads)</li>
        <li>Plot Sub division Approval</li>
        <li>NOC for right of way</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        PHA
      </h3>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>NOC for Installation of Billboards</li>
        <li>NOC for installation of streamers</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Industry Department
      </h3>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>Registration of boilers</li>
        <li>Registration of pressure vessels</li>
        <li>Verification of weighing/measuring instruments</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Irrigation
      </h3>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>Agreement for usage of irrigation water for industrial purposes</li>
        <li>
          NOC form Irrigation Department that site is not prone to flooding
        </li>
        <li>Permission of new tube well/ ejector pump</li>
        <li>Water connection</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Others
      </h3>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>License for Installation of New Distillery Plant.</li>
        <li>NOC for Effluent Disposal</li>
        <li>Verification of test reports of L.T Installation</li>
        <li>NOC of H.T Installations</li>
        <li>Recommendations for import approval</li>
        <li>Completion Certificate</li>
        <li>Confirmation of compliance</li>
      </ul>
    </div>
  </section>
</template>
