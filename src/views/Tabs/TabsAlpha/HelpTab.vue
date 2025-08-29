<template>
    <ion-page>
      <ion-content :fullscreen="true" class="ion-padding">
        <section class="px-4 py-16 bg-gray-50 dark:bg-gray-800 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-4xl">
            <div class="mb-12 text-center">
              <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                <ion-icon :icon="helpCircleOutline" class="mr-3 text-blue-600"></ion-icon>
                Preguntas Frecuentes
              </h2>
              <p class="mt-4 text-lg text-gray-500 dark:text-gray-100">
                Estamos aquí para ayudarle. Revisa nuestras preguntas frecuentes o contáctanos si necesitas más ayuda.
              </p>
            </div>
            <div class="space-y-6">
              <!-- FAQ Items -->
              <div class="p-6 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700">
                <div class="flex items-start">
                  <ion-icon :icon="helpCircle" class="mt-1 mr-4 text-blue-500"></ion-icon>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">¿Es gratis?</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-200">
                      Como bien lo hemos comentado, este sitio es completamente gratuito, apoyelo compartiendo.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Repetir este bloque para cada FAQ -->
              <div class="p-6 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700">
                <div class="flex items-start">
                  <ion-icon :icon="shieldCheckmark" class="mt-1 mr-4 text-purple-500"></ion-icon>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">¿Necesito dar información delicada?</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-200">
                      Su información de registro no requiere de datos bancarios, íntimos o delicados.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Sección de Contacto -->
              <div class="p-8 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <h3 class="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
    <ion-icon :icon="mailOpenOutline" class="mr-3 text-green-500"></ion-icon>
    ¿No hemos resuelto tu duda?
  </h3>

  <form @submit.prevent="sendEmail" class="space-y-6">
    <!-- Input para el nombre -->
      <ion-input
        label="Nombre"
        label-placement="floating"
        placeholder="¿Cuál es su nombre?"
        v-model="name"
        required
        fill="outline"
        class="custom-ion-input"
      ></ion-input>
 

    <!-- Input para el correo electrónico -->
      <ion-input
        label="Correo electrónico"
        label-placement="floating"
        placeholder="Su correo electrónico"
        v-model="email"
        type="email"
        required
        fill="outline"
        class="custom-ion-input"
      ></ion-input>
 

    <!-- Textarea para el mensaje -->
      <ion-textarea
        label="Mensaje"
        label-placement="floating"
        placeholder="Escriba su comentario o solicitud"
        v-model="message"
        :rows="4"
        required
        fill="outline"
        class="custom-ion-input"
      ></ion-textarea>
 

    <!-- Botón de enviar -->
    <ion-button
      expand="block"
      type="submit"
      class="ion-margin-top"
      shape="round"
    >
      <ion-icon :icon="send" slot="start"></ion-icon>
      Enviar Mensaje
    </ion-button>
  </form>
</div>

            </div>
          </div>
        </section>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonIcon,
    alertController,
  } from '@ionic/vue';
  import {
    helpCircleOutline,
    helpCircle,
    shieldCheckmark,
    mailOpenOutline,
    send,
  } from 'ionicons/icons';
  import emailjs from '@emailjs/browser';
  
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
  const message = ref('');
  
  const sendEmail = async () => {
    if (!name.value || !email.value || !message.value) {
      const alert = await alertController.create({
        header: 'Error',
        message: 'Por favor ingresa todos los campos',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    try {
      const result = await emailjs.send(
        'service_3nl9wkf',
        'template_2q2mc52',
        {
          subject: 'Sugerencia/Solicitud',
          message: message.value,
          name: name.value,
          email: email.value,
          phone: '',
          url: 'losestafadores.com',
        }
      );
  
      if (result.status === 200) {
        const alert = await alertController.create({
          header: 'Éxito',
          message: 'Correo enviado correctamente, tan pronto nos sea posible le responderemos',
          buttons: ['OK'],
        });
        await alert.present();
        // Limpiar el formulario
        name.value = '';
        email.value = '';
        message.value = '';
      }
    } catch (error) {
      const alert = await alertController.create({
        header: 'Error',
        message: 'Error al enviar el correo, por favor inténtalo de nuevo más tarde',
        buttons: ['OK'],
      });
      await alert.present();
      console.error(error);
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí si es necesario */

  .custom-ion-input {
  --background: transparent;
  --border-radius: 8px;
  --padding-start: 10px;
  --padding-end: 10px;
}

ion-item {
  --inner-border-width: 0;
  --highlight-height: 0;
}

  </style>
  