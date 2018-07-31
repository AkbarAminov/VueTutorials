/*function car(name, model, owner, year, phone, image){
    return{
        name, model, owner, year, phone, image
    }
}*/

const car = ( name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})


const cars = [
    car('Ferrari', '250 GTO', 'Aki', 1998, '+998 97 123 45 67', 'img/ferrari.jpg'),
    car('Toyota', 'Camry', 'Artyom', 2018, '+998 97 234 86 74', 'img/toyota.jpg'),
    car('Lamborghini', 'Urus', 'Kosty', 2017, '+998 94 433 34 23', 'img/urus.jpg')

]


new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs:[]
        selectCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function (index) {
            this.car = cars[index],
            this.selectCarIndex = index
        },
        newOrder(){
            this.modalVisibility = false
        },
        cancelOrder(){
            this.modalVisibility = false
        }

    },
    computed: {
        phoneBtnText: function(){
            return this.phoneVisibility ? 'Hide phone': 'Show phone'
        },

        filteredCars(){

            return this.cars.filter(car =>{
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })

        }
       /* filteredCars(){
            var self = this
            const filterd = this.cars.filter(function(car){
                return car.name.indexOf(self.search) > -1
            })

            return filterd
        }*/
    }

})
