<template>
  <div class="flex fixed inset-0 z-40 justify-center items-center backdrop-blur-md bg-black/60">
      <!-- Modal de confirmación -->
      <div
          v-show="!loading && !isError"
          class="p-6 w-full max-w-sm rounded-2xl border border-gray-100 shadow-2xl bg-white/90 dark:bg-gray-900/95 dark:border-gray-700 animate-fade-in"
      >
          <h2 class="mb-5 text-xl font-bold text-gray-900 dark:text-gray-50">Reportar comentario</h2>
          <!-- Disclaimer -->
          <div class="p-4 mb-5 rounded-lg border border-rose-100 bg-rose-50/50 dark:bg-rose-950/40 dark:border-rose-800">
              <div class="flex gap-3 items-start">
                  <div class="flex-shrink-0">
                      <v-icon name="ri-alert-line" scale="1.2" class="mt-0.5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div class="space-y-1.5 text-sm text-gray-700 dark:text-gray-200">
                      <p class="font-medium text-rose-800 dark:text-rose-300">⚠️ Normas de uso:</p>
                      <p>Esta herramienta es <strong>solo para reportar comentarios ofensivos</strong> (discriminación, acoso, amenazas, etc.).</p>
                      <p><strong>El abuso puede resultar en la suspensión permanente de tu cuenta.</strong></p>
                  </div>
              </div>
          </div>
          <p class="mb-7 text-gray-600 dark:text-gray-300">¿Estás seguro de que quieres reportar este comentario?</p>
          <div class="flex gap-3 justify-end">
              <button
                  @click="closeModal"
                  class="!px-4 !py-2 text-sm font-medium text-gray-700 bg-gray-100 !rounded-lg transition-all hover:bg-gray-200 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700"
              >
                  Cancelar
              </button>
              <button
                  @click="startReport"
                  class="!px-4 !py-2 text-sm font-medium text-white bg-rose-600 !rounded-lg transition-all hover:bg-rose-700 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700"
              >
                  Reportar
              </button>
          </div>
      </div>
      <!-- Modal de carga/éxito -->
      <div
          v-show="loading && !isError"
          class="p-6 w-full max-w-sm rounded-2xl border border-gray-100 shadow-2xl bg-white/90 dark:bg-gray-900/95 dark:border-gray-700 animate-fade-in"
      >
          <div class="relative">
              <v-icon
                  v-if="!showTick"
                  name="ri-loader-5-line"
                  scale="1.3"
                  class="absolute right-1 -top-2 text-indigo-600 animate-spin"
              />
 
          </div>
          <div class="mt-5 space-y-3">
              <h2 v-if="!showTick" class="text-xl font-bold text-indigo-800 dark:text-indigo-300">Reportando comentario...</h2>
              <p v-else class="text-lg font-medium text-green-600 animate-fade-left">Comentario reportado exitosamente <v-icon name="md-checkcircle-twotone" scale="1" class="mt-0.5 text-green-600 animate-jump-in" /></p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Esto puede tomar unos momentos</p>
              <div class="space-y-2">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                      Usuario: <span class="font-semibold text-rose-600 dark:text-rose-400">{{ reports().getReportCommentData.userReportedName }}</span>
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Comentario: <span class="font-semibold text-rose-600 dark:text-rose-400">{{ reports().getReportCommentData.messageReported }}</span>
                  </p>
              </div>
          </div>
      </div>
      <!-- Modal de error -->
      <div
          v-if="isError"
          class="p-6 w-full max-w-sm rounded-2xl border border-gray-100 shadow-2xl bg-white/90 dark:bg-gray-900/95 dark:border-gray-700 animate-shake"
      >
          <div class="flex gap-3 items-center mb-5">
              <v-icon name="ri-error-warning-line" scale="1.3" class="text-rose-600 dark:text-rose-400" />
              <h2 class="text-xl font-bold text-rose-800 dark:text-rose-300">¡Error al reportar!</h2>
          </div>
          <p class="mb-7 text-sm text-gray-600 dark:text-gray-300">
              Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.
          </p>
          <div class="flex justify-end">
              <button
                  @click="closeModal"
                  class="!px-4 !py-2 text-sm font-medium text-white bg-rose-600 !rounded-lg transition-all hover:bg-rose-700 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-700"
              >
                  Aceptar
              </button>
          </div>
      </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { collection, getFirestore, Timestamp, addDoc } from 'firebase/firestore';
import { reports } from '@/stores/reports';
import { getAuth } from 'firebase/auth';
import "notyf/notyf.min.css";
import { Notyf } from "notyf";
import { useIonRouter } from '@ionic/vue';
const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
  ripple: true,
  dismissible: true,
});     
const isError = ref(false);
const emit = defineEmits(['close', 'report', 'loading']);
const loading = ref(false);
const closeModal = () => {
    isError.value = false;
    emit('close');
};

const auth = getAuth();
const isUserAuth = () => {
    if(auth.currentUser) {
        return true;
    } else {
        return false;
    }
}   
const ionRouter = useIonRouter();
const startReport = () => { 
    if(!isUserAuth()) {
        notyf.error('Por favor inicie sesión para poder reportar');
        setTimeout(() => {
            ionRouter.navigate('/tabs/tab1', 'root');
        }, 1000);
        return;
    }
  loading.value = true;
  uploadReport();
};
const props = defineProps({
  userId: {
      type: String,
      required: true
  },
  messageReported: {
      type: String,
      required: true
  },
  userReportedName: {
      type: String,
      required: true
  },
  dateReported: {
      type: Timestamp,
      required: true
  }
});
const autoClose = () => {
  setTimeout(() => {
      loading.value = false;
      emit('close');
  }, 4000);
};
const db = getFirestore();
const reportsCollection = collection(db, 'reports');
const commentSent = ref(false);
const showTick = ref(false);
const setCheck = () => {
  if (commentSent.value) {
      setTimeout(() => {
          showTick.value = true;
          autoClose();
      }, 4000);
  }
};
const autoSetError = () => {
  setTimeout(() => {
      if (!commentSent.value) {
          isError.value = true;
          autoClose();
      }
  }, 12000);
};
const uploadReport = async () => {
  autoSetError();
  try {
      await addDoc(reportsCollection, {
          userId: reports().getReportCommentData.userId,
          messageReported: reports().getReportCommentData.messageReported,
          userReportedName: reports().getReportCommentData.userReportedName,
          dateReported: reports().getReportCommentData.dateReported,
          creationDate: Timestamp.now(),
      });
      commentSent.value = true;
      setCheck();
  } catch (error) {
      console.log(error);
      isError.value = true;
      commentSent.value = false;
  }
};
</script>
<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}
.animate-fade-in {
  animation: fade-in 0.25s ease-out;
}
.animate-shake {
  animation: shake 0.5s ease-in-out;
}
</style>
