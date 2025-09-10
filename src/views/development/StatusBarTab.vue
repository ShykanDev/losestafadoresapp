<template>
    <ion-page>
        <ion-content>

                <h3>StatusBarTab</h3>
                <ion-button @click="setStatusBarStyle('dark')">Set Dark StatusBar</ion-button>
                <ion-button @click="setStatusBarStyle('light')">Set Light StatusBar</ion-button>
                <ion-button @click="showStatusBar">Show StatusBar</ion-button>
                <ion-button @click="hideStatusBar">Hide StatusBar</ion-button>
                <ion-button @click="onStatusBar">On StatusBar</ion-button>
                <ion-button @click="offStatusBar">Off StatusBar</ion-button>
                <input type="color" v-model="colorParam" @change="setStatusBarColor()">
                <label for="colorParam">Color</label>
                <p>Current Color: {{ colorParam }}</p>
                <ion-button @click="setStatusBarColor()">Set StatusBar Color</ion-button>
                <small>Version: 0.0.3</small>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { StatusBar, Style } from '@capacitor/status-bar';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { Capacitor } from '@capacitor/core';
import { ref } from 'vue';

const colorParam = ref('');

const setStatusBarStyle = async(styleParam: 'dark' | 'light') => {
    if(Capacitor.isNativePlatform()) {
        await StatusBar.setStyle({style: styleParam === 'dark' ? Style.Dark : Style.Light})
    }
}

const showStatusBar = async() => {
    if(Capacitor.isNativePlatform()) {
        await StatusBar.show();
    }
}

const hideStatusBar = async() => {
    if(Capacitor.isNativePlatform()) {
        await StatusBar.hide();
    }
}

const setStatusBarColor = async() => {
    if(Capacitor.isNativePlatform()) {
        EdgeToEdge.setBackgroundColor({color: colorParam.value})
    }
}

const onStatusBar = async() => {
    if(Capacitor.isNativePlatform()) {
        await EdgeToEdge.enable();
    }
}

const offStatusBar = async() => {
    if(Capacitor.isNativePlatform()) {
        await EdgeToEdge.disable();
    }
}



</script>

<style scoped>

</style>