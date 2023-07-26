<script setup>
import { onMounted, ref, watch, defineEmits } from "vue";
const emit = defineEmits(["breadcrumbs", "background"]);
const isOpen = ref(false);
const isOpenInfo = ref(false);

const businessLink = ref(null);
const infoContent = ref(null);
const selectProvince = ref("");
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
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

const infos = ref([
  {
    id: 1,
    title: "Sole Proprietorship",
    content: `<p>A sole proprietorship also known as a sole trader/sole owner, or simply proprietorship is a type of business entity, which is owned and run by one individual and where there is no legal distinction between the owner and the business. All profits and all losses accrue to the sole owner (proprietor/trader).</p><p>The owner owns all assets of the business and all debts of the business are his debts, he must pay them from their personal resources. This means that the owner has unlimited liability. It is a sole proprietorship in the sense that the owner has no partners (partnership).</p><p>A sole proprietor may do business with a trade name other than his or her legal name. This also allows the proprietor to open a business account with banking institutions.</p>`,
  },
  {
    id: 2,
    title: "Association of Persons",
    content: `<p>
            An AOP is a form of partnership. When two or more people become
            joint-owners with a view to carry on a business together and sharing
            the profits and losses in agreed proportions of their investment
            ratios, they are in a partnership agreement. The Partnership Act,
            1932, has defined Partnership as, "The relation which subsists
            between persons who have agreed to combine their property, labour or
            skill in some business and to share the profits and losses, thereof,
            between them.
          </p>`,
  },
  {
    id: 3,
    title: "Company",
    content: `<h3 class="font-bold my-2">Single Member:</h3>
          <p>
            A single member company is a class of private company, limited by
            shares, which is incorporated with one member, or whose membership
            is reduced to one person. It shall not issue an invitation to the
            public to subscribe for any share of the company.
          </p>
          <p>
            Moreover, the company shall not register any shares in the name of
            two or more persons to hold one or more shares individually or
            jointly; and number of members of the company shall be limited to a
            single person. Every single member company shall have at least one
            director.
          </p>
          <h3 class="font-bold my-2">Private Limited:</h3>
          <p>Private Limited Company means a company where:</p>
          <ul class="list-disc ps-8">
            <li>
              Shareholders cannot sell or transfer their shares without offering
              them first to other shareholders for purchase
            </li>
            <li>
              Shareholders cannot offer their shares to the general public over
              a stock exchange
            </li>
            <li>
              The number of shareholders cannot exceed a fixed figure (commonly
              50)
            </li>
            <li>
              The shareholders' liability is limited to the shares held by them
            </li>
            <li>
              The lifespan of the company is indefinite; its existence does not
              cease with the death of a director or shareholder
            </li>
          </ul>
          <h3 class="font-bold my-2">Public Limited:</h3>
          <p>
            A Public Limited Company is one where the shares are offered to the
            general public and can be acquired by anyone, either privately,
            during an initial public offering or through trades on the stock
            market. The company is strictly regulated, and is required by law to
            publish its complete and true financial position so that investors
            can determine the true worth of its stock (shares).
          </p>`,
  },
]);

const findInfoContent = (info_id) => {
  infoContent.value = infos.value.find((info) => info.id === info_id);
  isOpenInfo.value = true;
};

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
      <h1
        class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
      >
        <span class="text-white font-semibold ml-8">Start Your Business</span>
      </h1>
    </div>
    <h2 class="font-normal px-8 py-2 text-primary-dark">
      How would you like to register your business?
    </h2>

    <div class="px-8 pt-4 min-h-fit">
      <!-- Start: Tiles -->
      <div class="flex items-center justify-center space-x-8 py-8">
        <div
          class="h-[439px] w-[296px] bg-[url('@/assets/images/sole-bg.png')] bg-cover bg-no-repeat rounded relative gap-3 cursor-pointer"
        >
          <img
            @click.prevent="findInfoContent(1)"
            class="absolute -top-2 -right-2 object-cover hover:invert"
            src="@/assets/images/info-icon.png"
            alt="Sole Proprietorship"
          />
          <a
            href="https://www.fbr.gov.pk/"
            target="_blank"
            class="group h-full w-full flex flex-col items-center justify-center rounded-3xl relative gap-3 cursor-pointer overflow-hidden"
          >
            <div class="mt-52">
              <h2
                class="font-medium text-center text-primary-dark text-xl group-hover:text-white break-words px-2"
              >
                Sole Proprietorship
              </h2>
            </div>
          </a>
        </div>
        <div
          class="h-[439px] w-[296px] bg-[url('@/assets/images/association-bg.png')] bg-cover bg-no-repeat rounded relative gap-3 cursor-pointer"
        >
          <img
            @click.prevent="findInfoContent(2)"
            class="absolute -top-2 -right-2 object-cover hover:invert"
            src="@/assets/images/info-icon.png"
            alt="Association of Persons"
          />
          <div
            @click.prevent="isOpen = true"
            class="group h-full w-full flex flex-col items-center justify-center rounded-3xl relative gap-3 cursor-pointer overflow-hidden"
          >
            <div class="mt-52">
              <h2
                class="font-medium text-center text-primary-dark text-lg group-hover:text-white break-words px-2"
              >
                Association of Persons
              </h2>
            </div>
          </div>
        </div>
        <div
          href="https://eservices.secp.gov.pk/eServices/"
          target="_blank"
          class="h-[439px] w-[296px] bg-[url('@/assets/images/company-bg.png')] bg-cover bg-no-repeat rounded relative gap-3 cursor-pointer"
        >
          <img
            @click.prevent="findInfoContent(3)"
            class="absolute -top-2 -right-2 object-cover hover:invert"
            src="@/assets/images/info-icon.png"
            alt="Company"
          />
          <a
            href="https://eservices.secp.gov.pk/eServices/"
            target="_blank"
            class="group h-full w-full flex flex-col items-center justify-center rounded-3xl relative gap-3 cursor-pointer overflow-hidden"
          >
            <div class="mt-52">
              <h2
                class="font-medium text-center text-primary-dark text-xl group-hover:text-white break-words px-2"
              >
                Company
              </h2>
            </div>
          </a>
        </div>
      </div>
      <!-- End: Tiles -->
    </div>

    <div class="hidden flex items-center justify-center pb-8">
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
        <span
          class="w-full px-5 font-medium text-base text-primary-dark group-hover:text-white"
        >
          General Registrations /Licenses
        </span>
      </RouterLink>
    </div>
    <!-- Begin: Provinces Modal -->
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
    <!-- End: Provinces Modal -->

    <!-- Begin: Provinces Modal -->
    <div
      v-if="isOpenInfo"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <!-- Modal Content -->
      <div class="bg-white p-8 rounded shadow-md w-full mx-10">
        <h2
          class="text-primary-dark text-lg font-bold mb-4"
          v-if="infoContent.title"
        >
          {{ infoContent.title }}
        </h2>
        <div
          class="text-justify"
          v-if="infoContent.content"
          v-html="infoContent.content"
        ></div>
        <button
          @click="isOpenInfo = false"
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
    <!-- End: Provinces Modal -->
  </section>
</template>
