<template>
  <v-form v-model="formData" @submit.prevent="onSubmit">
    <div>
      <label for="email">Email</label>
      <v-text-field
        v-model="email"
        id="email"
        class="mt-2"
        type="text"
        variant="solo"
        placeholder="Email address..."
      />
    </div>
    <div>
      <label for="password">Password</label>
      <v-text-field
        v-model="password"
        :type="visibility ? 'text' : 'password'"
        class="mt-2"
        variant="solo"
        placeholder="Password..."
        :append-inner-icon="
          visibility ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
        "
        @click:append-inner="visibility = !visibility"
      />
    </div>

    <v-btn width="100%" height="56"  color="primary" class="mt-4" type="submit">
      Sign In
    </v-btn>

    <div class="mt-4 flex justify-center">
      <span>I'm a new user. 
        <nuxt-link class="text-primary font-bold" to="/signUp">Sign Up</nuxt-link>
      </span>
    </div>
  </v-form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const { login } = useAuth();
const formData = ref<{ email: string; password: string }>();
const email = ref<string>("");
const password = ref<string>("");
const visibility = ref<boolean>(false);
const user = ref()
const onSubmit = async() => {
  const submitValue = {
    email: email.value,
    password: password.value,
  };
  user.value = await login(email.value, password.value);
  console.log("user", user);
};
</script>
