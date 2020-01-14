import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue ({
        el: '#app',
        data: {
            allCountries: null,

            selectedCountry: null,

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
                showCountryData: function(index){
                    this.selectedCountry = this.allCountries[index];
                    console.log(this.selectedCountry);
                    
                }

            
        

        }
    })
})