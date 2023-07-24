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
  <div class="min-h-screen flex items-center justify-center">
    <div class="grid grid-cols-2">
      <div class="flex flex-col items-center space-y-6">
        <div class="flex pt-6 space-x-6">
          <img
            src="@/assets/images/logo-blue-dot.png"
            alt="SMEDA-Logo"
          />
          <img
            src="@/assets/images/pakistan-logo.png"
            alt="Pakistan-Logo"
          />
        </div>
        <h1 class="font-bold text-primary-light text-4xl">SME ONE WINDOW</h1>
        <div class="font-normal text-primary-dark text-sm text-justify ps-10">
          SME One Window: A convenient, one-stop platform for entrepreneurs to
          access government services, permits, licenses, and vital information
          in a hassle-free manner. Simplifying processes, saving time, and
          fostering a business-friendly environment for small and medium-sized
          enterprises.
        </div>
        <h2 class="hidden font-medium text-center text-primary-dark text-sm">
          Please Login to access your account
        </h2>
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, isSubmitting }"
          action="#"
          method="POST"
          class="w-full"
        >
          <div class="flex flex-col w-[350px] m-auto">
            <div>
              <label
                for="username"
                class="w-full block font-normal text-xs leading-6 text-gray-500"
                >Username<span class="text-red-500">*</span></label
              >
              <div class="mt-0.5">
                <Field
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  required
                  class="w-full block font-normal rounded-xl border-0 py-0.5 px-2 text-primary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  :class="{ 'ring-1 ring-red-500': errors.username }"
                />
                <div class="text-red-500 text-xs">{{ errors.username }}</div>
              </div>
            </div>
            <div class="my-2.5">
              <label
                for="password"
                class="w-full block font-normal text-xs leading-6 text-gray-500"
                >Password<span class="text-red-500">*</span></label
              >
              <div class="mt-0.5">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="w-full block font-medium rounded-xl border-0 py-0.5 px-2 text-primary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  :class="{ 'ring-1 ring-red-500': errors.password }"
                />
                <div class="text-red-500 text-xs">{{ errors.password }}</div>
              </div>
            </div>
            <div class="pt-2">
              <button
                :disabled="isSubmitting"
                type="submit"
                class="w-full rounded-xl bg-gradient-to-r from-teal-600 to-blue-400 transform px-3 py-1 text-sm font-semibold leading-6 text-primary-dark shadow-sm"
              >
                Login
              </button>
              <div class="text-sm mt-2 text-right">
                <a
                  target="_blank"
                  href="https://smerp.smeda.org/password/reset"
                  class="text-right font-normal text-sm text-primary-light hover:text-primary-dark"
                  >Forgot password?</a
                >
              </div>
            </div>
          </div>
        </Form>
        <div class="text-gray-500">
          New user?
          <a
            class="text-primary-dark font-semibold hover:text-primary-light"
            href="https://smerp.smeda.org/register"
            target="_blank"
            >Signup and register yourself with SMEDA</a
          >
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <img
          src="@/assets/images/bg-login.png"
          alt="bg login"
          class="pe-6"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
