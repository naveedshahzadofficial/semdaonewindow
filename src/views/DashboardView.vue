<script setup></script>
<template>
  <section>
    <!-- Start: Tiles -->
    <div class="flex items-center justify-center gap-6 py-32">
      <div
        class="group h-[237px] w-[275px] bg-gradient-to-r from-blue-600 to-green-300 bg-opacity-70 rounded-3xl flex flex-col items-center justify-center relative gap-3 cursor-pointer hover:scale-110 transition-transform"
      >
        <div
          class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center"
        >
          <div
            class="w-[153px] h-[153px] bg-gradient-to-r from-blue-600 to-green-300 border-4 rounded-full flex justify-center items-center -mt-20"
          >
            <span class="relative">
              <img
                class="object-cover transition-opacity"
                src="@/assets/images/start-icon.png"
                alt="Start"
              />
              <img
                class="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                src="@/assets/images/start-icon-hover.png"
                alt="Start"
              />
            </span>
          </div>
        </div>

        <h2
          class="text-center font-medium text-primary-dark text-3xl group-hover:text-white"
        >
          Plan
        </h2>
      </div>
    </div>
    <!-- End: Tiles -->
  </section>
</template>
<style scoped lang="scss"></style>
