<template>
  <ion-page>
      <ion-content class="">
        <section class="relative z-10 px-2 py-5 min-h-screen bgApply">
        <img src="https://images.pexels.com/photos/221179/pexels-photo-221179.jpeg" alt="" class="hidden object-cover absolute top-0 left-0 w-full h-full bgApply -z-10">
        <div class="flex justify-center items-center p-1 min-h-screen bg-gray-50 rounded-2xl border border-indigo-400 dark:bg-indigo-800 dark:text-white sm:p-8">
  <div class="overflow-hidden w-full min-h-screen bg-white rounded-2xl shadow-xl">
    <!-- Encabezado -->
    <div class="relative p-1 text-center text-white bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800">
      <div class="inline-flex justify-center items-center mb-4 w-16 h-16 text-4xl text-indigo-500 bg-white bg-opacity-20 rounded-full font-pacifico dark:text-indigo-800">
        {{ userName.charAt(0).toUpperCase()  }}
      </div>
      <h2 class="text-2xl font-bold font-pacifico">Cree su cuenta</h2>
      <v-icon name="fa-user-tie" class="absolute top-0 right-0 text-white animate-delay-[500ms] -rotate-12 animate__animated animate__fadeInTopRight dark:text-indigo-200" scale="6" />
      <v-icon name="fa-user-plus" class="absolute top-0 left-0 text-white rotate-12 animate__animated animate__fadeInTopLeft dark:text-indigo-200" scale="5" />
      <!-- icono de usuario en el centro (se usara un calc para centrarlo) -->
      <v-icon 
    name="ri-user-voice-line" 
    class="absolute bottom-0 left-0 text-white dark:text-indigo-50 animate__animated animate__fadeInTop" 
    scale="2" 
  />   
    </div>

    <!-- Formulario -->
    <div class="p-8 dark:bg-gradient-to-br font-poppins dark:from-indigo-700 dark:via-indigo-900 dark:to-indigo-950">
      <form class="space-y-6 dark:text-white">
        <!-- Nombre -->
        <div>
          <label class="block mb-1 text-sm font-medium dark:!text-white">
            <i class="mr-2 text-indigo-100 fas fa-user"></i>
            Nombre completo
          </label>
          <input
            type="text"
            v-model="userName"
            name="name"
            class="px-4 py-3 w-full rounded-lg border border-gray-300 transition-all duration-500 outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent dark:placeholder:text-white"
            placeholder="Ej: Juan Pérez"
            required
          >
        </div>

        <!-- Avatar Color Picker -->
        <div>
          <label class="block mb-1 text-sm font-medium dark:!text-white">
            <i class="mr-2 text-indigo-500 fas fa-user-circle"></i>Color de avatar
          </label>
          <div class="flex flex-wrap gap-2 mt-2">
            <button
              v-for="item in avatarColors"
              :key="item.id"
              type="button"
              @click="selectColor(item.color)"
              class="w-10 h-10 rounded-full transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
              :class="{ 'ring-2 ring-indigo-500 ring-offset-2 transform scale-110': selectedColor === item.color }"
              :style="{ backgroundColor: item.color }"
            >
              <span
                class="flex justify-center items-center w-full h-full text-sm font-semibold text-white font-poppins"
                v-if="userName && selectedColor === item.color"
              >
                {{ userName.charAt(0).toUpperCase() }}
              </span>
            </button>
          </div>
        </div>

        <!-- Correo -->
        <div>
          <label class="block mb-1 text-sm font-medium dark:!text-white">
            <i class="mr-2 text-indigo-500 fas fa-envelope"></i>Correo electrónico
          </label>
          <input
            type="email"
            v-model="userEmail"
            name="email"
            class="px-4 py-3 w-full rounded-lg border border-gray-300 transition-all duration-500 outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent dark:placeholder:text-white"
            placeholder="correo@ejemplo.com"
            required
          >
        </div>

        <!-- Contraseña -->
        <div>
          <label class="block mb-1 text-sm font-medium dark:!text-white">
            <i class="mr-2 text-indigo-500 fas fa-lock"></i>Contraseña
          </label>
          <input
            type="password"
            v-model="password"
            name="password"
            class="px-4 py-3 w-full rounded-lg border border-gray-300 transition-all duration-500 outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent dark:placeholder:text-white"
            placeholder="••••••••"
            required
          >
        </div>

        <!-- Confirmar Contraseña -->
        <div>
          <label class="block mb-1 text-sm font-medium dark:!text-white">
            <i class="mr-2 text-indigo-500 fas fa-check-circle"></i>Confirmar Contraseña
          </label>
          <input
            type="password"
            v-model="confirmPassword"
            name="confirmPassword"
            class="px-4 py-3 w-full rounded-lg border border-gray-300 transition-all duration-500 outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent dark:placeholder:text-white"
            placeholder="••••••••"
            required
          >
        </div>

        <!-- Botón Registro -->
        <button
          @click.prevent="createUser"
          type="submit"
          class="!px-6 !py-3 w-full font-bold text-white bg-indigo-600 rounded-lg transition duration-300 transform hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 flex items-center justify-center"
        >
          Registrarse <i class="ml-2 fas fa-arrow-right"></i>
        </button>

        <!-- Enlace Login -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600 dark:text-white">
            ¿Ya tiene cuenta?
            <router-link
              to="/tabs/tab1"
              class="font-medium text-indigo-600 transition duration-150 hover:text-indigo-800 dark:text-indigo-200"
            >
              Iniciar Sesión <i class="ml-1 fas fa-sign-in-alt"></i>
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import 'animate.css';



import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateCurrentUser, updateProfile, type UserCredential } from 'firebase/auth';
import { ref } from 'vue';
import { Notyf } from 'notyf';
import "notyf/notyf.min.css";
import { sysValues } from '@/stores/sysVals';
import { useRouter } from 'vue-router';

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
})

// values to register the user
const userName = ref('');
const userEmail = ref('');
const password = ref('');
const confirmPassword = ref('');

// verifying that user values are valid
const verifyValues = (): boolean => (!userEmail.value || !password.value || !confirmPassword.value || !userName.value || !selectedColor.value || password.value !== confirmPassword.value) ? false : true;

// values to login the user trough firebase
const auth = getAuth();

const router = useRouter();
const createUser = async (): Promise<void> => {
  if (!verifyValues()) {
    notyf.error('Por favor verifique los valores ingresados, verifique que no haya faltantes')
    return;
  }

  try {
    const credentials = await createUserWithEmailAndPassword(auth, userEmail.value, password.value);
    updateProfile(credentials.user, {
      displayName: userName.value,
      photoURL: selectedColor.value,
    })


    if (credentials.user) {
      const actionCodeSettings = {
        url: 'http://localhost:5173/successfullyRegistered',
        handleCodeInApp: true,
      };
      await sendEmailVerification(credentials.user, actionCodeSettings);
      console.log(credentials.user);
    }
    sysValues().setUserName(userName.value)
    // clear input values for valid messages once the message is sent
    userName.value = '';
    userEmail.value = '';
    password.value = '';
    confirmPassword.value = '';

    notyf.success(`${sysValues().getUserName}, su cuenta se ha creado correctamente, por favor vaya al inicio de sesión`)
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 5000)
  } catch (error) {
    console.log(error);
  }
}

const avatarColors = [
  { id: 1, color: '#f4b853' },
  { id: 2, color: '#998bf1' },
  { id: 3, color: '#1c144c' },
  { id: 4, color: '#c7a0ca' },
  { id: 5, color: '#4b4590' },
  { id: 6, color: '#3c3c64' },
];

const selectedColor = ref('');

const selectColor = (color: string) => {
  selectedColor.value = selectedColor.value === color ? '' : color;
};


</script>

<style scoped>
.bgApply{
  background-color: #eeeeee;
background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d009f' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
  .bgApply{
    background-color: #140031;
background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}
label{
  color: rgb(41, 41, 232);
}
</style>