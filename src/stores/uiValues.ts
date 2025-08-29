import { defineStore } from "pinia";

export const uiValues = defineStore('uiVals', {
  state:() => ( {
    mainSectionHeight: 0,
    pageScrolled: false
  }),
  getters:{
    getMainSectionHeight: (state) => state.mainSectionHeight,
    getPageScrolled: (state) => state.pageScrolled
  },
  actions:{
    setMainSectionHeight(height: number){
      this.mainSectionHeight = height;
    },
    setPageScrolled(scrolled: boolean){
      this.pageScrolled = scrolled;
    }
  }
})
