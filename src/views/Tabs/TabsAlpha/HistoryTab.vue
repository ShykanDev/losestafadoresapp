<template>
  <ion-page>
    <ion-content class="bg-cyan-700 ion-padding dark:bg-gray-800">
      <section class="px-4 py-12 bg-gray-100 rounded-2xl dark:bg-gray-800">
        <div class="mx-auto max-w-7xl">
          <!-- Encabezado -->
          <div class="mb-12 text-center">
            <h2
              class="mb-4 !text-3xl font-bold text-gray-900 font-poppins md:text-4xl  dark:bg-gray-800 dark:text-indigo-400">
              Historia de los Estafadores
            </h2>
            <h3 class="mb-6 text-xl text-gray-600 md:text-2xl dark:text-white dark:bg-gray-800">
              Un recorrido por el origen y evolución de las estafas a lo largo del tiempo
            </h3>
            <div class="mx-auto max-w-3xl prose-lg">
              <p class="leading-relaxed text-gray-700 dark:text-white">
                Desde los albores de la civilización, los estafadores han sido una constante en la historia de la
                humanidad. Su capacidad para adaptarse a los cambios sociales, económicos y tecnológicos los ha
                convertido en una amenaza persistente.
              </p>
            </div>
          </div>

          <!-- Cards -->
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Card 1: Origen -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/papiro.jpg" alt="Papiro egipcio antiguo"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="timeOutline" class="mr-3 text-3xl text-blue-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Origen de las
                    Estafas</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  En el antiguo Egipto se registraron fraudes con tierras y documentos. Los romanos enfrentaron estafas
                  financieras donde banqueros manipulaban depósitos. Durante la Edad Media, alquimistas estafaban
                  prometiendo crear oro, sentando bases para esquemas Ponzi modernos.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 2: Evolución -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/gold.jpg" alt="Evolución tecnológica de estafas"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="syncOutline" class="mr-3 text-3xl text-green-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Evolución de
                    Métodos</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  En el siglo XIX el "salting" engañaba buscadores de oro. El siglo XX trajo timos telefónicos. La era
                  digital popularizó phishing y ransomware. Actualmente, deepfakes con IA permiten suplantaciones
                  hiperrealistas para extorsiones.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 3: Impacto Social -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/dating.jpg" alt="Impacto en relaciones sociales"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="peopleOutline" class="mr-3 text-3xl text-red-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Impacto
                    Social</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Las estafas románticas en línea dejan trauma emocional y desconfianza. Grupos vulnerables como
                  ancianos son objetivos frecuentes. El 68% de víctimas reporta ansiedad persistente tras ser estafadas
                  según estudios psicológicos.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Añade el resto de las cards siguiendo el mismo patrón -->
            <!-- Card 4: Impacto Económico -->
            <!-- Card 5: Era Digital -->
            <!-- ... -->
            <!-- Card 5: Era Digital -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/digitaVirus.jpg" alt="Tecnología y ciberamenazas"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="laptopOutline" class="mr-3 text-3xl text-indigo-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Era Digital</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Phishing afecta al 94% de organizaciones (2023). Ransomware crece un 62% anual. Deepfakes: +900% de
                  aumento en casos desde 2020. Los cibercriminales usan IA para perfeccionar sus ataques.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 6: Conclusión -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/study.jpg" alt="Prevención y concienciación"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="bulbOutline" class="mr-3 text-3xl text-yellow-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Conclusión</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  La lucha contra estafas requiere educación continua: 70% de reducción en víctimas con programas de
                  concienciación. Colaboración internacional y regulaciones más estrictas son clave para el futuro
                  digital seguro.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 7: Estafas Románticas -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/datingV2.jpg" alt="Estafas románticas en línea"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="heartOutline" class="mr-3 text-3xl text-pink-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Estafas
                    Románticas</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  En 2022, las estafas románticas generaron pérdidas de $1.3 mil millones en EE.UU. Los estafadores
                  crean perfiles falsos en apps de citas, ganan confianza y luego piden dinero para "emergencias".
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 8: Fraudes Corporativos -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/scam.jpg" alt="Fraudes en empresas"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="businessOutline" class="mr-3 text-3xl text-teal-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Fraudes
                    Corporativos</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  El 43% de empresas medianas reportaron fraudes internos en 2023. Tácticas comunes incluyen
                  falsificación de facturas, malversación de fondos y sobornos.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 9: Estafas a Ancianos -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/elder.jpg" alt="Protección a adultos mayores"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="shieldHalfOutline" class="mr-3 text-3xl text-orange-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Estafas a
                    Ancianos</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Los mayores de 60 años pierden $3 mil millones anuales en estafas telefónicas y online. Tácticas
                  comunes: premios falsos, soporte técnico falso y fraudes de inversión.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 10: Criptoestafas -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/money_bitcoin.jpg" alt="Estafas con criptomonedas"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="logoBitcoin" class="mr-3 text-3xl text-yellow-500"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Criptoestafas</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  En 2023, se reportaron $4.3 mil millones en pérdidas por fraudes con criptomonedas. Incluyen esquemas
                  Ponzi, wallets falsos y phishing dirigido a exchanges.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 11: Deepfakes -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/aideep.jpg" alt="Tecnología deepfake"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="peopleOutline" class="mr-3 text-3xl text-blue-500"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Deepfakes</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Los deepfakes aumentaron un 900% desde 2020. Se usan para suplantar CEOs en videollamadas, extorsionar
                  con videos falsos y manipular mercados financieros.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 12: Prevención -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/talking.png" alt="Medidas de prevención"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="shieldCheckmarkOutline" class="mr-3 text-3xl text-green-600"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Prevención</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Educación reduce estafas en un 70%. Herramientas clave: verificación en 2 pasos, IA anti-phishing y
                  programas de concienciación para grupos vulnerables.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 13: Estafas en Redes Sociales -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/fakeSocialMedia.jpg" alt="Estafas en redes sociales"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="logoInstagram" class="mr-3 text-3xl text-rose-400"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Estafas en Redes
                    Sociales</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  En 2023, el 60% de las estafas digitales comenzaron en plataformas como Instagram y Facebook. Incluyen
                  perfiles falsos, sorteos fraudulentos y ventas de productos inexistentes.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 14: Estafas de Inversión -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/invest.jpg" alt="Fraudes de inversión"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="trendingUpOutline" class="mr-3 text-3xl text-green-500"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Estafas de
                    Inversión</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Los fraudes de inversión generaron $4.6 mil millones en pérdidas en 2022. Incluyen esquemas Ponzi,
                  forex falsos y ofertas de criptomonedas fraudulentas.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 15: Estafas de Soporte Técnico -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/fakeSupport.jpg" alt="Soporte técnico falso"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="headsetOutline" class="mr-3 text-3xl text-purple-500"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Soporte Técnico
                    Falso</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Los estafadores se hacen pasar por empleados de Microsoft o Apple, alegando problemas en tu
                  computadora. En 2023, este fraude afectó a 1 de cada 5 usuarios de tecnología.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 16: Estafas de Phishing -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/phishing.jpg" alt="Correos de phishing"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="mailOutline" class="mr-3 text-3xl text-red-500"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Phishing</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  El 94% de los ciberataques comienzan con phishing. Los correos falsos de bancos y servicios populares
                  son la táctica más usada para robar credenciales.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 17: Estafas de Trabajo desde Casa -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/fakeJobs.jpg" alt="Ofertas de trabajo falsas"
                  class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="laptopOutline" class="mr-3 text-3xl text-indigo-500"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Trabajos
                    Falsos</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  Ofertas de empleo falsas engañan a víctimas para pagar "tarifas de inscripción" o compartir datos
                  personales. En 2023, se reportaron $2 mil millones en pérdidas.
                </p>
              </ion-card-content>
            </ion-card>

            <!-- Card 18: Estafas de Premios y Loterías -->
            <ion-card class="transition-shadow hover:shadow-xl">
              <div class="mb-4 w-full h-48 bg-gray-200 rounded-lg">
                <img src="@/assets/img/prizes.jpg" alt="Premios falsos" class="object-cover w-full h-full rounded-lg" />
              </div>
              <ion-card-header>
                <div class="flex items-center mb-4">
                  <ion-icon :icon="trophyOutline" class="mr-3 text-3xl text-yellow-400"></ion-icon>
                  <ion-card-title class="text-xl font-bold text-gray-900 dark:text-white">Premios
                    Falsos</ion-card-title>
                </div>
              </ion-card-header>
              <ion-card-content>
                <p class="mb-4 leading-relaxed text-gray-700 dark:text-white">
                  "¡Ganaste un premio!" es la táctica clásica. Las víctimas deben pagar "impuestos" o "gastos de envío"
                  para reclamar premios que nunca llegan.
                </p>
              </ion-card-content>
            </ion-card>

          </div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonPage,


} from "@ionic/vue";
import {
  timeOutline,
  syncOutline,
  peopleOutline,
  laptopOutline,
  bulbOutline,
  businessOutline,
  heartOutline,
  trophyOutline,
  shieldHalfOutline,
  logoBitcoin,
  shieldCheckmarkOutline,
  logoInstagram,
  trendingUpOutline,
  headsetOutline,
  mailOutline,

  // Importa los iconos que necesites
} from "ionicons/icons";

</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí si es necesario */
.animate-fade {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>