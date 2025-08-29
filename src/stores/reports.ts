import { Timestamp } from "firebase/firestore";
import { defineStore } from "pinia";

export const reports = defineStore('reports', {
    state: () => ({
        reportCommentData: {
            userId: '',
            messageReported: '',
            userReportedName: '',
            dateReported: Timestamp.now()
        }
    }),
    actions: {
        setReportCommentData(data:{ userId: string; messageReported: string; userReportedName: string; dateReported: Timestamp }) {
            this.reportCommentData = data
        }
    },
    getters: {
        getReportCommentData: (state) => state.reportCommentData
    }
})

