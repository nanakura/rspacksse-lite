<script setup lang="ts">
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
  <div class="h-screen w-screen font-sans dark:text-white dark:bg-[#121212]">
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <RouterView />
      <TheFooter />
    </main>
  </div>
</template>
