<template>
  <section>
      <button
          class="flex gap-2 items-center !px-1 !py-1 !text-sm !font-medium !rounded-xl !border !shadow-sm transition-all duration-200 ease-in-out hover:bg-indigo-50 hover:shadow-md active:scale-95 active:bg-indigo-100 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-indigo-500 dark:active:bg-gray-700"
      >
          <v-icon name="bi-reply-fill" scale="1" class="text-indigo-500 dark:text-indigo-400" />
          <span>{{ props.text }}</span>
      </button>
  </section>
</template>


<script lang="ts" setup>
interface FastAnswer {
    id: number;
    text: string;
}

const props = defineProps<FastAnswer>();
</script>

<style scoped>
/* Si necesitas estilos personalizados adicionales, aquí */
</style>
