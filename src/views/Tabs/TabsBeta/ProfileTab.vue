<template>
    <ion-page>
      <ion-content class="">
        <div class="flex justify-center items-center p-4 min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <!-- Contenedor principal -->
          <div class="p-6 w-full max-w-md rounded-xl border border-gray-700 shadow-xl backdrop-blur-md bg-gray-800/50 shadow-purple-900/20">
            <!-- Header futurista -->
            <header class="mb-8 text-center">
              <h1 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                Configuración
              </h1>
              <p class="mt-2 text-xs text-gray-400">Personaliza tu cuenta y seguridad</p>
            </header>
  
            <!-- Sección de opciones -->
            <div class="space-y-6">
              <div class="p-4 rounded-lg border border-gray-600 transition-all bg-gray-700/30 hover:bg-gray-700/50">
                <button
                  class="flex justify-between items-center w-full text-left"
                  @click="reestablecerContraseña"
                >
                  <span class="font-medium text-purple-300">Reestablecer contraseña</span>
                  <ion-icon :icon="chevronForwardOutline" class="text-gray-400"></ion-icon>
                </button>
              </div>
  
              <div class="p-4 rounded-lg border border-gray-600 transition-all bg-gray-700/30 hover:bg-gray-700/50">
                <button
                  class="flex justify-between items-center w-full text-left"
                  @click="cerrarSesion"
                >
                  <span class="font-medium text-red-400">Cerrar sesión</span>
                  <ion-icon :icon="logOutOutline" class="text-gray-400"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ion-modal
    :is-open="resetModalOpened"
    @didDismiss="resetModalOpened = false"
    mode="ios"
  >
    <div class="flex justify-center items-center p-4 min-h-screen text-white bg-gray-900/90">
      <div class="p-6 w-full max-w-md rounded-xl border border-gray-700 shadow-xl backdrop-blur-md bg-gray-800/80 shadow-purple-900/30">
        <!-- Header del modal -->
        <header class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
            Reestablecer Contraseña
          </h2>
          <p class="mt-2 text-xs text-gray-400">
            Ingresa tu correo para recibir un enlace de reestablecimiento
          </p>
        </header>

        <!-- Formulario -->
        <form @submit.prevent="enviarEnlaceReestablecimiento" class="space-y-5">
          <!-- Campo: Correo -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-300">Correo Electrónico</label>
            <div class="relative">
              <input
                type="email"
                id="email"
                v-model="correoReestablecer"
                class="px-4 py-3 w-full placeholder-gray-400 text-white rounded-lg border border-gray-600 transition-all outline-none bg-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="ejemplo@futuro.com"
                required
              />
            </div>
          </div>

          <!-- Botones -->
          <div class="flex flex-col pt-2 space-y-3">
            <button
              type="submit"
              class="px-4 py-3 w-full font-medium text-white bg-gradient-to-r from-purple-600 to-purple-900 !rounded-sm shadow-lg transition-all hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Enviar Enlace
            </button>
            <button
              type="button"
              class="px-4 py-3 w-full font-medium text-gray-300 rounded-sm border border-gray-600 transition-all bg-gray-700/50 hover:bg-gray-700"
              @click="resetModalOpened = false"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </ion-modal>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { chevronForwardOutline, logOutOutline } from 'ionicons/icons';
  import { IonPage, IonContent, IonModal } from '@ionic/vue';
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { sysValues } from '@/stores/sysVals';
import { useRouter } from 'vue-router';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

const notyf = new Notyf({
  position: {
    x: 'right',
    y: 'top'
  },
  ripple: true,
  dismissible: true,
  duration: 7000
});

const router =useRouter();

const auth = getAuth();

      const cambiarContraseña = () => {
        // Lógica para cambiar contraseña
        console.log("Abrir modal/formulario para cambiar contraseña");
      }
      const reestablecerContraseña = () => {
        // Lógica para reestablecer contraseña
        resetModalOpened.value = true;
            
        console.log("Enviar enlace de reestablecimiento al correo");
      }
      const cerrarSesion = () => {
        // Lógica para cerrar sesión
        console.log("Cerrar sesión");
        auth.signOut();
        sysValues().setUserLogged(false);
        router.push({name: 'login'});
      }
     
      const resetModalOpened = ref(true);
      const correoReestablecer = ref('');
      const enviarEnlaceReestablecimiento = () => {
        console.log("Enviando enlace de reestablecimiento al correo:", correoReestablecer.value);
        resetModalOpened.value = false;
        try {
            sendPasswordResetEmail(auth, correoReestablecer.value);
            notyf.success('Enlace de reestablecimiento enviado correctamente');
        } catch (error) {
            notyf.error('Error al enviar enlace de reestablecimiento');
        }
       
      };
  </script>
  