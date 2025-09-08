<template>
  <!-- comment card (MAIN) -->
  <section
    class="p-4 w-full rounded-2xl border border-gray-100 shadow-sm transition-shadow duration-200 font-poppins hover:shadow-md dark:bg-gray-900 dark:border-gray-700 dark:shadow-indigo-900">
    <!-- Header del comentario -->
    <div class="flex gap-2 items-center mb-1">
      <v-icon name="fa-user" scale="1" class="mt-0.5 text-indigo-600 dark:text-indigo-300" />
      <article class="flex justify-center items-center w-8 h-8 rounded-full text-slate-100"
        :style="{ backgroundColor: userColor }">
        <h5 class="text-sm font-semibold">{{ userName.charAt(0).toUpperCase() }}</h5>
      </article>
      <div>
        <h3 class="!text-md font-medium text-gray-800 dark:text-gray-300">{{ userName }}</h3>
        <h6 class="!text-xs text-gray-500 dark:text-gray-400">{{ convertedDate(creationDate) }}</h6>
      </div>
    </div>

    <div v-if="props.fullComment"
      class="p-4 mb-4 bg-gradient-to-r from-indigo-50 to-white rounded-lg border border-indigo-100 shadow-sm dark:border-slate-700 dark:from-gray-900 dark:to-gray-800">
      <div class="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        <!-- Empresa -->
        <div
          class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 dark:bg-gray-800 dark:border-slate-700 shadow-xs">
          <div class="flex-shrink-0">
            <v-icon name="fa-store-alt" scale="1" class="mt-0.5 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div>
            <span class="block font-medium text-gray-700 dark:text-gray-300">Empresa</span>
            <span class="text-gray-800 dark:text-gray-300">{{ serviceName }}</span>
          </div>
        </div>

        <!-- Ciudad -->
        <div
          class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 dark:bg-gray-800 dark:border-slate-700 shadow-xs">
          <div class="flex-shrink-0">
            <v-icon name="fa-map-marker-alt" scale="1" class="mt-0.5 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div>
            <span class="block font-medium text-gray-700 dark:text-gray-300">Ciudad</span>
            <span class="text-gray-800 dark:text-gray-300">{{ city }}</span>
          </div>
        </div>

        <!-- Dirección -->
        <div
          class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 dark:bg-gray-800 dark:border-slate-700 shadow-xs">
          <div class="flex-shrink-0">
            <v-icon name="fa-map-pin" scale="1" class="mt-0.5 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div>
            <span class="block font-medium text-gray-700 dark:text-gray-300">Dirección</span>
            <span class="text-gray-800 dark:text-gray-300">{{ address || 'No especificada' }}</span>
          </div>
        </div>

        <!-- Tipo de estafa -->
        <div
          class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 dark:bg-gray-800 dark:border-slate-700 dark:shadow-xs shadow-xs">
          <div class="flex-shrink-0">
            <v-icon name="fa-exclamation-triangle" scale="1" class="mt-0.5 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div>
            <span class="block font-medium text-gray-700 dark:text-gray-300">Tipo de estafa</span>
            <span class="text-gray-800 dark:text-gray-300">{{ scamTypeLabel }}</span>
          </div>
        </div>

        <!-- Fecha -->
        <div
          class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 dark:bg-gray-800 dark:border-slate-700 dark:shadow-xs shadow-xs">
          <div class="flex-shrink-0">
            <v-icon name="fa-calendar-alt" scale="1" class="mt-0.5 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div>
            <span class="block font-medium text-gray-700 dark:text-gray-300">Fecha</span>
            <span class="text-gray-800 dark:text-gray-300">{{ convertedDate(dateScam) }}</span>
          </div>
        </div>

        <!-- Monto perdido -->
        <div
          class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 dark:bg-gray-800 dark:border-slate-700 dark:shadow-xs shadow-xs">
          <div class="flex-shrink-0">
            <v-icon name="fa-dollar-sign" scale="1" class="mt-0.5 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div>
            <span class="block font-medium text-gray-700 dark:text-gray-300">Monto perdido</span>
            <span class="font-semibold text-gray-800 dark:text-gray-300">{{ amountLost || 'No especificado' }}</span>
          </div>
        </div>
      </div>
    </div>


    <!-- Contenido del comentario -->
    <div class="space-y-3">
      <article class="flex justify-between items-center">
        <h3 class="text-sm italic font-semibold text-indigo-800 dark:text-indigo-200 font-redHat">"{{ subject }}"</h3>
        <button @click="reportComment"><v-icon name="io-flag" scale="1" class="mt-0.5 text-rose-600" /></button>
      </article>
      <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-400">{{ comment }}</p>
    </div>

    <!-- Acciones -->
    <div class="mt-4 space-y-3">
      <!-- Botón de responder y respuestas rápidas -->
      <div v-show="!answering" class="flex flex-wrap gap-2 items-center">
        <div @click="toggleAnswering(true)" class="text-indigo-200 cursor-pointer ion-activatable ripple-parent rounded-rectangle">
          Responder
          <v-icon name="md-reply" scale="1" />
          <ion-ripple-effect>
          </ion-ripple-effect>
        </div>

        <!-- Respuestas rápidas -->
        <div class="flex flex-wrap gap-2 w-full">
          <article v-for="(e, index) in fastAnswers" :key="e.id">
            <FastAnswer
              class="animate-fade-left animate-duration-[.8s]"
              :style="{ animationDelay: (100 * index) + 'ms' }"
              :text="e.text"
              :id="e.id"
              @click="addDefaultAnswer(e.id)"
            />

          </article>
        </div>

      </div>
      <!-- Área de respuesta -->
      <div v-show="answering" class="mt-4 space-y-3">
        <div class="flex justify-between items-center">
          <button @click="toggleAnswering(false)"
            class="flex gap-1 items-center !px-3 !py-1 text-sm !text-red-400 bg-red-50 !rounded-lg transition-colors dark:bg-gray-800 dark:border-slate-700 dark:shadow-xs shadow-xs hover:bg-red-100 dark:hover:bg-red-600 dark:text-gray-100">
            <i class="text-xs fas fa-times" aria-hidden="true"></i>
            Cancelar
          </button>
        </div>
        <ion-textarea
    :label="`Responder a ${userName}`"
    label-placement="floating"
    fill="outline"
    placeholder="Escriba su respuesta aquí..."
    v-model="answerValue"
  ></ion-textarea>
        <textarea ref="$answerTextArea" v-model="answerValue" placeholder="Escriba su respuesta aquí..."
          class="hidden p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:border-slate-700 dark:shadow-xs shadow-xs focus:ring-indigo-300"
          rows="3"></textarea>
        <button @click="addAnswer"
          :class="answerValue.trim() ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'"
          class="flex gap-2 justify-center items-center !px-4 !py-2 text-sm text-white !rounded-lg transition-colors dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-gray-100">
          <i class="text-xs fas fa-paper-plane" aria-hidden="true"></i>
          Enviar respuesta
        </button>
      </div>
    </div>

    <!-- Divisor -->
    <div class="my-5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

    <!-- Respuestas -->
    <article class="bg-white dark:bg-gray-800 dark:border-slate-700 dark:shadow-xs shadow-xs">

      <TransitionGroup name="list" tag="div" class="py-1 answers-container">
        <div
          v-for="answer in visibleAnswers.sort((a, b) => Number(a.answerCreationDate) - Number(b.answerCreationDate))"
          :key="answer.id || answer.answerCreationDate?.toMillis() || Math.random()"
          class="list-item pl-4 mt-4 ml-3 border-l-2 border-indigo-100 dark:bg-gary-800 dark:border-slate-700 dark:shadow-xs shadow-xs">
          <div class="flex gap-3 items-center mb-3">
            <article class="flex justify-center p-0.5 items-center !w-8 !h-8  !rounded-full text-slate-100"
              :style="{ backgroundColor: answer.answerUserColor }">
              <small class="!text-sm font-semibold">{{ answer.answerName.charAt(0).toUpperCase() }}</small>
            </article>
            <div>
              <small class="text-sm font-medium text-gray-800 font-redHat dark:text-gray-200">{{ answer.answerName }}</small>
              <small class="px-2 ml-2 text-xs text-gray-500 rounded-lg font-redHat dark:bg-slate-900 dark:text-gray-200">{{ convertedDate(answer.answerCreationDate) }}</small>
            </div>
          </div>
          <p class="pl-9 text-sm text-gray-700 font-redHat dark:text-gray-200">{{ answer.answerComment }}</p>
        </div>
      </TransitionGroup>
      <div v-if="!limitReached && answers.length > answersLimit" class="flex justify-start items-center p-3 my-1">
        <button @click="loadMoreMessages()"
          class="!px-2 !py-1 flex gap-2 items-center text-sm font-medium !rounded-md dark:!shadow-indigo-200 !shadow-indigo-200 dark:!border-indigo-400 !border-indigo-400 dark:!border dark:text-indigo-100   text-white bg-indigo-500 dark:bg-black font-redHat hover:bg-indigo-700">
          Ver más respuestas
          <v-icon name="md-expandmore-twotone" scale="1.2" />
        </button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { sysValues } from '@/stores/sysVals';
import { arrayUnion, doc, getFirestore, Timestamp, updateDoc } from 'firebase/firestore';
import { nextTick, ref, computed, type PropType } from 'vue';
import "notyf/notyf.min.css";
import { Notyf } from "notyf";
import { reports } from '@/stores/reports';
import FastAnswer from './FastAnswer.vue';
import { IonRippleEffect } from '@ionic/vue';
import { IonTextarea } from '@ionic/vue';
const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
  ripple: true,
  dismissible: true,
});

const answering = ref(false);

interface Answer {
  id: string;
  answerName: string;
  answerComment: string;
  answerCreationDate: Timestamp;
  answerUserColor: string;
  answerUserUid: string;

}

const props = defineProps({
  cardId: {
    type: String,
    default: ''
  },
  userName: {
    type: String,
    default: 'Juan Perez García'
  },
  comment: {
    type: String,
    default: 'Los estafadores suelen ser muy convincentes y utilizan tácticas sofisticadas para engañar a sus víctimas. Siempre desconfía de ofertas que parecen demasiado buenas para ser verdad.'
  },
  subject: {
    type: String,
    default: 'Estafadores en centro comercial'
  },
  creationDate: {
    type: Object as PropType<Timestamp>,
    default: () => Timestamp.now()
  },
  serviceName: {
    type: String,
    default: 'Tienda XYZ'
  },
  city: {
    type: String,
    default: 'Ciudad de México'
  },
  address: {
    type: String,
    default: ''
  },
  scamType: {
    type: String,
    default: 'venta_fraudulenta'
  },
  dateScam: {
    type: Date,
    default: new Date()
  },
  amountLost: {
    type: String,
    default: ''
  },
  answers: {
    type: Array as () => Answer[],
    default: () => []
  },
  fullComment: {
    type: Boolean,
    default: false
  },
  userColor: {
    type: String,
    default: '#f4b853'
  },
  userUid: {
    type: String,
    default: ''
  }
});

const scamTypeLabel = computed(() => {
  const types: Record<string, string> = {
    venta_fraudulenta: 'Venta fraudulenta',
    servicio_no_entregado: 'Servicio no entregado',
    cobro_excesivo: 'Cobro excesivo',
    phishing: 'Phishing o suplantación',
    otro: 'Otro'
  };
  return types[props.scamType] || props.scamType;
});

const emmits = defineEmits(['getAnswers', 'report', 'getReportCommentData']);
const db = getFirestore();
const commentDocReference = doc(db, `usersComments/${props.cardId}`);
const answerValue = ref('');

const toggleAnswering = (value: boolean) => {
  if (value) {
    answering.value = true;
    answerValue.value = '';
    nextTick(() => {
      $answerTextArea.value?.focus();
    });
  } else {
    answering.value = false;
    answerValue.value = '';
  }
};

const verifyAnswer = () => (answerValue.value.trim() !== '') ? true : false;
const verifyLogged = () => sysValues().getUserLogged;

const addAnswer = async () => {
  if (!verifyAnswer()) {
    notyf.error('Por favor ingrese un comentario');
    return;
  }
  if (!verifyLogged()) {
    notyf.error('Por favor inicie sesión para poder responder');
    return;
  }
  try {
    await updateDoc(commentDocReference, {
      answers: arrayUnion({
        answerName: sysValues().getUserName,
        answerComment: answerValue.value,
        answerCreationDate: Timestamp.now(),
        answerUserColor: sysValues().getUserColor,
        answerUserUid: sysValues().getUserUid,

      })
    });
    callGetAnswers();
  } catch (error) {
    const e = error as Error;
    alert(e);
  }
};

const convertedDate = (dateParam: Timestamp) => {
  if (!dateParam) return '';
  if (typeof dateParam === 'object' && dateParam.toDate) {
    return dateParam.toDate().toLocaleString('es-ES', { hour12: true, hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'long', year: 'numeric', weekday: 'long' });
  }
  return dateParam;
}
const fastAnswers = [
  { id: 1, text: "¡Gracias por alertar!" },
  { id: 2, text: "Me pasó algo similar" },
  { id: 3, text: "¡Denunciemos juntos!" },
  { id: 4, text: "¡Qué asco esta gente!" },
  { id: 5, text: "¡Cuidado con esta empresa!" }
];

const defaultAnswerValue = ref(1);
const $answerTextArea = ref<HTMLElement | null>(null);

const addDefaultAnswer = async (defaultAnswer: number) => {
  switch (defaultAnswer) {
    case 1:
      answering.value = true;
      answerValue.value = '¡Gracias por alertar!';
      break;
    case 2:
      answering.value = true;
      answerValue.value = 'Me pasó algo similar';
      break;
    case 3:
      answering.value = true;
      answerValue.value = '¡Denunciemos juntos!';
      break;
    case 4:
      answering.value = true;
      answerValue.value = '¡Qué asco esta gente!';
      break;
    case 5:
      answering.value = true;
      answerValue.value = '¡Cuidado con esta empresa!';
      break;
  }
  answering.value = true;
  await nextTick();
  $answerTextArea.value?.focus();
};

const callGetAnswers = () => emmits('getAnswers');

// Limit for answers stuff
const limitReached = ref(false);
const answersLimit = ref(3);
const visibleAnswers = computed(() => {
  return props.answers.slice(0, answersLimit.value);
});

const loadMoreMessages = () => {
  const totalAnswers = props.answers.length;
  limitReached.value = false;
  answersLimit.value += 3;
  if (answersLimit.value >= totalAnswers) {
    answersLimit.value = totalAnswers;
    limitReached.value = true;
  }
};

const randomColor = () => {
  const colors = ['#f4b853', '#998bf1', '#1c144c', '#4b4590', '#c7a0ca', '#3c3c64'];
  return colors[Math.floor(Math.random() * colors.length)];

};


const reportComment = () => {
  reports().setReportCommentData({
    messageReported: props.comment,
    userReportedName: props.userName,
    dateReported: props.creationDate,
    userId: props.userUid
  })
  emmits('report');
}

</script>

<style scoped>
.list-item {
  list-style-type: none;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.28s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
  text-align: center;

  height: 300px;
  width: 300px;

  margin: 0 auto;
}

b {
  width: 100%;
}

.ripple-parent {
  position: relative;
  overflow: hidden;

  border: 1px solid #ddd;
}

.rectangle {
  width: 300px;
  height: 150px;
}

.rounded-rectangle {
  width: 135px;
  height: 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}

ion-textarea {
  --border-color: #f4b853;
  --highlight-color-focused: #f4b853;
  --highlight-color: #7e57ff;
}
</style>