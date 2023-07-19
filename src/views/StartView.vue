<script setup>
import { onMounted, ref, watch } from "vue";
const businessLink = ref(null);
const selectProvince = ref("");
onMounted(() => {
  window.scrollTo(0, 0);
});

const links = ref([
  {
    province: "punjab",
    name: "AOP Punjab",
    link: "https://register.business.punjab.gov.pk",
  },
  {
    province: "sindh",
    name: "AOP Sindh",
    link: "https://business.sindh.gov.pk/",
  },
  {
    province: "balochistan",
    name: "AOP Balochistan",
    link: "https://business.balochistan.gov.pk/",
  },
]);

watch(selectProvince, () => {
  console.log(selectProvince.value);
  businessLink.value = links.value.find(
    (link) => link.province === selectProvince.value
  );
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
      <span class="text-primary-dark font-semibold">Start Your Business</span>
    </h1>
  </div>
  <h2 class="font-normal px-8 py-2 text-primary-dark">
    How would you link to register your business.
  </h2>

  <div class="px-8 py-8 min-h-fit">
    <!-- Start: Tiles -->
    <div class="flex items-center justify-center gap-8 py-10">
      <div
        class="group h-[270px] w-[201px] bg-[#B47EED] rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer"
      >
        <span class="relative">
          <img
            class="object-cover transition-opacity"
            src="@/assets/images/sole-proprietorship.png"
            alt="Sole Proprietorship"
          />
          <img
            class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            src="@/assets/images/sole-proprietorship-hover.png"
            alt="Sole Proprietorship"
          />
        </span>

        <h2
          class="font-normal text-center text-primary-dark text-base group-hover:text-white break-words px-2"
        >
          Sole Proprietorship
        </h2>
        <a
          href="https://www.fbr.gov.pk/"
          target="_blank"
          class="rounded-sm text-center px-2 py-1 text-black bg-slate-100 hover:text-primary-dark"
          >Register Here</a
        >

        <img
          class="absolute bottom-0 right-0 opacity-10 object-cover overflow-hidden"
          src="@/assets/images/sole-proprietorship-opacity.png"
          alt="Sole Proprietorship"
        />
      </div>
      <div
        class="group h-[270px] w-[201px] bg-[#2FBBA1] rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer"
      >
        <span class="relative">
          <img
            class="object-cover transition-opacity"
            src="@/assets/images/association-of-persons.png"
            alt="Association of Persons"
          />
          <img
            class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            src="@/assets/images/association-of-persons-hover.png"
            alt="Association of Persons"
          />
        </span>

        <h2
          class="font-normal text-center text-primary-dark text-base group-hover:text-white break-words px-2"
        >
          Association of Persons
        </h2>

        <select
          v-model="selectProvince"
          class="bg-slate-100 text-black text-base rounded-sm py-1 px-1.5 w-40"
        >
          <option value="">Select Province</option>
          <option value="punjab">Punjab</option>
          <option value="islamabad">Islamabad Capital Territory</option>
          <option value="sindh">Sindh</option>
          <option value="kpk">Khyber Pakhtunkhwa</option>
          <option value="balochistan">Balochistan</option>
          <option value="gilgit">Gilgit-Baltistan</option>
          <option value="kashmir">Azad Jammu and Kashmir</option>
        </select>

        <a
          :href="businessLink?.link"
          target="_blank"
          class="rounded-sm text-center px-2 py-1 text-black bg-slate-100 hover:text-primary-dark"
          >Register Here</a
        >
        <img
          class="absolute bottom-0 right-0 opacity-10 object-cover overflow-hidden"
          src="@/assets/images/association-of-persons-opacity.png"
          alt="Association of Persons"
        />
      </div>
      <div
        class="group h-[270px] w-[201px] bg-[#FA8365] rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer"
      >
        <span class="relative">
          <img
            class="object-cover transition-opacity"
            src="@/assets/images/company.png"
            alt="Company"
          />
          <img
            class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            src="@/assets/images/company-hover.png"
            alt="Company"
          />
        </span>

        <h2
          class="font-normal text-center text-primary-dark text-base group-hover:text-white break-words px-2"
        >
          Company
        </h2>
        <a
          href="https://eservices.secp.gov.pk/eServices/"
          target="_blank"
          class="rounded-sm text-center px-2 py-1 text-black bg-slate-100 hover:text-primary-dark"
          >Register Here</a
        >
        <img
          class="absolute bottom-0 right-0 opacity-10 object-cover overflow-hidden"
          src="@/assets/images/company-opacity.png"
          alt="Company"
        />
      </div>
    </div>
    <!-- End: Tiles -->

    <p class="font-normal pt-8">
      Depend upon the number of people employed, registration with the following
      departments is also mandatory.
    </p>

    <ul class="pb-4 list-disc ps-8">
      <li>Labour & Human Resource Department</li>
      <li>Employees Social Security Institute</li>
    </ul>
  </div>
</template>
