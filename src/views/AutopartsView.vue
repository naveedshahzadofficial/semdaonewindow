<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Plan", link: "plan" },
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
      <div class="-ms-6">
        <h1
          class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
        >
          <span class="text-white font-semibold ml-8">Autoparts</span>
        </h1>
      </div>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <h1
        class="hidden flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[250px] h-[27px]"
      >
        <span class="text-primary-dark font-semibold ml-4"
          >Pre-Feasibility Reports</span
        >
      </h1>
      <ul class="hidden pb-4 list-disc ps-8">
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
      <ul class="pb-4 list-disc ps-8">
        <li>NOC for Building Plan Approval</li>
        <li>Building Plan Approval</li>
        <li>Building Plans Approval, Controlled Area</li>
        <li>Building Plans Approval, LDA Housing Scheme</li>
        <li>
          Revised / Addition / Alteration / Rebuild Building Plans Approval
        </li>
        <li>Annual Commercialization Renewal</li>
        <li>Approval of Conversion of Land Use</li>
        <li>Conversion of Land Use</li>
        <li>
          L-42-B License (Possession of Rectified Spirit for Educational,
          Scientific Purpose)
        </li>
        <li>
          L-42-B License (Possession of Rectified Spirit for Industrial Purpose)
        </li>
        <li>Land Use - Permissible Commercial</li>
        <li>Land use- Permitted Commercial (List A Roads)</li>
        <li>Plot Sub Division Approval</li>
        <li>NOC for Right of Way</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        PHA
      </h3>
      <ul class="pb-4 list-disc ps-8">
        <li>NOC for Installation of Billboards</li>
        <li>NOC for Installation of Streamers</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Industry Department
      </h3>
      <ul class="pb-4 list-disc ps-8">
        <li>Registration of Boilers</li>
        <li>Registration of Pressure Vessels</li>
        <li>Verification of Weighing/Measuring Instruments</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Irrigation
      </h3>
      <ul class="pb-4 list-disc ps-8">
        <li>Agreement for Usage of Irrigation Water for Industrial Purposes</li>
        <li>
          NOC form Irrigation Department that Site is Not Prone to Flooding
        </li>
        <li>Permission of New Tube Well/ Ejector Pump</li>
        <li>Water Connection</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Others
      </h3>
      <ul class="pb-4 list-disc ps-8">
        <li>License for Installation of New Distillery Plant.</li>
        <li>NOC for Effluent Disposal</li>
        <li>Verification of test reports of L.T Installation</li>
        <li>NOC of H.T Installations</li>
        <li>Recommendations for Import Approval</li>
        <li>Completion Certificate</li>
        <li>Confirmation of Compliance</li>
      </ul>
    </div>
  </section>
</template>
