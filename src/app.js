import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue ({
        el: '#app',
        data: {
            allCountries: null,

           isSelected: true

        },
        mounted: function(){
            this.fetchCountries()
        },
        methods: {
            fetchCountries: function(){
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(jsOb => this.allCountries = jsOb)
            },

            showSelectedCountry: function(){}

                // showCountryData: function(index){
                // const country = this.allCountries[index];
                // this.selectedCountry = {
                //     population: country.population,
                //     flag: country.flag,
                //     isSelected: true
                
                
                }
                }

            
        

        }
    })
})