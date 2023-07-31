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
      <div class="-ms-6">
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
      <ul class="pb-4 list-disc ps-8">
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
      <ul class="pb-4 list-disc ps-8">
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
      <ul class="pb-4 list-disc ps-8">
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
        <li>Halal Certificate</li>
        <li>
          License to Food Business Operator Working Food Products in Any Area
          But Selling Products within Jurisdiction of Punjab Food Authority
        </li>
        <li>Certificate Food Product Registration</li>
        <li>Label Approval</li>
        <li>Transit Permit to Carry Wood/Forest Produce</li>
        <li>Leasing of Fishing Rights</li>
        <li>License for FAT Rendering Unit</li>
        <li>Food Grain License</li>
        <li>Flour Mills Registration/Wheat Quota Enlistment</li>
        <li>Distribution & Sale of Pesticide</li>
        <li>Distribution and Sale Fertilizer</li>
        <li>License for Sugar Broker</li>
        <li>License for Purchasing Agent</li>
        <li>Registration of Market Functionaries</li>
        <li>Registration of Market Workers</li>
        <li>
          Installation License for Cotton Ginning, Pressing and Seed Oil Factory
        </li>
        <li>
          Working License for Cotton Ginning, Pressing and Seed Oil Factory
        </li>
        <li>Crop Variety Testing and Approval</li>
        <li>Crop Variety Registration</li>
        <li>Registration of Seed and Person</li>
        <li>Conformity Assessment of Product</li>

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
