<script setup>
import { TileLinkComponent } from "@/components";
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
  emit("breadcrumbs", [
    { title: "Home", link: "dashboard" },
    { title: "Grow", link: "grow" },
    { title: "Business Information Resources", link: "" },
  ]);
});
</script>
<template>
  <section class="px-4 py-8">
    <div class="-ms-6">
      <h1
        class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[400px]"
      >
        <span class="text-white font-semibold ml-8"
          >Business Information Resources</span
        >
      </h1>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <p class="font-normal pb-4">
        In order to acquire business-specific information, kindly make a
        selection from the following options
      </p>

      <!-- Start: Tiles -->
      <div
        class="flex flex-col items-center justify-center py-6 space-y-6 md:flex-row md:space-y-0 md:space-x-10 md:py-10"
      >
        <TileLinkComponent
          :tile="{
            title: 'Pre-feasibility Studies',
            icon: require('@/assets/images/pre-feasibility-studies.png'),
            icon_hover: require('@/assets/images/pre-feasibility-studies-hover.png'),
            icon_side: require('@/assets/images/pre-feasibility-studies-opacity.png'),
            classes: 'bg-[#CE8654]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=122&Itemid=308',
          }"
        />

        <TileLinkComponent
          :tile="{
            title: 'Business Guides',
            icon: require('@/assets/images/business-guides.png'),
            icon_hover: require('@/assets/images/business-guides-hover.png'),
            icon_side: require('@/assets/images/business-guides-opacity.png'),
            classes: 'bg-[#41C4F2]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=164&Itemid=981',
          }"
        />

        <TileLinkComponent
          :tile="{
            title: 'Commercial Contracts',
            icon: require('@/assets/images/commercial-contracts.png'),
            icon_hover: require('@/assets/images/commercial-contracts-hover.png'),
            icon_side: require('@/assets/images/commercial-contracts-opacity.png'),
            classes: 'bg-[#FA8365]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363',
          }"
        />

        <TileLinkComponent
          :tile="{
            title: 'Regulatory Procedures',
            icon: require('@/assets/images/regulatory-procedures.png'),
            icon_hover: require('@/assets/images/regulatory-procedures-hover.png'),
            icon_side: require('@/assets/images/regulatory-procedures-opacity.png'),
            classes: 'bg-[#B47EED]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=15&Itemid=138',
          }"
        />
      </div>
      <div
        class="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-10 md:py-10"
      >
        <TileLinkComponent
          :tile="{
            title: 'Cluster Profiles',
            icon: require('@/assets/images/cluster-profiles.png'),
            icon_hover: require('@/assets/images/cluster-profiles-hover.png'),
            icon_side: require('@/assets/images/cluster-profiles-opacity.png'),
            classes: 'bg-[#E7AC22]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=40&Itemid=742',
          }"
        />

        <TileLinkComponent
          :tile="{
            title: 'District Economic Profiles',
            icon: require('@/assets/images/district-economic-profiles.png'),
            icon_hover: require('@/assets/images/district-economic-profiles-hover.png'),
            icon_side: require('@/assets/images/district-economic-profiles-opacity.png'),
            classes: 'bg-[#864267]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=186&Itemid=1024',
          }"
        />

        <TileLinkComponent
          :tile="{
            title: 'Sector Briefs',
            icon: require('@/assets/images/sector-briefs.png'),
            icon_hover: require('@/assets/images/sector-briefs-hover.png'),
            icon_side: require('@/assets/images/sector-briefs-opacity.png'),
            classes: 'bg-[#2FBBA1]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=28&Itemid=139',
          }"
        />

        <TileLinkComponent
          :tile="{
            title: 'More',
            icon: require('@/assets/images/more.png'),
            icon_hover: require('@/assets/images/more-hover.png'),
            icon_side: require('@/assets/images/more-opacity.png'),
            classes: 'bg-[#E04F56]',
            link: 'https://smeda.org/index.php?option=com_phocadownload&view=category&id=168&Itemid=996',
          }"
        />
      </div>
      <!-- End: Tiles -->

      <div class="flex items-center justify-center my-10 md:mb-0">
        <RouterLink
          :to="{ name: 'sme-resources' }"
          class="bg-gradient-to-tr from-blue-500 to-green-200 bg-opacity-50 flex items-center group cursor-pointer gap-1.5 px-4 py-2 rounded-2xl max-w-md"
        >
          <span class="relative"
            ><img
              class="object-cover transition-opacity"
              src="@/assets/images/sme-resources.png"
              alt="SME Resources"
            />
            <img
              class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="@/assets/images/sme-resources-hover.png"
              alt="SME Resources"
            />
          </span>
          <span
            class="border-r border-primary-dark h-10 mr-4 group-hover:border-white"
          ></span>
          <span class="w-full px-5 font-medium text-base text-primary-dark">
            SME Resources
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
