<script setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
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
      <span class="text-primary-dark font-semibold">Agrofood</span>
    </h1>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <p class="font-normal pb-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
      molestiae. Deserunt, praesentium laborum voluptas qui error quam dolores
      cum soluta ullam eos quia repellat amet quos nesciunt explicabo odit
      animi.
    </p>
  </div>
</template>
