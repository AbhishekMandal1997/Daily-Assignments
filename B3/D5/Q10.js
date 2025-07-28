let car = {
    brand: "Tesla",
    getBrand: function () {
        return this.brand;
    }
};

let fixBrand = car.getBrand.bind(car);
console.log(fixBrand());
