<script setup>
import { ref } from "vue";
const activeTab = ref(1);
const changeTab = (newTab) => {
  activeTab.value = newTab;
};
</script>
<template>
  <div class="px-20 py-6">
    <div class="flex justify-center gap-1">
      <div
        @click.prevent="changeTab(1)"
        :class="
          activeTab === 1
            ? 'bg-gradient-to-r from-blue-600 to-green-400'
            : 'bg-gray-300'
        "
        class="w-full text-center font-poppins font-normal cursor-pointer py-2.5"
      >
        String a Business
      </div>
      <div
        @click.prevent="changeTab(2)"
        :class="
          activeTab === 2
            ? 'bg-gradient-to-r from-blue-600 to-green-400'
            : 'bg-gray-300'
        "
        class="w-full text-center font-normal cursor-pointer py-2.5"
      >
        Registered Business
      </div>
      <div
        @click.prevent="changeTab(3)"
        :class="
          activeTab === 3
            ? 'bg-gradient-to-r from-blue-600 to-green-400'
            : 'bg-gray-300'
        "
        class="w-full text-center font-poppins font-normal cursor-pointer py-2.5"
      >
        Unregistered Business
      </div>
    </div>
    <div
      v-show="activeTab === 1"
      class="border border-gray-400 px-8 py-8 min-h-screen"
    >
      <h2 class="font-poppins font-semibold py-2">Sample Heading</h2>
      <p class="font-poppins font-normal pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo
        sunt eos quas obcaecati dolorum, perspiciatis officiis dicta repellat
        sapiente nisi nihil blanditiis vel culpa doloribus aspernatur dolore
        error tenetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Facere, sequi modi repellendus numquam earum incidunt optio sapiente
        reprehenderit ipsa provident corporis vitae quod consequuntur similique
        ab accusamus aut enim adipisci?
      </p>
      <h2 class="font-poppins font-semibold py-2">Sample Heading</h2>
      <p class="font-poppins font-normal pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        officiis sit explicabo consequuntur adipisci, quaerat placeat aut quas
        aspernatur, dolores exercitationem praesentium aliquam impedit accusamus
        provident perferendis officia dolorem delectus!
      </p>

      <ul>
        <li>
          <a
            href="#"
            class="text-blue-400 hover:text-primary-dark"
            >Sample file title</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-blue-400 hover:text-primary-dark"
            >Sample file title</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-blue-400 hover:text-primary-dark"
            >Sample file title</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-blue-400 hover:text-primary-dark"
            >Sample file title</a
          >
        </li>
      </ul>

      <h2 class="font-poppins font-semibold py-2">Registration Portal Link</h2>
      <p class="font-poppins font-normal pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        officiis sit explicabo consequuntur adipisci, quaerat placeat aut quas
        aspernatur, dolores exercitationem praesentium aliquam impedit accusamus
        provident perferendis officia dolorem delectus!
      </p>

      <a
        href="#"
        class="font-poppins font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
        >Registration Portal Link</a
      >
    </div>

    <div
      v-show="activeTab === 2"
      class="border border-gray-400 px-8 py-8 min-h-screen"
    >
      Tab 2
    </div>

    <div
      v-show="activeTab === 3"
      class="border border-gray-400 px-8 py-8 min-h-screen"
    >
      Tab 3
    </div>
  </div>
</template>
