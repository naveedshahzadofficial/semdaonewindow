<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useRouter } from "vue-router";

const router = useRouter();

//import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

async function onSubmit(values) {
  console.log(values);
  router.push({ name: "dashboard" });
  //const authStore = useAuthStore();
  //const { username, password } = values;
  //await authStore.login(username, password);
}
</script>

<template>
  <div
    class="md:h-screen flex flex-col gap-4 justify-center items-center bg-[url('@/assets/images/bg.jpg')] bg-cover bg-no-repeat"
  >
    <img
      src="@/assets/images/logo.png"
      alt="SMEDA-Logo"
    />
    <h1 class="font-poppins font-bold text-primary-light text-4xl">
      SMEDA ONE WINDOW
    </h1>
    <div
      class="font-poppins font-normal text-primary-dark text-base text-justify px-16"
    >
      SMEDA one window is a one-stop shop where government organizations or
      departments have consolidated their services and information. To acquire
      permits, licenses or relevant information, submit necessary documents,
      complete required procedures.
    </div>
    <!-- Begin: Login Form -->
    <div class="px-6 py-4 lg:px-8 bg-[#f2f2f2] bg-opacity-40 rounded-xl">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="font-poppins font-normal text-center text-primary-dark text-sm"
        >
          If you've already registered, please Login to access your account
        </h2>
        <hr class="mt-2 h-px bg-gray-200 border-0 dark:bg-gray-700" />

        <div class="mt-4">
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors, isSubmitting }"
            class="space-y-4"
            action="#"
            method="POST"
          >
            <div>
              <label
                for="username"
                class="font-poppins font-normal block text-sm leading-6 text-primary-dark"
                >Username<span class="text-red-500">*</span></label
              >
              <div class="mt-1">
                <Field
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  required
                  class="font-poppins font-medium block w-full rounded-xl border-0 py-1.5 px-2 text-primary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-dark sm:text-sm sm:leading-6"
                  :class="{ 'ring-2 ring-red-500': errors.username }"
                />
                <div class="text-red-500">{{ errors.username }}</div>
              </div>
            </div>

            <div>
              <label
                for="password"
                class="font-poppins font-normal block text-sm leading-6 text-primary-dark"
                >Password<span class="text-red-500">*</span></label
              >
              <div class="mt-1">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="font-poppins font-medium block w-full rounded-xl border-0 py-1.5 px-2 text-primary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-dark sm:text-sm sm:leading-6"
                  :class="{ 'ring-2 ring-red-500': errors.password }"
                />
                <div class="text-red-500">{{ errors.password }}</div>
              </div>
            </div>

            <div>
              <button
                :disabled="isSubmitting"
                type="submit"
                class="flex w-full justify-center rounded-xl bg-gradient-to-r from-teal-600 to-blue-400 border border-primary-dark transform px-3 py-1.5 text-sm font-semibold leading-6 text-primary-dark shadow-sm"
              >
                Login
              </button>
              <div class="text-sm mt-2 text-right">
                <a
                  href="#"
                  class="font-poppins font-normal text-sm text-primary-light hover:text-primary-dark"
                  >Forgot password?</a
                >
              </div>
            </div>
          </Form>

          <p class="mt-4 text-center text-sm text-gray-500">
            <a
              href="#"
              class="font-poppins font-semibold text-primary-dark hover:text-primary-light"
              >If you've not registered yet, Sign up here</a
            >
          </p>
        </div>
      </div>
    </div>
    <!-- End: Login Form -->
  </div>
</template>

<style></style>
