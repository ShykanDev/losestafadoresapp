<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>

            <div
                class="absolute right-0 top-3 bg-white border border-indigo-400 dark:bg-gray-900 rounded-l-4xl dark:shadow-indigo-900 dark:shadow-sm">
                <a href="https://losestafadores.com" target="_blank"
                    class="px-2 py-1 text-sm font-bold text-indigo-500 rounded-l-4xl animate-fade font-poppins dark:text-indigo-100">
                    <span
                        class="text-indigo-400 dark:text-indigo-300 animate__animated animate__bounceInDown">los</span>
                    <span
                        class="text-indigo-500 dark:text-indigo-500 animate__animated animate__bounceInDown animate-delay-[500ms]">estafadores</span>
                    <span
                        class="text-indigo-400 dark:text-indigo-300 animate__animated animate__bounceInDown animate-delay-[700ms]">.com</span>
                </a>
            </div>
            <ion-tab-bar slot="bottom">
                <!--Tab 1-->
                <ion-tab-button tab="scamTypesTab" href="/tabsBeta/scamTypesTab">
                    <v-icon name="ri-list-check-2" class="transition-all duration-300"
                        :class="route.name === 'scamTypesTab' ? 'dark:text-white scale-105 text-indigo-500' : 'text-indigo-300 scale-75'"
                        scale="1.3" />
                    <ion-label
                        :class="route.name === 'scamTypesTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-300 font-poppins'"
                        class="font-poppins">Tipos de estafas</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="commentsTab" href="/tabsBeta/commentsTab">
                    <v-icon name="fa-comment-alt" class="transition-all duration-300"
                        :class="route.name === 'commentsTab' ? 'dark:text-white scale-105 text-indigo-500' : 'text-indigo-300 scale-75'"
                        scale="1.3" />
                    <ion-label
                        :class="route.name === 'commentsTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-500 font-poppins'"
                        class="font-poppins"> Comentar</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="waysToAvoidTab" href="/tabsBeta/waysToAvoidTab">
                    <v-icon name="gi-palm" class="transition-all duration-300"
                        :class="route.name === 'waysToAvoidTab' ? 'dark:text-white scale-105 text-indigo-500' : 'text-indigo-300 scale-75'"
                        scale="1.3" />
                    <ion-label
                        :class="route.name === 'waysToAvoidTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-300 font-poppins'"
                        class="font-poppins">Maneras de Evitarlo</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="securityMeasuresTab" href="/tabsBeta/securityMeasuresTab">
                    <v-icon name="fa-user-secret" class="transition-all duration-300"
                        :class="route.name === 'securityMeasuresTab' ? 'dark:text-white scale-105 text-indigo-500' : 'text-indigo-300 scale-75'"
                        scale="1.3" />
                    <ion-label
                        :class="route.name === 'securityMeasuresTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-300 font-poppins'"
                        class="font-poppins">Medidas de seguridad</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="profileTab" href="/tabsBeta/profileTab">
                    <v-icon name="ri-user-settings-fill" class="transition-all duration-300"
                        :class="route.name === 'profileTab' ? 'dark:text-white scale-105 text-indigo-500' : 'text-indigo-300 scale-75'"
                        scale="1.3" />
                    <ion-label
                        :class="route.name === 'profileTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-300 font-poppins'"
                        class="font-poppins">Perfil</ion-label>
                </ion-tab-button>

            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped></style>