<template>
    <ion-page>
      <ion-content :fullscreen="true" class="ion-padding">  
        <section class="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div class="mx-auto max-w-7xl">
            <!-- Encabezado -->
            <div class="mb-16 text-center">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                <i class="mr-3 text-indigo-600 dark:text-indigo-400 fas fa-envelope-open-text"></i>
                Contáctanos
              </h2>
              <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                ¿Tienes alguna pregunta? Escríbenos y te responderemos en menos de 24 horas
              </p>
            </div>
            <div class="flex flex-col gap-8 lg:flex-row">
              <!-- Información de Contacto -->
              <div class="space-y-8">
                <!-- Teléfono -->
                <div class="flex items-start p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                  <div class="flex-shrink-0">
                    <div class="flex justify-center items-center w-12 h-12 bg-indigo-600 rounded-full">
                        <v-icon name="bi-telephone-inbound-fill" size="24" color="white" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Teléfono</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">+52 55 6395 0178</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Lunes a Viernes: 9am - 6pm</p>
                  </div>
                </div>
                <!-- Email -->
                <div class="flex items-start p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                  <div class="flex-shrink-0">
                    <div class="flex justify-center items-center w-12 h-12 bg-indigo-600 rounded-full">
                        <v-icon name="md-email" size="24" color="white" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Correo Electrónico</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">informes@grupochimex.com</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">+52 55 6395 0179</p>
                  </div>
                </div>
                <!-- Dirección -->
                <div class="flex items-start p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                  <div class="flex-shrink-0">
                    <div class="flex justify-center items-center w-12 h-12 bg-indigo-600 rounded-full">
                        <v-icon name="ri-building-2-fill" size="24" color="white" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Oficina Principal</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">Anzures, Miguel Hidalgo</p>
                    <p class="text-gray-600 dark:text-gray-300">Ciudad de México, CDMX</p>
                  </div>
                </div>
              </div>
              <!-- Formulario de Contacto -->
              <div class="col-span-2 p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800">
                <form class="space-y-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <i class="mr-2 text-indigo-600 dark:text-indigo-400 fas fa-user"></i>
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      v-model="name"
                      class="block px-4 py-3 mt-1 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                      required
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <i class="mr-2 text-indigo-600 dark:text-indigo-400 fas fa-tag"></i>
                      Asunto
                    </label>
                    <input
                      type="text"
                      v-model="subject"
                      class="block px-4 py-3 mt-1 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                      required
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <i class="mr-2 text-indigo-600 dark:text-indigo-400 fas fa-envelope"></i>
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      v-model="email"
                      class="block px-4 py-3 mt-1 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                      required
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <i class="mr-2 text-indigo-600 dark:text-indigo-400 fas fa-phone"></i>
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      v-model="phone"
                      class="block px-4 py-3 mt-1 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <i class="mr-2 text-indigo-600 dark:text-indigo-400 fas fa-comment-dots"></i>
                      Mensaje
                    </label>
                    <textarea
                      v-model="message"
                      rows="4"
                      class="block px-4 py-3 mt-1 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    @click.prevent="sendEmail"
                    type="submit"
                    class="!px-6 !py-3 w-full font-semibold text-white bg-indigo-600 rounded-3xl transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    <i class="mr-2 fas fa-paper-plane"></i>
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
  import { IonPage, IonContent } from '@ionic/vue';
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';
  import 'notyf/notyf.min.css';
  import { Notyf } from 'notyf';
  
  const notyf = new Notyf({
    duration: 4000,
    position: { x: 'right', y: 'top' },
  });
  
  emailjs.init({
    publicKey: 'fXlbInB-wrOGPiUbH',
    blockHeadless: true,
    blockList: {
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      watchVariable: 'userEmail',
    },
    limitRate: {
      id: 'app',
      throttle: 10000,
    },
  });
  
  const name = ref('');
  const email = ref('');
  const phone = ref('');
  const subject = ref('');
  const message = ref('');
  
  const sendEmail = async () => {
    if (name.value === '' || email.value === '' || message.value === '') {
      notyf.error('Por favor ingresa todos los campos');
      return;
    }
    try {
      const result = await emailjs.send('service_3nl9wkf.', 'template_2q2mc52', {
        subject: subject.value,
        message: message.value,
        name: name.value,
        email: email.value,
        phone: phone.value,
        url: 'losestafadores.com'
      });
      if (result.status === 200) {
        notyf.success('Correo enviado correctamente, tan pronto nos sea posible le responderemos');
        name.value = '';
        email.value = '';
        phone.value = '';
        subject.value = '';
        message.value = '';
      }
    } catch (error) {
      notyf.error('Error al enviar el correo, por favor inténtalo de nuevo más tarde');
      console.log(error);
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados adicionales aquí si es necesario */
  </style>
  