<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Expansion/Diversification", link: "expansion-diversification" },
    { title: "Pharmaceutical Sector", link: "" },
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
  <div class="flex justify-between">
    <div class="-mx-6">
      <h1 class="flex items-center space-x-2">
        <span
          ><img
            src="@/assets/images/heading-left.png"
            alt="heading-icon"
          />
        </span>
        <span class="text-primary-dark font-semibold"
          >Pharmaceutical Sector</span
        >
      </h1>
    </div>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <h1
      class="my-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white py-2 px-2"
    >
      Sector Briefs
    </h1>
    <ul class="pb-4 list-disc ps-8">
      <li>
        <a
          href="https://smeda.org/phocadownload/Sectoral_Information/Pharmaceutical%20Sector%202022.pdf"
          class="text-primary-dark hover:underline"
          >Pharmaceutical Sector [2022]</a
        >
      </li>
    </ul>
    <h1
      class="my-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white py-2 px-2"
    >
      Pharmaceutical Pre-Feasibility Reports
    </h1>
    <ul class="pb-4 list-disc ps-8">
      <li>
        <a
          href="https://smeda.org/phocadownload/Prefeasibility_Studies/Health_and_Medical/Medical%20Store%20Rs.%205.95%20million%20Oct-2021.pdf"
          target="_blank"
          class="text-primary-dark hover:underline"
          >Medical Store [Rs. 5.95 million, Oct-2021]</a
        >
      </li>
      <li>
        <a
          href="https://smeda.org/phocadownload/Prefeasibility_Studies/Health_and_Medical/Pharmaceutical%20Distribution%20and%20Marketing%20Unit%20Rs.%20103.89%20million%20Dec-2022.pdf"
          target="_blank"
          class="text-primary-dark hover:underline"
          >Pharmaceutical Distribution and Marketing Unit [Rs. 103.89 million,
          Dec-2022]</a
        >
      </li>
    </ul>

    <h1
      class="my-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white py-2 px-2"
    >
      Know Your Approvals
    </h1>
    <ul class="pb-4 list-disc ps-8">
      <li>NOC For Building Plan Approval</li>
      <li>Permission of new tube well/ ejector pump</li>
      <li>Water connection</li>
      <li>NOC for right of way</li>
      <li>License for Installation of New Distillery Plant.</li>
      <li>NOC for Effluent Disposal</li>
      <li>NOC form Irrigation Department that site is not prone to flooding</li>
      <li>
        L-42-B License (Possession of rectified spirit for industrial purpose)
      </li>
      <li>Agreement for usage of irrigation water for industrial purposes</li>
      <li>Approval of conversion of land use</li>
      <li>Building Plan Approval</li>
      <li>
        L-42-B License (Possession of rectified spirit for educational,
        scientific purpose)
      </li>
      <li>Registration of boilers</li>
      <li>Registration of pressure vessels</li>
      <li>Verification of weighing/measuring instruments</li>
      <li>Confirmation of compliance</li>
      <li>Recommendations for import approval</li>
      <li>NOC of H.T Installations</li>
      <li>Verification of test reports of L.T Installation</li>
      <li>NOC for installation of streamers</li>
      <li>NOC for Installation of Billboards</li>
      <li>Plot Sub division Approval</li>
      <li>Building Plans Approval, LDA Housing Scheme</li>
      <li>Building Plans Approval, Controlled Area</li>
      <li>Land use- Permitted Commercial (List A Roads)</li>
      <li>Land Use - Permissible Commercial</li>
      <li>Completion Certificate</li>
      <li>Annual Commercialization Renewal</li>
      <li>Revised / Addition / Alteration / Rebuild Building Plans Approval</li>
      <li>Conversion of land use</li>
      <li>Building plan approval</li>
      <li>Completion Certificate</li>
    </ul>
  </div>
</template>
