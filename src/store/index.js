import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VueAxios from 'vue-axios';

import { getCode } from 'country-list';

Vue.use(VueAxios, axios); 

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    recordsFind: [],
    recordsFindPerDate: [],
    countryFind: "Peru",
    dateFind:"",
    totalCases: {
      deaths: 0,
      recovered: 0,
      confirmed: 0,
      date: ""
    },
    totalCasesPrev: {
      deaths: 0,
      recovered: 0,
      confirmed: 0,
      date: ""
    },
    totalRecords: 0,
    dateRecords: [],
    confirmedRecords: [],
    recoveredRecords: [],
    deathsRecords: [],
    datacollection : {},
    alpha_2: 'PE',
    stateNoSearch: true,
  },
  mutations: {
    load(state) {
      state.recordsFind = [];
      state.totalCases.deaths = 0;
      state.totalCases.recovered = 0;
      state.totalCases.confirmed = 0;
      state.totalCases.date = "";
      state.totalRecords = 0;
      state.totalCasesPrev.deaths = 0;
      state.totalCasesPrev.recovered = 0;
      state.totalCasesPrev.confirmed = 0;
      state.totalCasesPrev.date = "";

      state.alpha_2 = getCode(state.countryFind);

      axios.get('https://pomber.github.io/covid19/timeseries.json').then((response) => {
        const records = response.data[state.countryFind];
        state.countries = Object.keys(response.data);        

        records.forEach( element => {
          if(element['confirmed']>=1){ 
            state.recordsFind.push(element);
            state.dateRecords.push(element.date); 
            state.confirmedRecords.push(element.confirmed); 
            state.recoveredRecords.push(element.recovered); 
            state.deathsRecords.push(element.deaths); 
            state.totalRecords++; 
          }
        });

        state.totalCases.deaths = state.recordsFind[''+(state.totalRecords-1)]['deaths'];
        state.totalCasesPrev.deaths = state.recordsFind[''+(state.totalRecords-2)]['deaths'];
        state.totalCases.recovered = state.recordsFind[''+(state.totalRecords-1)]['recovered'];
        state.totalCasesPrev.recovered = state.recordsFind[''+(state.totalRecords-2)]['recovered'];
        state.totalCases.confirmed = state.recordsFind[''+(state.totalRecords-1)]['confirmed'];
        state.totalCasesPrev.confirmed = state.recordsFind[''+(state.totalRecords-2)]['confirmed'];
        state.totalCases.date = state.recordsFind[''+(state.totalRecords-1)]['date'];
        state.totalCasesPrev.date = state.recordsFind[''+(state.totalRecords-2)]['date'];
        
      });

    },

    loadPerDate(state){
      state.recordsFindPerDate = [];
      state.totalCases.deaths = 0;
      state.totalCases.recovered = 0;
      state.totalCases.confirmed = 0;
      state.totalCases.date = "";
      state.totalCasesPrev.deaths = 0;
      state.totalCasesPrev.recovered = 0;
      state.totalCasesPrev.confirmed = 0;
      state.totalCasesPrev.date = "";
      state.totalRecords = 0; 

      state.recordsFind.forEach( element => {
        var dateRecord = Date.parse(element['date']);
        var dateCompared = Date.parse(state.dateFind);
        if(dateRecord<=dateCompared){
          state.recordsFindPerDate.push(element); 
          state.totalRecords++;
        }
        
      });

      if(state.totalRecords==1){
        state.totalCases.deaths = state.recordsFindPerDate[''+(state.totalRecords-1)]['deaths'];
        state.totalCasesPrev.deaths = state.recordsFindPerDate[''+(state.totalRecords-1)]['deaths'];
        state.totalCases.recovered = state.recordsFindPerDate[''+(state.totalRecords-1)]['recovered'];
        state.totalCasesPrev.recovered = state.recordsFindPerDate[''+(state.totalRecords-1)]['recovered'];
        state.totalCases.confirmed = state.recordsFindPerDate[''+(state.totalRecords-1)]['confirmed'];
        state.totalCasesPrev.confirmed = state.recordsFindPerDate[''+(state.totalRecords-1)]['confirmed'];
        state.totalCases.date = state.recordsFindPerDate[''+(state.totalRecords-1)]['date'];
        state.totalCasesPrev.date = state.recordsFindPerDate[''+(state.totalRecords-1)]['date'];
      }else{
        state.totalCases.deaths = state.recordsFindPerDate[''+(state.totalRecords-1)]['deaths'];
        state.totalCasesPrev.deaths = state.recordsFindPerDate[''+(state.totalRecords-2)]['deaths'];
        state.totalCases.recovered = state.recordsFindPerDate[''+(state.totalRecords-1)]['recovered'];
        state.totalCasesPrev.recovered = state.recordsFindPerDate[''+(state.totalRecords-2)]['recovered'];
        state.totalCases.confirmed = state.recordsFindPerDate[''+(state.totalRecords-1)]['confirmed'];
        state.totalCasesPrev.confirmed = state.recordsFindPerDate[''+(state.totalRecords-2)]['confirmed'];
        state.totalCases.date = state.recordsFindPerDate[''+(state.totalRecords-1)]['date'];
        state.totalCasesPrev.date = state.recordsFindPerDate[''+(state.totalRecords-2)]['date'];
      }
      
    },  

    fillData(state){

      state.datacollection = {
        labels: state.dateRecords,
        datasets: [
          {
            label: "Contagios",
            backgroundColor: "#f1c40f",
            data: state.confirmedRecords
          },
          // {
          //   label: "Recuperados",
          //   backgroundColor: "#2ecc71",
          //   data: state.recoveredRecords
          // },
          // {
          //   label: "Muertes",
          //   backgroundColor: "#34495e",
          //   data: state.deathsRecords
          // }
        ]
      };
    }
  },
  actions: {},
  modules: {}
});
