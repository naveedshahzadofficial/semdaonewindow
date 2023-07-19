<script setup>
import { onMounted, ref, watch } from "vue";
const businessLink = ref(null);
const businessType = ref("");
const selectProvince = ref("");
onMounted(() => {
  window.scrollTo(0, 0);
});

const links = ref([
  {
    business_type: "aop",
    province: "punjab",
    name: "AOP Punjab",
    link: "https://register.business.punjab.gov.pk",
  },
  {
    business_type: "aop",
    province: "sindh",
    name: "AOP Sindh",
    link: "https://business.sindh.gov.pk/",
  },
  {
    business_type: "aop",
    province: "balochistan",
    name: "AOP Balochistan",
    link: "https://business.balochistan.gov.pk/",
  },
  {
    business_type: "company",
    province: "",
    name: "SECP",
    link: "https://eservices.secp.gov.pk/eServices/",
  },
  {
    business_type: "soleProprietorship",
    province: "",
    name: "FBR",
    link: "https://www.fbr.gov.pk/",
  },
]);

watch([businessType, selectProvince], () => {
  console.log(businessType.value);
  console.log(selectProvince.value);
  if (businessType.value === "aop") {
    businessLink.value = links.value.find(
      (link) =>
        link.province === selectProvince.value &&
        link.business_type === businessType.value
    );
  } else {
    selectProvince.value = "";
    businessLink.value = links.value.find(
      (link) => link.business_type === businessType.value
    );
  }
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
      <span class="text-primary-dark font-semibold">Start</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-fit">
    <h2 class="font-semibold py-2">Unregistered Business</h2>
    <p class="font-normal pb-4">
      In order to register your business, kindly furnish the required
      information. Please ensure that the information you provide corresponds to
      the nature and activities of your business.
    </p>

    <form class="p-4">
      <!-- Radio buttons -->
      <div class="my-4">
        <label
          for="businessType"
          class="block mb-2 text-blue-600"
          >Business Type</label
        >
        <label class="inline-flex items-center">
          <input
            v-model="businessType"
            type="radio"
            class="form-radio"
            name="businessType"
            value="aop"
          />
          <span class="ml-2">Association of Persons</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            v-model="businessType"
            type="radio"
            class="form-radio"
            name="businessType"
            value="company"
          />
          <span class="ml-2">Company</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            v-model="businessType"
            type="radio"
            class="form-radio"
            name="businessType"
            value="soleProprietorship"
          />
          <span class="ml-2">Sole Proprietorship</span>
        </label>
      </div>

      <!-- Select dropdown -->
      <div
        class="my-4"
        v-if="businessType === 'aop'"
      >
        <label
          for="province"
          class="block mb-2 text-blue-600"
          >Province</label
        >
        <select
          v-model="selectProvince"
          id="province"
          class="bg-blue-600 text-white text-base rounded-lg focus:ring-blue-200 focus:border-blue-200 block p-1.5"
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
      </div>

      <div v-if="businessLink">
        <p class="font-normal py-4">
          To register your partnership firm with register of firm office please
          follow the link blow
        </p>

        <a
          :href="businessLink.link"
          class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
          >{{ businessLink.name }}</a
        >
      </div>
    </form>
  </div>
</template>
