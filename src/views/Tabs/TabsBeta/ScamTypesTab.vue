<template>
    <ion-page>
      <ion-content :fullscreen="true" class="animate-fade-up animate-duration-[.19s]">
        <article v-if="isPage" class="flex absolute top-3 left-3 gap-2 items-end px-2 py-1 bg-white animate__slideInLeft animate__animated !animate-duration-[.9s] dark:bg-gray-900 rounded-4xl dark:shadow-sm"><v-icon name="io-caret-back-outline" scale="1.2"/><p class="font-poppins">volver</p></article>

        <section class="container px-4 py-8 mx-auto animate-fade-right animate-duration-[.19s]">
    <h2 class="mb-4 text-3xl font-bold text-center text-indigo-800 dark:text-indigo-300">
        Tipos Comunes de Estafas
    </h2>
    <h3 class="mb-8 text-xl text-center text-gray-700 dark:text-gray-300">
        Conoce las estafas más frecuentes y cómo protegerte
    </h3>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Phishing -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-envelope-open-text" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Phishing</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Los estafadores se hacen pasar por entidades confiables para robar información personal o financiera mediante correos o mensajes falsos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> No hagas clic en enlaces sospechosos y verifica siempre la autenticidad del remitente.
            </p>
        </div>

        <!-- Vishing -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-phone-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Vishing</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Llamadas telefónicas fraudulentas donde los estafadores se hacen pasar por representantes de bancos o instituciones para obtener tus datos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Nunca compartas información personal por teléfono y cuelga si sospechas.
            </p>
        </div>

        <!-- Smishing -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-sms" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Smishing</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Mensajes de texto (SMS) con enlaces maliciosos para robar información personal o financiera.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> No abras enlaces de remitentes desconocidos.
            </p>
        </div>

        <!-- Estafas de Inversiones -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-chart-line" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Promesas de altos rendimientos con poco riesgo, generalmente esquemas Ponzi o piramidales.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga antes de invertir y desconfía de ofertas irreales.
            </p>
        </div>

        <!-- Estafas de Lotería -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-ticket-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Lotería</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Te informan que ganaste un premio, pero piden un pago por adelantado para "liberarlo".
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Nunca pagues por adelantado para recibir un premio.
            </p>
        </div>

        <!-- Estafas de Empleo -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-briefcase" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Empleo</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Ofertas de trabajo falsas que piden información personal o dinero por adelantado.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga la empresa y desconfía de pagos iniciales.
            </p>
        </div>

        <!-- Estafas de Alquiler -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-home" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Alquiler</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Anuncios de propiedades falsas o inexistentes para obtener depósitos o pagos por adelantado.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la propiedad y evita pagar sin contrato.
            </p>
        </div>

        <!-- Estafas de Citas en Línea -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-heart" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Citas en Línea</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Perfiles falsos que buscan establecer relaciones para luego pedir dinero o información personal.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la identidad de la persona y no envíes dinero.
            </p>
        </div>

        <!-- Estafas de Soporte Técnico -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-laptop" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Soporte Técnico</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Llamadas o mensajes falsos sobre problemas en tu dispositivo, pidiendo acceso remoto o dinero.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> No permitas acceso remoto a desconocidos.
            </p>
        </div>

        <!-- Estafas de Compras en Línea -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-shopping-cart" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Compras en Línea</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Tiendas en línea falsas que venden productos inexistentes para robar dinero y datos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Compra solo en sitios confiables y revisa opiniones.
            </p>
        </div>

        <!-- Estafas de Donaciones -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-hand-holding-usd" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Donaciones</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Campañas falsas de donación para causas ficticias o desastres naturales.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga la organización antes de donar.
            </p>
        </div>

        <!-- Estafas de Préstamos -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-money-check-alt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Préstamos</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Ofertas de préstamos rápidos que piden una tarifa por adelantado y luego desaparecen.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Desconfía de préstamos con pagos iniciales.
            </p>
        </div>

        <!-- Estafas de Seguros -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-file-contract" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Seguros</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Venta de pólizas de seguro falsas o inexistentes.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad de la compañía de seguros.
            </p>
        </div>

        <!-- Estafas de Viajes -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-plane" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Viajes</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Ofertas falsas de vacaciones o vuelos que piden pagos por adelantado.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Reserva solo con agencias confiables.
            </p>
        </div>

        <!-- Estafas de Criptomonedas -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-coins" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Criptomonedas</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en criptomonedas con promesas de altos rendimientos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga antes de invertir y desconfía de esquemas piramidales.
            </p>
        </div>

        <!-- Estafas de Recuperación de Dinero -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-money-bill-wave" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Recuperación de Dinero</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Falsos abogados o agencias que prometen recuperar fondos perdidos a cambio de una tarifa.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Desconfía de servicios que pidan pagos por adelantado.
            </p>
        </div>

        <!-- Estafas de Tarjetas de Regalo -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-gift" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Tarjetas de Regalo</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Piden que compres tarjetas de regalo y compartas los códigos para realizar fraudes.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Nunca compres tarjetas de regalo para desconocidos.
            </p>
        </div>

        <!-- Estafas de Impuestos -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-file-invoice-dollar" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Impuestos</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Llamadas o mensajes falsos de agentes del gobierno exigiendo pagos inmediatos de impuestos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad de la solicitud.
            </p>
        </div>

        <!-- Estafas de Servicios Públicos -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-bolt" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Servicios Públicos</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Amenazas de cortar el servicio si no se realiza un pago inmediato.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la autenticidad de la solicitud.
            </p>
        </div>

        <!-- Estafas de Inmigración -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-passport" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inmigración</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Servicios falsos de inmigración que piden pagos por adelantado.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Usa solo servicios autorizados.
            </p>
        </div>

        <!-- Estafas de Salud -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-heartbeat" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Salud</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Productos o tratamientos falsos que prometen curas milagrosas.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Consulta siempre a profesionales de la salud.
            </p>
        </div>

        <!-- Estafas de Suscripciones -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-newspaper" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Suscripciones</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Ofertas falsas de suscripciones a revistas o servicios en línea.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad del proveedor.
            </p>
        </div>

        <!-- Estafas de Multinivel (MLM) -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-network-wired" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Multinivel (MLM)</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Esquemas que se enfocan en reclutar miembros en lugar de vender productos reales.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga la empresa y desconfía de promesas de ganancias rápidas.
            </p>
        </div>

        <!-- Estafas de Arrendamiento de Vehículos -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-car" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Arrendamiento de Vehículos</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Ofertas de vehículos en arrendamiento a precios muy bajos que piden depósitos por adelantado.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad de la empresa.
            </p>
        </div>

        <!-- Estafas de Bienes Raíces -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-building" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Bienes Raíces</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Propiedades falsas o inexistentes que piden pagos por adelantado.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la existencia de la propiedad y del vendedor.
            </p>
        </div>

        <!-- Estafas de Préstamos Estudiantiles -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-graduation-cap" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Préstamos Estudiantiles</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Préstamos estudiantiles falsos que piden una tarifa por adelantado.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Usa solo instituciones financieras autorizadas.
            </p>
        </div>

        <!-- Estafas de Seguros de Salud -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-hospital" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Seguros de Salud</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Pólizas de seguro de salud falsas o inexistentes.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad de la compañía.
            </p>
        </div>

        <!-- Estafas de Reparación de Crédito -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-credit-card" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Reparación de Crédito</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Promesas de mejorar tu historial crediticio a cambio de una tarifa.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Desconfía de resultados garantizados.
            </p>
        </div>

        <!-- Estafas de Inversiones en Bienes Raíces -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-home" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Bienes Raíces</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en propiedades que prometen altos retornos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga la legitimidad de la inversión.
            </p>
        </div>

        <!-- Estafas de Inversiones en Oro -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-coins" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Oro</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Ofertas falsas de inversión en oro con promesas de altos rendimientos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga antes de invertir.
            </p>
        </div>

        <!-- Estafas de Inversiones en Petróleo -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-oil-can" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Petróleo</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en petróleo que prometen grandes ganancias.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Desconfía de ofertas irreales.
            </p>
        </div>

        <!-- Estafas de Inversiones en Diamantes -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-gem" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Diamantes</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en diamantes con promesas de altos retornos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad de la oferta.
            </p>
        </div>

        <!-- Estafas de Inversiones en Vino -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-wine-bottle" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Vino</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en vino que prometen altos rendimientos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga la legitimidad de la inversión.
            </p>
        </div>

        <!-- Estafas de Inversiones en Arte -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-palette" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Arte</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en arte con promesas de altos retornos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Desconfía de ofertas demasiado buenas.
            </p>
        </div>

        <!-- Estafas de Inversiones en Forex -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-chart-line" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Forex</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en Forex que prometen ganancias rápidas.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga antes de invertir.
            </p>
        </div>

        <!-- Estafas de Inversiones en Bienes Raíces Internacionales -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-globe" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Bienes Raíces Internacionales</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en propiedades internacionales con promesas de altos rendimientos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad de la oferta.
            </p>
        </div>

        <!-- Estafas de Inversiones en Energías Renovables -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-leaf" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Energías Renovables</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en energías renovables que prometen altos retornos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga la legitimidad de la inversión.
            </p>
        </div>

        <!-- Estafas de Inversiones en Tecnología -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-microchip" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Tecnología</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en tecnología con promesas de grandes ganancias.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Desconfía de ofertas irreales.
            </p>
        </div>

        <!-- Estafas de Inversiones en Startups -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-rocket" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Startups</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en startups que prometen altos rendimientos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga la legitimidad de la empresa.
            </p>
        </div>

        <!-- Estafas de Inversiones en Crowdfunding -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-hand-holding-usd" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Crowdfunding</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Proyectos falsos de crowdfunding que piden inversiones sin entregar resultados.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Verifica la legitimidad del proyecto.
            </p>
        </div>

        <!-- Estafas de Inversiones en Bienes Raíces Comerciales -->
        <div class="p-6 rounded-xl border border-indigo-300 shadow-lg bg-gray- dark:bg-gray-800">
            <i class="mb-4 text-4xl text-indigo-500 fas fa-building" aria-hidden="true"></i>
            <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Estafas de Inversiones en Bienes Raíces Comerciales</h3>
            <p class="mb-3 text-base text-gray-600 dark:text-gray-300">
                Inversiones falsas en propiedades comerciales con promesas de altos retornos.
            </p>
            <p class="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                <strong>Cómo protegerse:</strong> Investiga antes de invertir.
            </p>
        </div>
    </div>
</section>

      </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, onIonViewWillEnter, onIonViewWillLeave } from '@ionic/vue';
import { ref } from 'vue';

const isPage = ref(false)

onIonViewWillEnter(() => {
    isPage.value = true
})

onIonViewWillLeave(() => {
    isPage.value = false
})
</script>

<style scoped>

</style>