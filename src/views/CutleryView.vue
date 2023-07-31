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
  <section class="px-4 py-8">
    <div class="flex justify-between">
      <div class="-mx-6">
        <h1
          class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
        >
          <span class="text-white font-semibold ml-8">Cutlery Sector</span>
        </h1>
      </div>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <h1
        class="flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[250px] h-[27px]"
      >
        <span class="text-primary-dark font-semibold ml-4">Sector Briefs</span>
      </h1>
      <ul class="pb-4 list-disc ps-8 normal-case">
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
      <ul class="pb-4 list-disc ps-8 normal-case">
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
        <li>Land Use- Permitted Commercial (List A Roads)</li>
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
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>Registration of Boilers</li>
        <li>Registration of Pressure Vessels</li>
        <li>Verification of Weighing/Measuring Instruments</li>
      </ul>
      <h3
        class="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Irrigation
      </h3>
      <ul class="pb-4 list-disc ps-8 capitalize">
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
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>Halal Certificate</li>
        <li>Food Business License/Registration</li>
        <li>Quality Testing</li>
        <li>License for Installation of New Distillery Plant.</li>
        <li>NOC for Effluent Disposal</li>
        <li>Verification of Test Reports of L.T Installation</li>
        <li>NOC of H.T Installations</li>
        <li>Recommendations for Import Approval</li>
        <li>Completion Certificate</li>
        <li>Confirmation of Compliance</li>
      </ul>
    </div>
  </section>
</template>
