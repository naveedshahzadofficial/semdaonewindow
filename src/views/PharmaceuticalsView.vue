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
  <section class="px-4 py-8">
    <div class="flex justify-between">
      <div class="-ms-6">
        <h1
          class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[270px]"
        >
          <span class="text-white font-semibold ml-4"
            >Pharmaceutical Sector</span
          >
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
            href="https://smeda.org/phocadownload/Sectoral_Information/Pharmaceutical%20Sector%202022.pdf"
            class="text-primary-dark hover:underline"
            >Pharmaceutical Sector [2022]</a
          >
        </li>
      </ul>
      <h1
        class="flex items-center my-4 py-2 px-2 bg-[url('@/assets/images/Patti-Subheading.png')] bg-cover bg-no-repeat w-[300px] md:w-[360px] h-[37px]"
      >
        <span class="text-primary-dark font-semibold ml-4 text-xs md:text-base"
          >Pharmaceutical Pre-Feasibility Reports</span
        >
      </h1>
      <ul class="pb-4 list-disc ps-8 capitalize">
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
        <li>Registration with National Council for Tib</li>
        <li>Registration with National Council for Homeopathy</li>
        <li>Registration with Pakistan Veterinary Medical Council</li>
        <li>Drug Sale License Pharmacist/Medical Store</li>
        <li>License for Import of Drugs</li>
        <li>Registration of Pesticide Distributors</li>
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
