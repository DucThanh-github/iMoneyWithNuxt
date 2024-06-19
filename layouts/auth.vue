<template>
  <v-container fluid>
    <v-row class="px-6">
      <v-col cols="12" class="flex align-center flex-col">
        <div class="mt-16 flex flex-col align-center mb-8">
          <img width="120" src="~/public/images/logo.jpg" alt="" />
          <p class="font-bold mt-12 text-primary">
            Best way to saving Your Money
          </p>
        </div>
      </v-col>
      <v-col cols="12">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>
