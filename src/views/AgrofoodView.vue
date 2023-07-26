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
    { title: "Agro Food", link: "" },
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
          <span class="text-white font-semibold ml-8">Agro Food</span>
        </h1>
      </div>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <h1
        class="flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[250px] h-[27px]"
      >
        <span class="text-primary-dark font-semibold ml-4">Sector Briefs</span>
      </h1>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>
          <a
            href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=36:horticultureaagriculture&Itemid=139"
            target="_blank"
            class="text-primary-dark hover:underline"
            >Horticulture & Agriculture</a
          >
        </li>
      </ul>
      <h1
        class="flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[250px] h-[27px]"
      >
        <span class="text-primary-dark font-semibold ml-4"
          >Pre-feasibility report</span
        >
      </h1>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>
          <a
            href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=124:agriculture-food-processing&Itemid=308"
            target="_blank"
            class="text-primary-dark hover:underline"
            >Agriculture and Food Processing</a
          >
        </li>
      </ul>
      <h1
        class="flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[250px] h-[27px]"
      >
        <span class="text-primary-dark font-semibold ml-4"
          >Business Guides</span
        >
      </h1>
      <ul class="pb-4 list-disc ps-8 capitalize">
        <li>
          <a
            href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=176:agrofood&Itemid=981"
            target="_blank"
            class="text-primary-dark hover:underline"
            >Agrofood</a
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
      <ul class="pb-4 list-disc ps-8">
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
        <li>Halal Certificate</li>
        <li>
          License to Food Business Operator working food products in any area
          but selling products within jurisdiction of Punjab Food Authority
        </li>
        <li>Certificate Food Product Registration</li>
        <li>Label approval</li>
        <li>Transit Permit to carry wood/forest produce</li>
        <li>Leasing of fishing rights</li>
        <li>License for FAT Rendering Unit</li>
        <li>Food grain license</li>
        <li>Flour mills registration/wheat quota Enlistment</li>
        <li>Distribution & Sale of Pesticide</li>
        <li>Distribution and Sale Fertilizer</li>
        <li>License for sugar Broker</li>
        <li>License for Purchasing Agent</li>
        <li>Registration of market functionaries</li>
        <li>Registration of Market Workers</li>
        <li>
          Installation License for cotton ginning, pressing and seed oil factory
        </li>
        <li>
          Working License for cotton ginning, pressing and seed oil factory
        </li>
        <li>Crop variety testing and approval</li>
        <li>Crop variety registration</li>
        <li>Registration of seed and person</li>
        <li>Conformity Assessment of product</li>

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
