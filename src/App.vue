<template>
  <ion-app class="safe-area">
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { IonApp, IonRouterOutlet, onIonViewWillEnter } from '@ionic/vue';
import { onMounted } from 'vue';

/*onMounted(async() => {
    if(Capacitor.isNativePlatform()) {
      await StatusBar.show();
      await EdgeToEdge.enable();
      await EdgeToEdge.setBackgroundColor({color: '#322e87'})
      await StatusBar.setStyle({style: Style.Dark})
    }
})*/

</script>

<style>
/* Esto aplica safe area a toda la app */
.safe-area {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
</style>
