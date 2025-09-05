<template>
    <section>
        <IonCard class="overflow-hidden m-2.5 text-white bg-white rounded-lg border shadow-lg dark:bg-gray-900 border-indigo-900/20 font-poppins">
            <div class="overflow-hidden w-full h-44">
                <img :src="props.image" alt="Imagen de la noticia" class="object-cover w-full h-full" />
            </div>
            <IonCardHeader class="p-4">
                <div class="flex gap-2 items-center mb-2">
                    <span :class="`fi ${props.flag}`"></span>
                    <IonCardSubtitle class="text-sm font-medium dark:text-indigo-300">{{ props.country }}</IonCardSubtitle>
                </div>
                <IonCardTitle class="mb-2 text-lg font-semibold dark:text-white">{{ props.title }}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent class="p-4 pt-0">
                <p class="mb-3 text-sm text-black dark:text-gray-300">{{ props.description }}</p>
                <div class="flex justify-between mb-3 text-xs">
                    <span class="dark:text-indigo-300">{{ props.source }}</span>
                    <span class="dark:text-gray-400">{{ props.date }}</span>
                </div>
                <a :href="props.link" class="text-sm font-medium no-underline dark:text-indigo-400">Leer más</a>
            </IonCardContent>
        </IonCard>
    </section>
</template>

<script lang="ts" setup>
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from "@ionic/vue";
import "/node_modules/flag-icons/css/flag-icons.min.css";

interface Inew {
    title: string;
    link: string;
    image: string;
    description: string;
    source: string;
    date: string;
    country: string;
    flag: string;
}

const props = defineProps<Inew>();
</script>

<style scoped>
/* Clase para el modo oscuro (opcional, si necesitas personalización adicional) */
.pdark {
    background-color: #121212;
}
</style>
