const person1 = {
  name: "Hưng",
  age: 18,
  weight: 65,
  height: 1.7,
};

let height;
// Cách 1 để dùng tạo 1 Đối tượng bằng function
function Person(weight, height) {
  //Viết hoa tên đối tượng
  (this.weight = weight),
    (this.height = height),
    (this.getBMI = () => this.weight / (this.height * this.height));
  this.setHeight = function (height) {
    return (this.height = height);
  };
}

// Cách 2: tạo một đối tượng bằng class
class Person2 {
  constructor(weight, height) {
    (this.weight = weight), (this.height = height);
  }
  getBMI = () => this.weight / (this.height * this.height);
}

const xuyen = new Person(68, 1.72);

const bmi = xuyen.getBMI();

xuyen.setHeight(1.8);
xuyen.height = 1.9;
console.log(11111, bmi, xuyen);

const car = {
  brand: "BMW",
  maxSpeed: 300,
  model: "X3",
  price: 90000,
  priceUnit: "USD",
};

const car2 = car;
car2.brand = "Mec";
const car3 = { ...car, maxSpeed: 250 };
const car4 = {};
car4.brand = car.brand;
car4.brand = "Toyota";
car4["brand"] = "Mazda";

// car3.brand = car.brand
// car3.maxSpeed = car.maxSpeed
// car3.model = car.model
// car3.price = car.price
// car3.priceUnit = car.priceUnit
// car3.maxSpeed = 250

console.log("Kiểm tra brand", car);
console.log("Kiểm tra brand car 3", car3);
console.log("Kiểm tra brand car 4", car4);

// Đặt biến để lấy giá trị thuộc tính
const cat = {
  color: "black",
  weight: 3,
};

let key = "color";

cat[key] = "White";

console.log(cat);

// Thông thường chỉ lấy được giá trị của key trong object, chứ không lâyd được key
// For in lặp qua từng phần tử trong Object và trả về key
for (const key in car) {
  console.log("Kiểm tra key của car", key, "và giá trị là", car[key]);
}
