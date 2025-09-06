<template>
  <ion-page>
      <ion-content :fullscreen="true" class="animate-fade-up animate-duration-[.19s]">
        <ion-router-link @click="goToLocation('/tabsAlpha')" v-if="isPage" class="flex z-40 absolute cursor-pointer top-3 left-3 gap-2 items-end px-2 py-1 bg-white animate__slideInRight animate__animated !animate-duration-[.9s] dark:bg-gray-900 rounded-4xl dark:shadow-sm"><v-icon name="io-caret-back-outline" scale="1.2"/><p class="font-poppins">volver</p></ion-router-link>

        <section class="container px-4 py-8 mx-auto animate-fade-up animate-duration-[.09s]">
    <h2 class="mb-4 text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300">
        Cómo Evitar Estafas
    </h2>
    <h3 class="mb-8 text-xl text-center text-gray-700 dark:text-gray-300">
        Consejos prácticos para protegerte de las estafas más comunes
    </h3>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Verificar la Autenticidad -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-shield-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Autenticidad
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Antes de compartir información o realizar una transacción, verifica la autenticidad de la empresa o persona. Busca reseñas y opiniones en línea.
            </p>
        </div>

        <!-- Usar Contraseñas Seguras -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-lock" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Usar Contraseñas Seguras
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Crea contraseñas únicas y fuertes, combinando letras, números y símbolos. Usa un gestor de contraseñas si es necesario.
            </p>
        </div>

        <!-- Activar la Autenticación de Dos Factores -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-key" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Activar la Autenticación de Dos Factores
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Activa 2FA en todas tus cuentas para añadir una capa extra de seguridad.
            </p>
        </div>

        <!-- No Hacer Clic en Enlaces Sospechosos -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-mouse-pointer" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Hacer Clic en Enlaces Sospechosos
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Evita hacer clic en enlaces de correos o mensajes de remitentes desconocidos.
            </p>
        </div>

        <!-- Mantener el Software Actualizado -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-sync-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Mantener el Software Actualizado
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Actualiza siempre tu sistema operativo, navegador y aplicaciones a las últimas versiones.
            </p>
        </div>

        <!-- Utilizar Software Antivirus -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-virus" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar Software Antivirus
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Instala un antivirus confiable y manténlo actualizado para protegerte de malware.
            </p>
        </div>

        <!-- Desconfiar de Ofertas Demasiado Buenas -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-tags" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Desconfiar de Ofertas Demasiado Buenas
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Si una oferta parece demasiado buena para ser verdad, investiga antes de comprometerte.
            </p>
        </div>

        <!-- No Proporcionar Información Personal -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-user-secret" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Proporcionar Información Personal
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                No compartas datos sensibles como contraseñas o números de seguro social a menos que sea seguro y necesario.
            </p>
        </div>

        <!-- Verificar la URL del Sitio Web -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-globe" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la URL del Sitio Web
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Antes de ingresar información, verifica que la URL sea segura (busca "https" y el candado en la barra de direcciones).
            </p>
        </div>

        <!-- Leer los Términos y Condiciones -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-file-contract" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Leer los Términos y Condiciones
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Lee detenidamente los términos y condiciones antes de aceptar cualquier acuerdo o compra.
            </p>
        </div>

        <!-- Utilizar Tarjetas de Crédito en Línea -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-credit-card" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar Tarjetas de Crédito en Línea
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Las tarjetas de crédito ofrecen mayor protección contra fraudes que las de débito.
            </p>
        </div>

        <!-- Revisar los Extractos Bancarios -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-file-invoice-dollar" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Revisar los Extractos Bancarios
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Revisa regularmente tus extractos para detectar cargos no autorizados o actividades sospechosas.
            </p>
        </div>

        <!-- No Realizar Pagos por Adelantado -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-hand-holding-usd" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Realizar Pagos por Adelantado
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Desconfía de solicitudes de pago por adelantado, especialmente si prometen premios o servicios.
            </p>
        </div>

        <!-- Verificar la Identidad del Vendedor -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-id-card" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Identidad del Vendedor
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Antes de comprar, verifica que el vendedor sea confiable y legítimo.
            </p>
        </div>

        <!-- Utilizar Redes Wi-Fi Seguras -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-wifi" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar Redes Wi-Fi Seguras
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Evita transacciones financieras en redes Wi-Fi públicas o no seguras.
            </p>
        </div>

        <!-- Configurar Alertas de Seguridad -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-bell" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Configurar Alertas de Seguridad
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Configura alertas en tus cuentas bancarias y de correo para recibir notificaciones de actividades sospechosas.
            </p>
        </div>

        <!-- No Descargar Archivos Adjuntos Sospechosos -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-file-download" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Descargar Archivos Adjuntos Sospechosos
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Evita descargar archivos de correos o mensajes de remitentes desconocidos.
            </p>
        </div>

        <!-- Utilizar Navegadores Seguros -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-browser" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar Navegadores Seguros
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Usa navegadores actualizados y seguros para proteger tu información.
            </p>
        </div>

        <!-- No Compartir Contraseñas -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-lock" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Compartir Contraseñas
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Nunca compartas tus contraseñas y evita escribirlas en lugares visibles.
            </p>
        </div>

        <!-- Verificar la Legitimidad de las Organizaciones Benéficas -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-hand-holding-heart" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Legitimidad de las Organizaciones Benéficas
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Antes de donar, verifica que la organización sea legítima y que tu dinero llegue a los beneficiarios.
            </p>
        </div>

        <!-- No Responder a Llamadas Sospechosas -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-phone-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Responder a Llamadas Sospechosas
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Si recibes una llamada sospechosa, cuelga y verifica la identidad del llamante antes de compartir información.
            </p>
        </div>

        <!-- Utilizar un Gestor de Contraseñas -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-key" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar un Gestor de Contraseñas
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Usa un gestor de contraseñas para almacenar y gestionar tus contraseñas de forma segura.
            </p>
        </div>

        <!-- No Proporcionar Acceso Remoto a Desconocidos -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-desktop" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Proporcionar Acceso Remoto a Desconocidos
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                No permitas el acceso remoto a tu dispositivo a personas desconocidas o no confiables.
            </p>
        </div>

        <!-- Verificar la Licencia de los Profesionales -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-id-badge" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Licencia de los Profesionales
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Antes de contratar a un profesional, verifica sus credenciales y licencia.
            </p>
        </div>

        <!-- No Realizar Compras en Sitios Web No Seguros -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-shopping-cart" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Realizar Compras en Sitios Web No Seguros
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Evita comprar en sitios sin cifrado SSL o medidas de seguridad adecuadas.
            </p>
        </div>

        <!-- Utilizar una VPN -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-shield-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar una VPN
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Usa una VPN para proteger tu privacidad, especialmente en redes Wi-Fi públicas.
            </p>
        </div>

        <!-- No Descargar Aplicaciones de Fuentes No Confiables -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-mobile-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Descargar Aplicaciones de Fuentes No Confiables
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Descarga aplicaciones solo de tiendas oficiales o fuentes confiables.
            </p>
        </div>

        <!-- Verificar la Política de Privacidad -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-file-contract" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Política de Privacidad
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Lee la política de privacidad antes de compartir información personal en un sitio web o aplicación.
            </p>
        </div>

        <!-- No Compartir Información Personal en Redes Sociales -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-share-square" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Compartir Información Personal en Redes Sociales
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Evita compartir información sensible en redes sociales para prevenir estafas.
            </p>
        </div>

        <!-- Utilizar un Firewall -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-fire-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar un Firewall
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Configura un firewall para proteger tu red y dispositivos de accesos no autorizados.
            </p>
        </div>

        <!-- No Responder a Mensajes de Texto Sospechosos -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-sms" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Responder a Mensajes de Texto Sospechosos
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                No respondas ni hagas clic en enlaces de mensajes sospechosos. Verifica la identidad del remitente.
            </p>
        </div>

        <!-- Verificar la Autenticidad de los Correos Electrónicos -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-envelope-open-text" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Autenticidad de los Correos Electrónicos
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Antes de interactuar con un correo, verifica la autenticidad del remitente y el contenido.
            </p>
        </div>

        <!-- No Proporcionar Información Personal por Teléfono -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-phone-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Proporcionar Información Personal por Teléfono
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                No compartas información personal o financiera por teléfono a menos que estés seguro de la identidad del llamante.
            </p>
        </div>

        <!-- Utilizar Tarjetas de Regalo con Cuidado -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-gift" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar Tarjetas de Regalo con Cuidado
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                No compres tarjetas de regalo para desconocidos y no compartas sus códigos.
            </p>
        </div>

        <!-- Verificar la Autenticidad de las Ofertas de Empleo -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-briefcase" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Autenticidad de las Ofertas de Empleo
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Investiga la empresa antes de aceptar una oferta de empleo para evitar estafas.
            </p>
        </div>

        <!-- No Realizar Inversiones sin Investigar -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-chart-line" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Realizar Inversiones sin Investigar
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Investiga a fondo cualquier oportunidad de inversión antes de comprometerte.
            </p>
        </div>

        <!-- Verificar la Autenticidad de las Organizaciones de Caridad -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-hand-holding-heart" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Verificar la Autenticidad de las Organizaciones de Caridad
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Antes de donar, verifica que la organización de caridad sea legítima y transparente.
            </p>
        </div>

        <!-- No Proporcionar Información Personal en Encuestas Sospechosas -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-clipboard-list" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                No Proporcionar Información Personal en Encuestas Sospechosas
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                No compartas información personal en encuestas no solicitadas o sospechosas.
            </p>
        </div>

        <!-- Utilizar Contraseñas Diferentes para Cada Cuenta -->
        <div class="p-6 bg-white rounded-xl border border-indigo-400 shadow-lg dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-lock" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                Utilizar Contraseñas Diferentes para Cada Cuenta
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Usa contraseñas diferentes para cada cuenta para evitar que un incidente comprometa todas tus cuentas.
            </p>
        </div>
    </div>
</section>

      </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, onIonViewWillEnter, onIonViewWillLeave, useIonRouter } from '@ionic/vue';
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

<style scoped></style>