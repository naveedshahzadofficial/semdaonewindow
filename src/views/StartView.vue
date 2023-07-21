<script setup>
import { onMounted, ref, watch, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
const isOpen = ref(false);

const businessLink = ref(null);
const selectProvince = ref("");
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Start", link: "" },
  ]);
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
  {
    province: "kpk",
    name: "AOP KPK",
    link: "https://business.kp.gov.pk/guidelines",
  },
]);

watch(selectProvince, () => {
  console.log(selectProvince.value);
  businessLink.value = links.value.find(
    (link) => link.province === selectProvince.value
  );
  if (businessLink.value && businessLink.value?.link) {
    window.open(businessLink.value?.link, "_blank");
  }
});
</script>
<style scoped lang="scss">
.img-info-icon {
  max-width: 100%;
  max-height: 100%;
}
</style>
<template>
  <section class="px-4 py-8">
    <div class="-mx-6">
      <h1 class="flex items-center space-x-2">
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
      How would you like to register your business?
    </h2>

    <div class="px-8 pt-4 min-h-fit">
      <!-- Start: Tiles -->
      <div class="flex items-center justify-center space-x-8 py-8">
        <a
          href="https://www.fbr.gov.pk/"
          target="_blank"
          class="group h-[270px] w-[250px] bg-[#B47EED] rounded-3xl flex flex-col items-center justify-center relative gap-3 overflow-hidden cursor-pointer"
        >
          <img
            class="absolute top-0 right-0 object-cover"
            src="@/assets/images/info-icon.png"
            alt="Sole Proprietorship"
          />
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

          <img
            class="absolute -bottom-2 -right-3 opacity-20 object-cover"
            src="@/assets/images/sole-proprietorship-opacity.png"
            alt="Sole Proprietorship"
          />
        </a>
        <div
          @click.prevent="isOpen = true"
          class="group h-[270px] w-[250px] bg-[#2FBBA1] rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer overflow-hidden"
        >
          <img
            class="absolute top-0 right-0 object-cover"
            src="@/assets/images/info-icon.png"
            alt="Association of Persons"
          />
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

          <img
            class="absolute -bottom-1 -right-4 opacity-20 object-cover"
            src="@/assets/images/association-of-persons-opacity.png"
            alt="Association of Persons"
          />
        </div>
        <a
          href="https://eservices.secp.gov.pk/eServices/"
          target="_blank"
          class="group h-[270px] w-[250px] bg-[#FA8365] rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer overflow-hidden"
        >
          <img
            class="absolute top-0 right-0 object-cover"
            src="@/assets/images/info-icon.png"
            alt="Company"
          />
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

          <img
            class="absolute -bottom-1 -right-4 opacity-20 object-cover"
            src="@/assets/images/company-opacity.png"
            alt="Company"
          />
        </a>
      </div>
      <!-- End: Tiles -->
    </div>

    <div class="flex items-center justify-center pb-8">
      <RouterLink
        :to="{ name: 'general-registrations-licenses' }"
        class="bg-gradient-to-tr from-blue-500 to-green-200 bg-opacity-50 flex items-center group cursor-pointer gap-1.5 px-4 py-2 rounded-2xl max-w-md"
      >
        <span class="relative"
          ><img
            class="object-cover transition-opacity"
            src="@/assets/images/general-registrations-licenses.png"
            alt="General Registrations /Licenses"
          />
          <img
            class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            src="@/assets/images/general-registrations-licenses-hover.png"
            alt="General Registrations /Licenses"
          />
        </span>
        <span
          class="border-r border-primary-dark h-10 mr-4 group-hover:border-white"
        ></span>
        <span class="w-full px-5 font-medium text-base text-primary-dark">
          General Registrations /Licenses
        </span>
      </RouterLink>
    </div>
    <!-- Modal Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <!-- Modal Content -->
      <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 class="text-primary-dark text-base font-bold mb-4">Province</h2>
        <div>
          <select
            v-model="selectProvince"
            class="bg-slate-100 text-black text-base rounded-sm py-1 px-1.5 w-full"
          >
            <option value="">Select Province</option>
            <option value="punjab">Punjab</option>
            <option value="sindh">Sindh</option>
            <option value="kpk">Khyber Pakhtunkhwa</option>
            <option value="balochistan">Balochistan</option>
          </select>
        </div>

        <button
          @click="isOpen = false"
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </section>
</template>
