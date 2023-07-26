<template>
  <header>
    <div class="w-full mx-auto">
      <div class="flex justify-between items-center">
        <RouterLink :to="{ name: 'dashboard' }">
          <div class="flex items-center px-4">
            <img
              src="@/assets/images/logo-blue-dot.png"
              alt="Logo"
              class="mr-4 h-10 md:h-20 lg:h-20"
            />
            <h1
              class="font-poppins font-bold text-primary-dark md:text-2xl lg:text-3xl"
            >
              SME ONE WINDOW
            </h1>
          </div>
        </RouterLink>
        <div class="flex items-center space-x-6 overflow-hidden">
          <img
            class="h-10 md:h-20 lg:h-20 pl-6 object-cover"
            src="@/assets/images/pakistan-logo.png"
            alt="Pakistan-Logo"
          />
          <img
            src="@/assets/images/header-banner.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  </header>
</template>
