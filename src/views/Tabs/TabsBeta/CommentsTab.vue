<template>
  <ion-page>
    <ion-content :fullscreen="true" class="animate-fade-up animate-duration-[.19s]">
      <section class="relative px-0 py-3 bg-gradient-to-br to-gray-900 dark:to-indigo-950 dark:from-black in-h-dvh animate-fade">
        <ion-router-link @click="routerIon.back()"  class="flex z-40 absolute cursor-pointer top-3 left-3 gap-2 items-end px-2 py-0.5 bg-white animate__slideInRight animate__animated !animate-duration-[.9s] dark:bg-gray-900/30 rounded-4xl dark:shadow-sm"><v-icon name="io-caret-back-outline" scale="1.2"/><p class="font-poppins">volver</p></ion-router-link>
        <article class="bg-gradient-to-br ion-padding dark:to-indigo-950 dark:from-black">
          <div class="p-2 mb-2 bg-gray-100 rounded-2xl shadow-md dark:bg-gray-900">
            <IntroComponent/>
            <NewsComponent/>
          </div>
        </article>

        <!-- Sección para escribir y enviar comentarios -->
        <div
          class="p-6 mt-4 mx-auto w-[96%] bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-3xl border border-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:shadow-indigo-900 dark:from-gray-900 dark:to-gray-800">
          <!-- Título con efecto de degradado -->
          <h3
            class="mb-2 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 font-redHat dark:from-indigo-200 dark:to-purple-400">
            Reportar estafa (<span v-show="comments.length > 0" class="text-indigo-600">{{ comments.length
            }}</span><v-icon v-show="comments.length === 0" name="ri-loader-5-line" scale="1.2"
              class="text-indigo-600 animate-spin" />)
          </h3>

          <div class="flex justify-end mb-2">
          </div>

          <!-- Formulario con diseño moderno -->
          <form class="flex flex-col gap-3 justify-center items-center w-full">
            <!-- Contenedor con altura fija y scroll -->
            <section
              class="flex overflow-y-auto relative dark:bg-gray-900 dark:border-gray-700  ion-padding flex-col gap-3 p-2 w-full rounded-3xl border-2 max-h-[75vh]">
              <!-- Botón sticky -->
   
              <!-- Nombre de la empresa/servicio -->
              <div class="space-y-1.5">
                <div class="flex gap-2 items-center">
                  <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                    <v-icon name="fa-store-alt" scale="1" />
                  </div>
                  <label for="serviceName"
                    class="text-base font-medium text-gray-800 dark:text-gray-300 font-redHat">Nombre de la
                    empresa/servicio</label>
                </div>
                <input v-model="userCommentValues.serviceName" type="text" placeholder="Ej: Tienda XYZ, Servicio ABC..."
                  class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
              </div>
              <!-- Ciudad/Estado y Dirección exacta -->
              <div class="flex flex-col gap-3 md:flex-row">
                <div class="space-y-1.5 w-full md:w-1/2">
                  <div class="flex gap-2 items-center">
                    <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                      <v-icon name="fa-map-marker-alt" scale="1" />
                    </div>
                    <label for="city"
                      class="text-base font-medium text-gray-800 dark:text-gray-300 font-redHat">Ciudad/Estado</label>
                  </div>
                  <input v-model="userCommentValues.city" type="text" placeholder="Ej: Ciudad de México..."
                    class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
                </div>
                <div class="space-y-1.5 w-full md:w-1/2">
                  <div class="flex gap-2 items-center">
                    <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                      <v-icon name="fa-map-pin" scale="1" />
                    </div>
                    <label for="address"
                      class="text-base font-medium text-gray-800 dark:text-gray-300 font-redHat">Dirección
                      (opcional)</label>
                  </div>
                  <input v-model="userCommentValues.address" type="text" placeholder="Ej: Av. Reforma 123..."
                    class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
                </div>
              </div>
              <!-- Tipo de estafa y Fecha del incidente -->
              <div class="flex flex-col gap-3 md:flex-row">
                <div class="space-y-1.5 w-full md:w-1/2">
                  <div class="flex gap-2 items-center">
                    <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                      <v-icon name="fa-exclamation-triangle" scale="1" />
                    </div>
                    <label for="scamType"
                      class="text-base font-medium text-gray-800 dark:text-gray-300 font-redHat">Tipo de estafa</label>
                  </div>
                  <select v-model="userCommentValues.scamType"
                    class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="venta fraudulenta">Venta fraudulenta</option>
                    <option value="servicio no entregado">Servicio no entregado</option>
                    <option value="cobro excesivo">Cobro excesivo</option>
                    <option value="phishing">Phishing o suplantación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div class="space-y-1.5 w-full md:w-1/2">
                  <div class="flex gap-2 items-center">
                    <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                      <v-icon name="fa-calendar-alt" scale="1" />
                    </div>
                    <label for="dateScam"
                      class="text-base font-medium text-gray-800 dark:text-gray-300 font-redHat">Fecha del
                      incidente</label>
                  </div>
                  <input v-model="userCommentValues.dateScam" type="date"
                    class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
                </div>
              </div>
              <!-- Monto perdido y Método de contacto -->
              <div class="flex flex-col gap-3 md:flex-row">
                <div class="space-y-1.5 w-full md:w-1/2">
                  <div class="flex gap-2 items-center">
                    <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                      <v-icon name="fa-dollar-sign" scale="1" />
                    </div>
                    <label for="amountLost"
                      class="text-base font-medium text-gray-800 dark:text-gray-300 font-redHat">Monto perdido
                      (opcional)</label>
                  </div>
                  <input v-model="userCommentValues.amountLost" type="text" placeholder="Ej: $5,000 MXN"
                    class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
                </div>
                <div class="hidden space-y-1.5 w-full md:w-1/2">
                  <div class="flex gap-2 items-center">
                    <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                      <v-icon name="fa-phone-alt" scale="1" />
                    </div>
                    <label for="contactMethod"
                      class="text-base font-medium text-gray-800 dark:text-gray-300 font-redHat">Método de
                      contacto</label>
                  </div>
                  <input type="text" placeholder="Ej: WhatsApp, Facebook..."
                    class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
                </div>
              </div>
            </section>




            <section id="comment"
              class="flex flex-col gap-8 p-2 w-full from-indigo-50 to-indigo-100 rounded-3xl border border-indigo-200 scroll-mt-24 dark:bg-slate-950 ion-padding dark:hover:bg-gradient-to-br dark:hover:from-black dark:hover:to-indigo-950">

              <!-- Asunto -->
              <div class="space-y-2">
                <div class="flex gap-3 items-center">
                  <div class="p-2.5 text-indigo-600 bg-indigo-50 rounded-lg dark:bg-indigo-900">
                    <v-icon name="bi-cursor-text" scale="1.2" class="dark:text-gray-100" />
                  </div>
                  <label for="subject"
                    class="text-lg font-medium text-gray-800 dark:text-gray-300 font-redHat">Asunto</label>
                </div>
                <input id="subject" v-model="userCommentValues.subject" type="text"
                  placeholder="Ej: Estafadores en centro comercial..."
                  class="px-5 py-3 w-full text-gray-700 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-200 dark:text-gray-300 dark:bg-gray-800 focus:outline-none focus:ring-2 dark:focus:ring-indigo-600 focus:ring-indigo-300 focus:border-transparent">
              </div>

              <!-- Comentario -->
              <div class="space-y-2">
                <div class="flex gap-3 items-center">
                  <div class="p-2.5 text-indigo-600 bg-indigo-50 rounded-lg dark:bg-indigo-900">
                    <v-icon name="bi-text-paragraph" scale="1.2" class="dark:text-gray-100" />
                  </div>
                  <label for="comment" class="text-lg font-medium text-gray-800 dark:text-gray-300 font-redHat">Detalles
                    del
                    incidente</label>
                </div>
                <textarea v-model="userCommentValues.comment"
                  placeholder="Cuéntanos tu experiencia con detalle para ayudarte mejor..."
                  class="px-5 py-3 w-full text-gray-700 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-200 ease-in-out focus:outline-none h-[50px] hover:h-[70px] hover:ring-2 hover:ring-indigo-300 hover:border-transparent focus:h-[110px] focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:text-gray-300 dark:bg-gray-800"
                  :rows="2"></textarea>

              </div>

              <!-- Botón con efecto hover y sombra -->
              <button @click.prevent="addComment" type="submit"
                class="w-full !px-6 !py-3 mt-2 text-white bg-gradient-to-r from-indigo-600 to-purple-700 !rounded-xl hover:from-indigo-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.01] flex items-center justify-center gap-2 font-medium shadow-md">
                <i class="text-white fas fa-paper-plane" aria-hidden="true"></i>
                Enviar reporte
              </button>
            </section>
          </form>
        </div>

        <!-- Lista de Empresas y Servicios Reportados -->
        <div
          class="p-4 mx-6 my-3 mb-6 bg-white bg-gradient-to-br rounded-xl border border-gray-100 shadow-sm dark:from-black dark:to-indigo-800 dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100 font-redHat">
            Empresas y servicios reportados
          </h3>
          <small class="!mb-2 text-gray-500 dark:text-gray-100 font-poppins">Seleccione un servicio para ver los reportes</small>

          <!-- Contenedor flex responsivo -->
          <div class="flex flex-wrap gap-3">
            <!-- Iteración con v-for -->
            <div @click="setFilter(service)" v-for="service in uniqueServices" :key="service" :class="[
              filter === service
                ? 'bg-indigo-100 border-indigo-600 text-indigo-600 font-sans italic dark:bg-black dark:border-indigo-400 dark:text-indigo-900'
                : 'bg-gray-50 border-indigo-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50',
              'px-4 py-2 group cursor-pointer transition-all duration-200 ease-in-out rounded-lg border hover:bg-indigo-50 hover:shadow-sm hover:scale-[1.02] dark:hover:bg-gray-700'
            ]">
              <span :class="[
                filter === service
                  ? 'text-indigo-600 dark:text-white'
                  : 'text-gray-700 dark:text-gray-100',
                'text-sm font-medium font-poppins group-hover:text-indigo-600 dark:group-hover:text-indigo-200'
              ]">
                {{ service }}
              </span>
            </div>

          </div>
        </div>



        <!--Comments section-->
        <div v-if="comments.length > 0" class="flex flex-col gap-4 px-2 mx-1 mt-4 sm:px-4">

          <!-- Contenedor de filtros -->
          <div class="p-4 bg-white rounded-xl border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="grid grid-cols-1 gap-4 p-1 rounded-md sm:grid-cols-2">
              <!-- Filtro de búsqueda -->
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Buscar</label>
                <div class="flex relative items-center px-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <v-icon class="text-indigo-600 dark:text-indigo-200" :class="filter ? 'text-indigo-600' : 'text-gray-400'"
                    name="io-search-sharp" scale="1" />
                  <input v-model="filter" type="text" placeholder="Buscar por nombre, empresa, servicio, direccion"
                    class="py-2.5 pr-4 pl-10 w-full text-sm text-indigo-700 rounded-lg border border-gray-200 border-none transition-all outline-none dark:text-gray-50 dark:border-gray-700" />
                  <v-icon v-if="filter" @click="filter = ''" name="ri-delete-back-2-line" scale="1"
                    class="text-indigo-700 transition-all duration-200 ease-out cursor-pointer dark:text-white hover:scale-150" />
                </div>
              </div>


              <!-- Filtro por categoría -->
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Ordenar por {{ filterBy == 'asc' ?
                  'más antiguas' :
                  'más recientes' }} <v-icon :name="filterBy == 'asc' ? 'pr-sort-numeric-up' : 'pr-sort-numeric-down'"
                    scale="1" /></label>
                <select v-model="filterBy"
                  class="px-4 py-2.5 w-full text-sm text-gray-700 bg-white rounded-lg border border-gray-200 transition-all appearance-none outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 dark:text-gray-50 dark:border-gray-700 dark:bg-gray-800">
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="asc">Más antiguas</option>
                  <option value="desc">Más recientes</option>
                </select>
              </div>
              <p v-if="filteredServices.length > 0 && filter && filter != filteredServices[0]"
                class="text-sm text-gray-500 dark:text-gray-300 animate-fade">Quizás quiere decir:
                <TransitionGroup name="list" tag="ul"
                  class="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100 shadow-sm dark:bg-gray-800">
                  <li v-for="service in filteredServices" @click="setFilter(service)" :key="service"
                    class="px-4 py-2 font-semibold text-indigo-700 bg-indigo-50 rounded-full border border-transparent transition-all duration-200 ease-in-out transform cursor-pointer font-poppins dark:bg-black dark:border-gray-600 dark:text-white dark:hover:bg-indigo-950 hover:bg-indigo-100 hover:scale-105 shadow-xs hover:shadow-sm hover:border-indigo-200">
                    {{ service }}
                  </li>
                </TransitionGroup>

              </p>
              <div>

              </div>
            </div>
          </div>

          <!-- popup to report a comment/answer-->
          <ReportComment v-show="showReportComment" @close="closeModal" @getReportCommentData="setReportCommentData"
            @report="reportComment" class="animate-fade animate-duration-75" :userId="reportCommentData.userId"
            :messageReported="reportCommentData.messageReported" :userReportedName="reportCommentData.userReportedName"
            :dateReported="reportCommentData.dateReported" />

          <!-- Lista de comentarios -->
          <div class="flex overflow-auto flex-col gap-3 max-h-[75vh]">
            <div class="flex sticky top-4 z-10 justify-end">
              <button @click="getCommentsEmmit"
                class="flex gap-2 items-center !px-4 !py-2 text-sm font-medium text-white dark:border dark:border-indigo-600 dark:bg-slate-700/40 backdrop-blur-sm dark:text-indigo-300 bg-indigo-500 !rounded-lg font-redHat hover:bg-indigo-600">Actualizar
                comentarios<v-icon name="ri-refresh-line" scale="1" /></button>
            </div>
            <article v-if="filter && frontEndComments.length > 0" class="flex">
              <p class="font-medium text-indigo-700 dark:text-indigo-300 font-poppins">{{
                frontEndComments.filter(filterComments).length == 1
                  ? (frontEndComments.filter(filterComments).length + ' Comentario encontrado para') :
                  (frontEndComments.filter(filterComments).length + ' Comentarios encontrados para' ) }} '{{ filter }}'
              </p>
            </article>
            <CommentCard v-for="comment in frontEndComments.filter(filterComments)" :key="comment.id"
              @report="reportComment()" :comment="comment.comment" :subject="comment.subject"
              :creationDate="comment.creationDate" :userName="comment.userName" :cardId="comment.id"
              :answers="comment.answers" :serviceName="comment.serviceName" :city="comment.city"
              :address="comment.address" :scamType="comment.scamType" :dateScam="comment.dateScam"
              :amountLost="comment.amountLost" :contactMethod="comment.contactMethod" :fullComment="comment.fullComment"
              :userColor="comment.userColor" :userUid="comment.userUid" @getAnswers="getCommentsEmmit"
              class="bg-white rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md" />
            <div class="flex justify-center">
              <button @click="addLimit" v-if="frontEndComments.length < comments.length" class="flex gap-2 items-center !px-4 !py-2 text-sm font-medium text-white dark:border dark:border-indigo-600 dark:bg-slate-700/40 backdrop-blur-sm dark:text-indigo-300 bg-indigo-500 !rounded-lg font-redHat hover:bg-indigo-600">Ver más comentarios<v-icon name="io-caret-down" scale="1" /></button>
            </div>

          </div>
        </div>

        <div v-else class="flex justify-center items-center w-full">
          <LoaderCircleYellow />
        </div>
      </section>
    </ion-content>

  </ion-page>
</template>

<script lang="ts" setup>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IonContent, IonPage, IonRouterOutlet, useIonRouter } from "@ionic/vue";
import { computed, onMounted, reactive, ref } from "vue";
import "notyf/notyf.min.css";
import { Notyf } from "notyf";


import { sysValues } from "@/stores/sysVals";
import { addDoc, collection, getDocs, getFirestore, query, Timestamp } from "firebase/firestore";

import LoaderCircleYellow from "@/animations/LoaderCircleYellow.vue";
import ReportComment from "@/components/TabsBeta/ReportComment.vue";
import CommentCard from "@/components/TabsBeta/CommentCard.vue";
import NewsComponent from "@/components/TabsBeta/CommentsTab/NewsComponent.vue";
import IntroComponent from "@/components/TabsBeta/CommentsTab/IntroComponent.vue";
import { getAuth } from "firebase/auth";



interface Answer {
  id: string;
  userName: string;
  answerUserColor: string;
  answerName: string;
  answerComment: string;
  answerCreationDate: Timestamp | string;
}

interface Comment {
  id: string;
  userName: string;
  comment: string;
  subject: string;
  creationDate: Timestamp | string;
  answers: Answer[];
  serviceName: string;
  city: string;
  address: string;
  scamType: string;
  dateScam: Timestamp;
  amountLost: string;
  fullComment: boolean;
  userColor: string;
}
const comments = ref<Comment[]>([]);
const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
})


// user values for send comment
const userCommentValues = reactive({
  userName: sysValues().getUserName,
  comment: '',
  subject: '',
  creationDate: Timestamp.now(),
  serviceName: '',
  city: '',
  address: '',
  scamType: '',
  dateScam: Timestamp.now(),
  amountLost: '',
  contactMethod: '',
  fullComment: false,
})

//firestore
const db = getFirestore()

//User Comments collection
const commentsCollection = collection(db, 'usersComments');

const filter = ref('');

const getComments = async () => {
  const qGetDocs = query(commentsCollection);
  try {
    const snapshot = await getDocs(qGetDocs);
    if (snapshot.empty) {
      notyf.error('No se encontraron comentarios')
      return
    }
    snapshot.forEach((doc) => {
      console.log(doc.data());

      comments.value.push({
        id: doc.id,
        userName: doc.data().userName,
        comment: doc.data().comment,
        subject: doc.data().subject,
        creationDate: doc.data().creationDate,
        answers: doc.data().answers,
        serviceName: doc.data().serviceName,
        city: doc.data().city,
        address: doc.data().address,
        scamType: doc.data().scamType,
        dateScam: doc.data().dateScam,
        amountLost: doc.data().amountLost,
        fullComment: doc.data().fullComment,
        userColor: doc.data().userColor,
        userUid: doc.data().userUid
      })
    })

  } catch (error) {
    const e = error as Error;
    notyf.error(e);
  }
}

onMounted(() => {
  getComments()
})

const getCommentsEmmit = async () => {
  comments.value = [];
  getComments()
}

// In your script section
const filterComments = (comment: Comment): boolean => {
  if (!filter.value) return true;
  const searchTerm = filter.value.toLowerCase();
  const fieldsToSearch = [
    comment.comment || '',
    comment.subject || '',
    comment.userName || '',
    comment.serviceName || '',
    comment.city || '',
    comment.scamType || '',
    comment.dateScam || '',
    comment.amountLost || '',
    comment.fullComment || ''
  ];
  return fieldsToSearch.some(field =>
    String(field).toLowerCase().includes(searchTerm)
  );
};

const verifyFields = () => {
  if (userCommentValues.comment && userCommentValues.subject) {
    return true;
  } else {
    return false
  }
}

const verifyLogged = () => {
  if (sysValues().getUserLogged) {
    return true;
  } else {
    return false
  }
}
const verifyFullComment = () => {
  if (userCommentValues.serviceName && userCommentValues.city && userCommentValues.scamType && userCommentValues.dateScam) {
    alert('full comment')
    return true;
  } else {
    alert('not full comment')
    return false
  }
}

const auth = getAuth();
const isUserAuth = () => {
  if (auth.currentUser) {
    return true;
  } else {
    return false
  }
}
const addComment = async () => {
  if (!isUserAuth()) {
    notyf.success('Por favor, inicie sesión para agregar un comentario')
    setTimeout(() => {
      routerIon.navigate({name: 'login'}, 'root')
    }, 3000)
    return
  }
  if (!verifyFields()) {
      notyf.error('Por favor, completa todos los campos')
      return
  }
  if (!verifyLogged()) {
    notyf.success('Por favor, inicie sesión para agregar un comentario')
    setTimeout(() => {
      routerIon.navigate({ name: 'login' }, 'root')
    }, 3000)
    return
  }
  try {
    await addDoc(commentsCollection, {
      userName: sysValues().getUserName,
      comment: userCommentValues.comment,
      subject: userCommentValues.subject,
      creationDate: Timestamp.now(),
      answers: [],
      serviceName: userCommentValues.serviceName,
      city: userCommentValues.city,
      address: userCommentValues.address,
      scamType: userCommentValues.scamType,
      dateScam: userCommentValues.dateScam,
      amountLost: userCommentValues.amountLost,
      contactMethod: userCommentValues.contactMethod,
      fullComment: verifyFullComment(),
      userColor: sysValues().getUserColor,
      userUid: sysValues().getUserUid,
    })
    notyf.success('Comentario agregado correctamente')
    userCommentValues.userName = '';
    userCommentValues.comment = '';
    userCommentValues.subject = '';
    userCommentValues.creationDate = '';

    getCommentsEmmit()
  } catch (error) {
    const e = error as Error;
    notyf.error(e.message)
  }
}

const filterBy = ref('')
const limit = ref(1)

const addLimit = () => {
  if (limit.value >= comments.value.length) {
    limit.value = comments.value.length
    return
  }
  limit.value += 3
}
const frontEndComments = computed(() => {
  if (filterBy.value === 'asc') {
    return comments.value.sort((a, b) => a.creationDate - b.creationDate).slice(0, limit.value)
  } else if (filterBy.value === 'desc') {
    return comments.value.sort((a, b) => b.creationDate - a.creationDate).slice(0, limit.value)
  } else {
    return comments.value.slice(0, limit.value)
  }
})


const bbvaComment = {
  id: "bbva-001",
  userName: "Daniel Herrera",
  comment: "Me hicieron un cargo no reconocido de $3,500 y cuando lo reclamé, BBVA me dijo que 'sí fue válido' sin mostrar pruebas. Nunca me devolvieron el dinero.",
  subject: "Cargos no reconocidos",
  creationDate: Timestamp.fromDate(new Date("2025-06-15T09:20:00")),
  answers: [
    {
      answerComment: "A mí me cargaron $800 de Spotify y ni siquiera tengo cuenta ahí.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-15T11:45:00")),
      answerName: "María González",
      answerUserColor: "#998bf1"
    },
    {
      answerComment: "Me clonaron la tarjeta y el banco se lavó las manos, pésimo servicio.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-15T14:10:00")),
      answerName: "Roberto Sánchez",
      answerUserColor: "#c7a0ca"
    },
    {
      answerComment: "Lo peor es que te hacen esperar meses para darte una respuesta negativa.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-15T18:30:00")),
      answerName: "Fernanda Castillo",
      answerUserColor: "#4b4590"
    },
    {
      answerComment: "Yo metí queja en Condusef y hasta entonces me hicieron caso.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-16T09:00:00")),
      answerName: "Jorge Pérez",
      answerUserColor: "#1c144c"
    },
    {
      answerComment: "También me aplicaron cargos de Amazon que nunca autoricé.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-16T12:15:00")),
      answerName: "Patricia López",
      answerUserColor: "#f4b853"
    },
    {
      answerComment: "Yo terminé cancelando mi tarjeta, es la única forma de librarte.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-16T15:40:00")),
      answerName: "Antonio Ramírez",
      answerUserColor: "#3c3c64"
    },
    {
      answerComment: "El call center solo te da vueltas, nunca solucionan nada.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-17T08:25:00")),
      answerName: "Claudia Navarro",
      answerUserColor: "#998bf1"
    },
    {
      answerComment: "Me cargaron Netflix dos veces en el mismo mes y no reconocieron el error.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-17T12:50:00")),
      answerName: "Mario Fuentes",
      answerUserColor: "#c7a0ca"
    },
    {
      answerComment: "Con BBVA siempre hay cargos fantasmas, ya no confío en ellos.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-17T17:15:00")),
      answerName: "Diana Paredes",
      answerUserColor: "#4b4590"
    },
    {
      answerComment: "Yo llevo tres meses esperando mi reembolso de un cargo fraudulento.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-18T10:05:00")),
      answerName: "José Medina",
      answerUserColor: "#f4b853"
    }
  ],
  serviceName: "BBVA México",
  city: "Ciudad de México",
  address: "Sucursal BBVA Reforma 222",
  scamType: "cargos_no_reconocidos",
  dateScam: Timestamp.fromDate(new Date("2025-06-14T21:30:00")),
  amountLost: "$3,500",
  fullComment: true,
  userColor: "#3c3c64"
}


const uploadMockComment = async () => {
  try {
    await addDoc(commentsCollection, bbvaComment)
    getCommentsEmmit()
  } catch (error) {
    const e = error as Error;
    notyf.error(e.message)
  }
}

const uniqueServices = computed(() => [...new Set(comments.value.map((comment) => comment.serviceName).filter((comment) => comment.toLowerCase() != ''))])

const setFilter = (filterParam: string) => filter.value = filterParam;

const filteredServices = computed(() => uniqueServices.value.filter((service) => service.toLowerCase().includes(filter.value.toLowerCase())));

//report comment (popup)

const reportCommentData = ref({
  userId: '',
  messageReported: '',
  userReportedName: '',
  dateReported: Timestamp.now()
})

const setReportCommentData = (userId: string, messageReported: string, userReportedName: string, dateReported: Timestamp) => {
  reportCommentData.value.userId = userId;
  reportCommentData.value.messageReported = messageReported;
  reportCommentData.value.userReportedName = userReportedName;
  reportCommentData.value.dateReported = dateReported;
}
const showReportComment = ref(false);

const reportComment = () => {
  showReportComment.value = true;
}

const closeModal = () => {
  showReportComment.value = false;
}

const fastAnswers = [
  { id: 1, text: "¡Gracias por alertar!" },
  { id: 2, text: "Me pasó algo similar" },
  { id: 3, text: "¡Denunciemos juntos!" },
  { id: 4, text: "¡Qué asco esta gente!" },
  { id: 5, text: "¡Cuidado con esta empresa!" }
];

const setFastAnswer = (msgId:number) => {
  switch (msgId) {
    case 1:

      break;

    case 2:

      break;
    case 3:

      break;
    case 4:

      break;

      case 5:
    
    break;
  }
}

const routerIon = useIonRouter();
const goToLocation = (locationParam:string) => {
    routerIon.navigate(locationParam, 'back')
}
</script>

<style scoped>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
