<template>
    <div class="p-4 mx-auto">
        <!-- Contenedor padre con flex y justify-around -->
        <div class="flex overflow-y-auto gap-6 justify-around rounded-2xl h-[50vh] md:flex-row dark:bg-gray-900 ion-padding">
            <!-- Contenedor de noticias (izquierda) -->
            <div class="flex overflow-y-scroll flex-col flex-1 gap-4 bg-gradient-to-br rounded-2xl dark:from-black dark:to-indigo-900">
                <h3 class="flex sticky -top-0.5 z-10 gap-2 justify-center items-center mb-2 w-full text-base font-semibold text-center rounded-b-2xl backdrop-blur-xl dark:text-gray-200 text-slate-600 font-redHat">Noticias <v-icon class="inline" name="la-newspaper" scale="1" />    </h3>
                <div v-for="news in newsData" :key="news.title">
                    <NewsCard   :title="news.title" :link="news.link" :image="news.image" :description="news.description" :source="news.source" :date="news.date" :country="news.country" :flag="news.flag" />
                </div>
            </div>
        </div>

        <!-- Disclaimer -->
        <div class="p-4 mt-6 rounded-lg border border-indigo-900 bg-gray-950">
            <p class="text-xs text-center text-gray-600 dark:text-gray-400">
                <strong>Disclaimer:</strong> El contenido mostrado en esta sección proviene de fuentes externas y no es
                responsabilidad de <a href="#" class="text-blue-600 hover:underline">www.losestafadores.com</a>. Al
                hacer clic en los enlaces, usted abandonará este sitio web y accederá a páginas de terceros, por lo que
                no nos hacemos responsables del contenido, privacidad o prácticas de dichos sitios.
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NewsCard from './NewsCard.vue';

interface Inew{
    title: string;
    link: string;
    image: string;
    description: string;
    source: string;
    date: string;
    country: string;
    flag: string;
}
const newsData: Inew[] = [
    {
        "title": "Escándalo en Argentina: Javier Milei y la estafa con la criptomoneda $Libra",
        "link": "https://www.bbc.com/mundo/articles/cqly5xvx1l9o",
        "image": "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/b26f/live/b4018260-f391-11ef-b176-3b0103bf5e53.jpg.webp",
        "description": "El presidente argentino Javier Milei promovió la criptomoneda $Libra, que se desplomó horas después de su lanzamiento. Expertos señalan que el mercado de criptomonedas está lleno de esquemas Ponzi y estafas piramidales, afectando a miles de inversores.",
        "source": "BBC News Mundo",
        "date": "25 febrero 2025",
        "country": "Argentina",
        "flag": "fi-ar"
    },
    {
        "title": "Capturan a dos personas por estafar a turistas mexicanos en Cartagena",
        "link": "https://elpais.com/america-colombia/2025-08-19/capturadas-dos-personas-senaladas-de-retener-y-estafar-en-altamar-a-dos-turistas-mexicanos-en-cartagena.html",
        "image": "https://imagenes.elpais.com/resizer/v2/J3TIKZCKNJDDBMN6Q6B4KHGWXA.jpg?auth=00f5e6dd7ab9bbc44a4218548a21899155a77dd1f9d2276deb19ceab954427f8&width=1200",
        "description": "Dos turistas mexicanos fueron retenidos y obligados a pagar más de 400 dólares durante un recorrido en lancha desde la isla de Tierra Bomba, Colombia.",
        "source": "El País",
        "date": "19 agosto 2025",
        "country": "Colombia",
        "flag": "fi-co"
    },
    {
        "title": "Detenidos por estafar 19 millones de euros usando inteligencia artificial",
        "link": "https://elpais.com/espana/2025-04-07/detenidas-seis-personas-por-estafar-19-millones-a-mas-de-200-victimas-por-medio-de-inteligencia-artificial.html",
        "image": "https://imagenes.elpais.com/resizer/v2/UDHNRCTPLRFXREUVMYFVZNXYSM.jpg?auth=526ce23c8f286ba4e9865efbda51b86810932a0a593dcdf19900a714f777c74c&width=1200",
        "description": "Seis personas fueron detenidas en España por estafar a más de 200 víctimas utilizando técnicas de suplantación de identidad y deepfake, recuperándose solo el 0.5% del dinero.",
        "source": "El País",
        "date": "7 abril 2025",
        "country": "España",
        "flag": "fi-es"
    },
    {
        "title": "Estudio revela que 6 de cada 10 chilenos han sido víctimas de estafas financieras en redes sociales",
        "link": "https://www.emol.com/noticias/Economia/2025/06/04/1168317/estafas-redes-sociales-estudio.html",
        "image": "https://static.emol.cl/emol50/Fotos/2025/06/04/file_20250604141130.jpg",
        "description": "Un informe en Chile muestra que el 60.1% de los encuestados ha sido víctima de estafas financieras a través de redes sociales, utilizando videos falsos, IA y suplantación de figuras públicas.",
        "source": "Emol",
        "date": "4 junio 2025",
        "country": "Chile",
        "flag": "fi-cl"
    },
    {
        "title": "Chile implementa nuevo sistema para alertar sobre estafas en comunicaciones comerciales",
        "link": "https://elpais.com/chile/actualidad/",
        "image": "https://imagenes.elpais.com/resizer/v2/BVDBGWSU7VM7BA427MOEFFGPSU.jpg?auth=62e09ba85a16b016aea33aa870760cb46007ff6143ee1be9779f8c92c74d3543&width=1200&height=900&smart=true",
        "description": "El gobierno chileno lanzó un sistema para identificar y alertar a los ciudadanos sobre comunicaciones fraudulentas, especialmente en el ámbito comercial.",
        "source": "El País Chile",
        "date": "20 agosto 2025",
        "country": "Chile",
        "flag": "fi-cl"
    }]

</script>

<style scoped></style>