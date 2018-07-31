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
        visible: true
    },
    methods: {
        selectCar: function (index) {
            this.car = cars[index]
        }
    }
})
