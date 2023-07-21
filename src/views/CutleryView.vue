<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Expansion/Diversification", link: "expansion-diversification" },
    { title: "Cutlery Sector", link: "" },
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
        <span class="text-primary-dark font-semibold">Cutlery Sector</span>
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
          href="https://smeda.org/phocadownload/Sectoral_Information/Light_Engineering/Cutlery%20Sector%20-%20Kitchenware%20Cutlery%202020.pdf"
          class="text-primary-dark hover:underline"
          >Kitchenware Cutlery [2020]</a
        >
      </li>
      <li>
        <a
          href="https://smeda.org/phocadownload/Sectoral_Information/Light_Engineering/Cutlery%20Sector%20-%20Non-Kitchenware%20Cutlery%202020.pdf"
          class="text-primary-dark hover:underline"
          >Non-Kitchenware Cutlery [2020]</a
        >
      </li>
      <li>
        <a
          href="https://smeda.org/phocadownload/Sectoral_Information/Light_Engineering/Cutlery%20Sector%20of%20Pakistan%202018.pdf"
          class="text-primary-dark hover:underline"
          >Cutlery Sector of Pakistan [2018]</a
        >
      </li>
    </ul>

    <h1
      class="my-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white py-2 px-2"
    >
      Know Your Approvals
    </h1>
    <ul class="pb-4 list-disc ps-8">
      <li>
        <p>NOC For Building Plan Approval</p>
      </li>
      <li>
        <p>Permission of new tube well/ ejector pump</p>
      </li>
      <li>
        <p>Water connection</p>
      </li>
      <li>
        <p>NOC for right of way</p>
      </li>
      <li>
        <p>License for Installation of New Distillery Plant.</p>
      </li>
      <li>
        <p>NOC for Effluent Disposal</p>
      </li>
      <li>
        <p>NOC form Irrigation Department that site is not prone to flooding</p>
      </li>
      <li>
        <p>
          L-42-B License (Possession of rectified spirit for industrial purpose)
        </p>
      </li>
      <li>
        <p>Agreement for usage of irrigation water for industrial purposes</p>
      </li>
      <li>
        <p>Approval of conversion of land use</p>
      </li>
      <li>
        <p>Building Plan Approval</p>
      </li>
      <li>
        <p>
          L-42-B License (Possession of rectified spirit for educational,
          scientific purpose)
        </p>
      </li>
      <li>
        <p>Registration of boilers</p>
      </li>
      <li>
        <p>Registration of pressure vessels</p>
      </li>
      <li>
        <p>Verification of weighing/measuring instruments</p>
      </li>
      <li>
        <p>Confirmation of compliance</p>
      </li>
      <li>
        <p>Recommendations for import approval</p>
      </li>
      <li>
        <p>NOC of H.T Installations</p>
      </li>
      <li>
        <p>Verification of test reports of L.T Installation</p>
      </li>
      <li>
        <p>NOC for installation of streamers</p>
      </li>
      <li>
        <p>NOC for Installation of Billboards</p>
      </li>
      <li>
        <p>Plot Sub division Approval</p>
      </li>
      <li>
        <p>Building Plans Approval, LDA Housing Scheme</p>
      </li>
      <li>
        <p>Building Plans Approval, Controlled Area</p>
      </li>
      <li>
        <p>Land use- Permitted Commercial (List A Roads)</p>
      </li>
      <li>
        <p>Land Use - Permissible Commercial</p>
      </li>
      <li>Completion Certificate</li>
      <li>Annual Commercialization Renewal</li>
      <li>Revised / Addition / Alteration / Rebuild Building Plans Approval</li>
      <li>Conversion of land use</li>
      <li>Building plan approval</li>
      <li>Completion Certificate</li>
    </ul>
  </div>
</template>
