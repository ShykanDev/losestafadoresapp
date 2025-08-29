<template>
    <ion-page>  
      <ion-tabs>
        <ion-router-outlet :name="'tabsAlpha'"></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="historyTab" href="/tabsAlpha/historyTab">
            <v-icon name="gi-scroll-unfurled" class="transition-all duration-300" :class="route.name === 'historyTab' ? 'dark:text-white scale-105 text-indigo-500' : 'text-indigo-300 scale-75'" scale="1.3" />
            <ion-label :class="route.name === 'historyTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-300 font-poppins'">Historia</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="commonCases" href="/tabsAlpha/commonCases">
            <v-icon name="md-security-twotone" class="transition-all duration-300" :class="route.name === 'commonCases' ? 'dark:text-white scale-105 text-indigo-500' : 'text-indigo-300 scale-75'" scale="1.3" />
            <ion-label :class="route.name === 'commonCases' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-500 font-poppins'" class="font-poppins">Medidas de seguridad</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="helpTab" href="/tabsAlpha/helpTab">
            <v-icon name="md-supportagent-round" class="transition-all duration-300" :class="route.name === 'helpTab' ? 'dark:text-white scale-100 text-indigo-500' : 'text-indigo-500 scale-75'" scale="1.3" />
            <ion-label :class="route.name === 'helpTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-500 font-poppins'" class="font-poppins">Ayuda</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="contactTab" href="/tabsAlpha/contactTab">
            <v-icon name="md-alternateemail" class="transition-all duration-300" :class="route.name === 'contactTab' ? 'dark:text-white scale-100 text-indigo-500' : 'text-indigo-500 scale-75'" scale="1.3" />
            <ion-label :class="route.name === 'contactTab' ? 'dark:text-white text-indigo-500 font-poppins' : 'text-indigo-500 font-poppins'" class="font-poppins">Ayuda</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/vue';
import { useRoute } from 'vue-router';

const route = useRoute();

  </script>
  