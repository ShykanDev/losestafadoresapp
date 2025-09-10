import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

export const useEdgeToEdge = () => {
const isNativePlattform = () =>  Capacitor.isNativePlatform()

const startStatusBar = async() => {
    if(isNativePlattform()) await EdgeToEdge.enable();
}
const endStatusBar = async() => {
  if (isNativePlattform()) await EdgeToEdge.disable()
}

return {
  startStatusBar,
  endStatusBar,
}
}
