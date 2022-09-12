import api from '@/services/api';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useApprovalListStore = defineStore('approvalList', {
  state: () => {
    return {
      valueTabBar: 'all',
      valueSortOption: { id: 1, label: '開始日', type: 'DESC', icon: true },
      valuePage: 1,
      valueEvaluationNum: '-1',
      valueEvaluationKind: '-1',
      valueCycleId: '',
      valueYear: '',
    };
  },
  actions: {
    SET_CURRENT_PAGE(payload) {
      this.valuePage = payload;
    },
    SET_ACTIVE_TAB(payload) {
      this.valueTabBar = payload;
    },
    SET_SORT_BY(payload) {
      this.valueSortOption = payload;
    },
    SET_EVALUATION_NUM(payload) {
      this.valueEvaluationNum = payload;
    },
    SET_EVALUATION_KIND(payload) {
      this.valueEvaluationKind = payload;
    },
    SET_CYCLE_ID(payload) {
      this.valueCycleId = payload;
    },
    SET_VALUE_YEAR(payload) {
      this.valueYear = payload;
    },
  },
  getters: {},
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useApprovalListStore, import.meta.hot)
  );
}
