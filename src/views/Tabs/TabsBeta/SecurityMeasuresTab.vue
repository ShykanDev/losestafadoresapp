<template>
    <ion-page>
      <ion-content :fullscreen="true" class="animate-fade-up animate-duration-[.19s]">
        <ion-router-link @click="goToLocation('/tabsAlpha')" v-if="isPage" class="flex z-40 absolute cursor-pointer top-3 left-3 gap-2 items-end px-2 py-1 bg-white animate__slideInRight animate__animated !animate-duration-[.9s] dark:bg-gray-900 rounded-4xl dark:shadow-sm"><v-icon name="io-caret-back-outline" scale="1.2"/><p class="font-poppins">volver</p></ion-router-link>

        <section class="container px-4 py-8 mx-auto animate-fade-left animate-duration-[.19s]">
            
      <!-- Sección 1: Medidas Adicionales de Seguridad -->
      <h2 class="mb-4 text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300">
          Medidas Adicionales de Seguridad y Prevención de Fraudes
      </h2>
      <h3 class="mb-6 !text-base text-center text-gray-700 dark:text-gray-300 font-poppins">
          Métodos Avanzados y Recursos para Protegerse contra el Fraude
      </h3>
    
  
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <!-- Tarjeta 1: Transacciones Digitales -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-lock" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Medidas de Seguridad para Transacciones Digitales
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Las transacciones digitales son vulnerables a fraudes. Implementa estas medidas:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Verificación de Recipientes:</strong> Confirma siempre la dirección del destinatario.</li>
                  <li><strong>Autenticación Multifactor:</strong> Usa 2FA para proteger tus cuentas.</li>
                  <li><strong>Monitoreo en Tiempo Real:</strong> Detecta actividades sospechosas al instante.</li>
                  <li><strong>Biometría:</strong> Huellas dactilares o reconocimiento facial.</li>
                  <li><strong>Verificación de QR Codes:</strong> Escanea solo códigos válidos.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 2: Auditorías y Control Interno -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-chart-bar" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Auditorías y Control Interno
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Auditorías y controles internos son esenciales para prevenir fraudes:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Controles Internos Robustos:</strong> Segrega responsabilidades y restringe accesos.</li>
                  <li><strong>Auditorías Regulares:</strong> Identifica desviaciones y actividades sospechosas.</li>
                  <li><strong>Plan de Respuesta a Fraudes:</strong> Actúa rápido ante incidentes.</li>
                  <li><strong>Soluciones Tecnológicas:</strong> KYC, AML y KYB.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 3: Educación Continua -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-university" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Educación Continua en Fraude
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Capacitación constante para empleados y clientes:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Capacitación en Fraude:</strong> Talleres y guías prácticas.</li>
                  <li><strong>Recursos Educativos:</strong> Manuales y materiales en línea.</li>
                  <li><strong>Seminarios:</strong> Actualización en técnicas de fraude.</li>
                  <li><strong>Certificaciones:</strong> Especialización en prevención.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 4: Seguridad en Línea -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-credit-card" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Seguridad en Transacciones en Línea
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Protege tus transacciones en línea con estas medidas:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Métodos de Pago Seguros:</strong> Tarjetas con protección o servicios confiables.</li>
                  <li><strong>Monitoreo en Tiempo Real:</strong> Alertas instantáneas.</li>
                  <li><strong>Autenticación Adicional:</strong> Verified by Visa o SecureCode.</li>
                  <li><strong>Límites de Gasto:</strong> Configura límites en tu banca móvil.</li>
              </ul>
          </div>
      </div>
  </section>
  
  <!-- Sección 2: Avances en Prevención -->
  <section class="container px-4 py-8 mx-auto">
      <h2 class="mb-4 text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300">
          Avances en Prevención y Detección de Fraudes
      </h2>
      <h3 class="mb-6 text-xl text-center text-gray-700 dark:text-gray-300">
          Tecnologías y Tendencias en la Lucha contra el Fraude
      </h3>
      <h4 class="mb-8 text-lg text-center text-gray-600 dark:text-gray-400">
          Exploramos tecnologías como IA, monitoreo en tiempo real y su implementación en negocios.
      </h4>
  
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <!-- Tarjeta 1: Monitoreo en Tiempo Real -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-chart-line" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Monitoreo en Tiempo Real
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Detecta y bloquea transacciones sospechosas al instante:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Beneficios:</strong> Prevención de fraudes y cumplimiento normativo.</li>
                  <li><strong>IA:</strong> Análisis de patrones complejos.</li>
                  <li><strong>Desafíos:</strong> Falsos positivos y adaptación a regulaciones.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 2: IA y Aprendizaje Automático -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-robot" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  IA y Aprendizaje Automático
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Técnicas avanzadas para detectar fraudes:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Aprendizaje Supervisado:</strong> Predicción de transacciones fraudulentas.</li>
                  <li><strong>Detección de Anomalías:</strong> Identificación de patrones atípicos.</li>
                  <li><strong>Redes Neuronales:</strong> Detección de fraudes complejos.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 3: Implementación de Sistemas -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-cogs" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Implementación de Sistemas
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Sistemas robustos para prevención de delitos financieros:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Alertas en Tiempo Real:</strong> Respuesta inmediata.</li>
                  <li><strong>IA/ML:</strong> Detección inteligente y reducción de falsos positivos.</li>
                  <li><strong>Reglas Personalizables:</strong> Ajuste por tipo de transacción.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 4: Protección para Empresas -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-building" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Protección contra Fraudes en Empresas
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Medidas clave para proteger tu negocio:
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Controles Internos:</strong> Segregación de responsabilidades.</li>
                  <li><strong>Auditorías:</strong> Identificación de desviaciones.</li>
                  <li><strong>Educación:</strong> Capacitación constante.</li>
                  <li><strong>Tecnología:</strong> KYC, AML y KYB.</li>
              </ul>
          </div>
      </div>
  </section>
  
  <!-- Sección 3: Avances en Seguridad Digital -->
  <section class="container px-4 py-8 mx-auto">
      <h2 class="mb-4 text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300">
          Avances en Seguridad Digital
      </h2>
      <h3 class="mb-6 text-xl text-center text-gray-700 dark:text-gray-300">
          Nuevas Tendencias y Prácticas
      </h3>
      <h4 class="mb-8 text-lg text-center text-gray-600 dark:text-gray-400">
          Autenticación biométrica, IA y monitoreo en tiempo real para combatir el fraude.
      </h4>
  
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <!-- Tarjeta 1: Autenticación Biométrica -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-fingerprint" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Autenticación Biométrica
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Mayor seguridad con huellas dactilares o reconocimiento facial.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Beneficios:</strong> Reducción de fraudes y conveniencia.</li>
                  <li><strong>Aplicaciones:</strong> Banca móvil y acceso a dispositivos.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 2: IA para Detección -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-robot" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  IA para Detección de Fraudes
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Análisis de patrones en tiempo real para prevenir fraudes.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Beneficios:</strong> Detección temprana y análisis predictivo.</li>
                  <li><strong>Aplicaciones:</strong> Banca en línea y comercio electrónico.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 3: Monitoreo en Tiempo Real -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-shield-alt" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Monitoreo de Seguridad
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Respuesta inmediata a amenazas en redes y sistemas.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Beneficios:</strong> Reducción de riesgos y mejora en seguridad.</li>
                  <li><strong>Aplicaciones:</strong> Centros de datos y servicios en la nube.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 4: Cifrado de Datos -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-lock" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Cifrado de Datos
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Protege información sensible con cifrado avanzado.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Beneficios:</strong> Cumplimiento normativo y prevención de accesos no autorizados.</li>
                  <li><strong>Aplicaciones:</strong> Comunicaciones y almacenamiento en la nube.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 5: Educación en Seguridad -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-graduation-cap" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Educación y Concienciación
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Capacitación para reducir errores humanos y fraudes.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Beneficios:</strong> Mejora en la cultura de seguridad.</li>
                  <li><strong>Aplicaciones:</strong> Programas de formación y políticas de seguridad.</li>
              </ul>
          </div>
  
          <!-- Tarjeta 6: Seguridad en la Nube -->
          <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
              <i class="mb-4 text-4xl text-indigo-500 fas fa-cloud" aria-hidden="true"></i>
              <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                  Seguridad en la Nube
              </h3>
              <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                  Protege datos y aplicaciones en entornos cloud.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Beneficios:</strong> Cumplimiento y protección de datos.</li>
                  <li><strong>Aplicaciones:</strong> Almacenamiento y plataformas SaaS.</li>
              </ul>
          </div>
      </div>
  </section>
  
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
  import {
    IonPage,
    IonContent,
    useIonRouter,
    onIonViewWillLeave,
    onIonViewWillEnter,
  } from '@ionic/vue';
  import 'animate.css';
  import { ref } from 'vue';
const isPage = ref(false)

onIonViewWillEnter(() => {
    isPage.value = true
})

onIonViewWillLeave(() => {
    isPage.value = false
})

const router = useIonRouter();
const goToLocation = (locationParam:string) => {
    router.navigate(locationParam, 'back')
}
  </script>
  
  <style scoped>
  /* Animación de entrada */

  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Transición para el modo oscuro */
  ion-content {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .my-element {
    --animate-duration: 0.5s;
  }
  </style>
  