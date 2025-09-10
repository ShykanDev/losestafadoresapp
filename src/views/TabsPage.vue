<template>
  <ion-page>
    <ion-tabs class="rounded-4xl">
      <ion-router-outlet ></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <v-icon name="md-login-round" class="text-indigo-400" scale="1.3" />
          <ion-label class="text-indigo-200 font-poppins">Iniciar Sesión</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <v-icon name="hi-solid-user-add" class="text-indigo-500" scale="1.3" />
          <ion-label class="text-indigo-200 font-poppins">Registrarse</ion-label>
        </ion-tab-button>
        


      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, onIonViewWillEnter } from '@ionic/vue';
import { useEdgeToEdge } from '@/composables/useEdgeToEdge';

const { startStatusBar } = useEdgeToEdge();
onIonViewWillEnter(async() => startStatusBar())

</script>

<style scoped>
ion-tab-button {
  --border-radius: 20px;
}
</style>