<template>
    <div  class="flex fixed inset-0 z-40 justify-center items-center bg-black bg-opacity-50">
        <div v-show="!loading && !isError" class="p-4 max-w-sm bg-white rounded-lg shadow-lg animate-jump">
            <h2 class="mb-2 text-lg font-semibold">Reportar comentario</h2>
  
            <!-- Disclaimer -->
            <div class="p-2 mb-3 text-sm text-rose-700 bg-rose-50 border-l-4 border-rose-400">
                <p class="font-medium">⚠️ Normas de uso:</p>
                <p>Esta herramienta es <strong>solo para reportar comentarios ofensivos</strong> (discriminación, acoso, amenazas, etc.).</p>
                <p class="mt-1"><strong>El abuso puede resultar en la suspensión permanente de su cuenta.</strong></p>
            </div>
  
            <p class="mb-4">¿Está seguro de que quiere reportar este comentario?</p>
  
            <div class="flex gap-2 justify-end">
                <button @click="closeModal" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Cancelar
                </button>
                <button @click="startReport" class="px-4 py-2 text-sm font-medium text-white bg-rose-500 rounded-lg hover:bg-rose-600">
                    Reportar
                </button>
            </div>
        </div>
        <div v-show="loading && !isError" class="p-4 max-w-sm bg-white rounded-lg shadow-lg animate-jump">
          <v-icon v-if="!showTick" name="ri-loader-5-line" scale="1.2" class="absolute top-1 right-1 text-rose-600"  animation="spin" speed="fast" />
          <v-icon v-else name="md-checkcircle-twotone" scale="1" class="absolute top-1 right-1 mt-0.5 text-emerald-600 animate__animated animate__flip" />
          <article class="flex relative flex-col gap-2 items-start font-nunito">
              <h2 v-if="!showTick" class="mb-2 text-lg font-medium text-rose-800 font-nunito">Reportando comentario...</h2>
              <p v-else class="text-base text-emerald-600 animate-fade-left animate__animated animate__zoomInRight">Comentario reportado exitosamente</p>
              <p class="text-sm text-gray-600">Esto puede tomar unos momentos</p>
              <p class="text-sm text-gray-600 animate-fade-left font-nunito animate-delay-[700ms]">Usuario: <span class="font-bold text-rose-800 font-poppins">{{ reports().getReportCommentData.userReportedName }}</span></p>
              <p class="text-sm text-gray-600 animate-fade-left animate-delay-[1400ms] overflow-hidden whitespace-nowrap w-full truncate font-nunito">Comentario: <span class="font-semibold text-rose-800 font-poppins">{{ reports().getReportCommentData.messageReported }}</span></p>
            </article>
        </div>
        <section
    v-if="isError"
    class="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50"
  >
    <div class="p-4 max-w-sm bg-white rounded-lg shadow-lg animate__animated animate__shakeX">
      <div class="flex gap-2 items-center mb-2 text-rose-600">
        <v-icon name="ri-error-warning-line" scale="1.2" />
        <h2 class="text-lg font-semibold">¡Error al reportar!</h2>
      </div>
      <p class="mb-3 text-sm text-gray-600">
        Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.
      </p>
      <div class="flex justify-end">
        <button
          @click="closeModal"
          class="px-4 py-2 text-sm font-medium text-white bg-rose-500 rounded-lg hover:bg-rose-600"
        >
          Aceptar
        </button>
      </div>
    </div>
  </section>
  
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import 'animate.css';
  import { collection, getFirestore, Timestamp, addDoc } from 'firebase/firestore';
  import { reports } from '@/stores/reports';
  const isError = ref(false);
  
  const emit = defineEmits(['close', 'report', 'loading']);
  const loading = ref(false);
  
  const closeModal = () => {
    emit('close');
  }
  
  
  
  const startReport = () => {
    loading.value = true;
    uploadReport()
  }
  
  const props = defineProps({
    userId:{
      type:String,
      required:true
    },
    messageReported:{
      type:String,
      required:true
    },
    userReportedName:{
      type:String,
      required:true
    },
    dateReported:{
      type:Timestamp,
      required:true
    }
  })
  
  const autoClose = () => {
    setTimeout(() => {
      loading.value = false;
      emit('close');
    }, 4000);
  }
  
  // Firebase stuff
  const db = getFirestore();
  const reportsCollection = collection(db, 'reports');
  
  const commentSent = ref(false);
  const showTick = ref(false);
  const setCheck = () => {
    if(commentSent.value){
      setTimeout(() => {
        showTick.value = true;
        autoClose();
      }, 4000);
    }
  }
  
  const autoSetError = () => {
    setTimeout(() => {
      if(!commentSent.value){
        isError.value = true;
        autoClose();
      }
    }, 12000)
  }
  const uploadReport = async() => {
    autoSetError();
    try {
      await addDoc(reportsCollection, {
        userId: props.userId,
        messageReported: props.messageReported,
        userReportedName: props.userReportedName,
        dateReported: props.dateReported,
        creationDate: Timestamp.now(),
      });
    commentSent.value = true;
  
      setCheck();
  
    } catch (error) {
      console.log(error);
      isError.value = true;
      commentSent.value = false;
    }
  }
  
  </script>
  
  <style scoped>
  /* Estilos adicionales si son necesarios */
  </style>
  