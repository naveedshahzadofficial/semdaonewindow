<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Plan", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-mx-6">
      <h1 class="flex items-center space-x-2  bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]">
        <span class="text-white font-semibold ml-8">Plan Your Business</span>
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <p class="font-normal pb-4">
        Starting a legal business typically entails several crucial steps and
        requirements. While the specific requirements can vary based on the type
        of business, here are some fundamental elements to consider:
      </p>
      <ul class="pb-4 list-disc ps-8">
        <li>Business Name</li>
        <li>Legal Structure</li>
        <li>Register Your Business</li>
        <li>Tax Obligations</li>
        <li>Business Bank Account</li>
        <li>Insurance</li>
        <li>Intellectual Property Protection</li>
        <li>Compliance and Regulations</li>
        <li>Financial Management</li>
      </ul>
      <p class="font-normal pb-4">
        These are general guidelines, specific requirements can vary depending
        on your location and the nature of your business. It is advisable to
        consult with legal and financial professionals who can provide guidance
        tailored to your specific circumstances.
      </p>
      <p class="font-normal pb-4">
        For valuable insights and general guidelines on starting a business,
        please refer to the links given below:
      </p>
      <ul class="pb-4 list-disc ps-8">
        <li>
          <a
            href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=196:business-startup&Itemid=981"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Business Guides</a
          >
        </li>
        <li>
          <a
            href="https://smeda.org/index.php?option=com_content&view=article&id=146&Itemid=676"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Business Development Training Videos</a
          >
        </li>
        <li>
          <a
            href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=225&Itemid=1386"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Basic Financial Model</a
          >
        </li>
        <li>
          <a
            href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=122&Itemid=308"
            target="_blank"
            class="text-blue-500 font-bold hover:underline"
            >Pre-feasibility Studies</a
          >
        </li>
      </ul>
      <div class="flex">
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
    </div>
  </section>
</template>
