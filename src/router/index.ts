import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import TabsAlpha from '@/views/Tabs/TabsAlpha/TabsAlpha.vue';
import TabsBeta from '@/views/Tabs/TabsBeta/TabsBeta.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path:'/tabsAlpha/',
    component: TabsAlpha,
    children:[
      {
        path: '',
        redirect: '/tabsAlpha/historyTab'
      },
      {
        path: 'historyTab',
        name: 'historyTab',
        component: () => import('@/views/Tabs/TabsAlpha/HistoryTab.vue')
      },
      {
        path: 'commonCases',
        name: 'commonCases',
        component: () => import('@/views/Tabs/TabsAlpha/CommonCases.vue')
      },
      {
        path: 'helpTab',
        name: 'helpTab',
        component: () => import('@/views/Tabs/TabsAlpha/HelpTab.vue')
      },
      {
        path: 'contactTab',
        name: 'contactTab',
        component: () => import('@/views/Tabs/TabsAlpha/ContactTab.vue')
      },
    ]
  },
  {
    path:'/tabsBeta/',
    redirect: '/tabsBeta/scamTypesTab',
    component:TabsBeta,
    children:[
      {
        path:'/tabsBeta/scamTypesTab',
        name:'scamTypesTab',
        component: () => import('@/views/Tabs/TabsBeta/ScamTypesTab.vue')
      },
      {
        path:'/tabsBeta/waysToAvoidTab',
        name:'waysToAvoidTab',
        component: () => import('@/views/Tabs/TabsBeta/WaysToAvoidTab.vue')
      },
      {
        path:'/tabsBeta/securityMeasuresTab',
        name:'securityMeasuresTab',
        component: () => import('@/views/Tabs/TabsBeta/SecurityMeasuresTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
