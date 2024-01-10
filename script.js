//1.movie title ,studio and rating creation:
class Movie {
    constructor(title,studio,rating="pg"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    static getPG(movies){
        return Movie.filter(Movie=>Movie.rating==="PG");
    }
}
//creating an intance of movie
const casinoRoyale=new Movie("casino royal","eon productions","PG-13");

console.log(casinoRoyale);

// 2.Convert the UML diagram to Typescript class. - use number for double:
// difine the cicle class
class Circle{
    constructor(radius,color){
        this .radius=radius;
        this.color=color
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=color;
    }
    getArea(){
        return Math.PI*this.radius*this.radius; 
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }

};

//creat an instance of the circule class:
const myCircle=new Circle (5,"red");

// Get and set properties:
console.log("radius:",myCircle.getRadius());
console.log("color:",myCircle.getColor());

myCircle.setRadius(7);
myCircle.setColor("bule");

console.log("new radius:",myCircle.getRadius());
console.log("new colore:",myCircle.getColor());

// caculate and display area and circumference:
 console.log("area:",myCircle.getArea());
 console.log("circumference:",myCircle.getCircumference());
 
 //3.Write a “person” class to hold all the details:

 class Person{
    constructor(name,age,address,email){
        this.name= name ;
        this.age=age;
        this.address=address  ;
        this.email=email;
    }

    //geters and seters:
    getName(){
        return this.name; 
    }
    setName(name){
        this .name=name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
       this.age=age;
    }
    getAddress(){
        return this.address;
    }
    setAddress(address){
        this.address=address;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email=email;
    }
 }
//creating an instance of the person class
let person1=new Person("shek mohamed",21,"mullai street v.chathiram","shek3757@gmail.com");

//accessing and modifying details
console.log("Name:"+person1.getName());
console.log("Age:"+person1.getAge());
console.log("Address:"+person1.getAddress());
console.log("Email:"+person1.getEmail());

// modifying age and emil:
person1.setAge(22);
person1.setEmail("shek373@gail.com");

//displaying updated details:
console.log("updated Age:"+person1.getAge());
console.log("updated Email:"+person1.getEmail());


// 4.write a class to calculate the Uber price:
class UberPricing{
    constructor(basefare,costperkm){
        this.basefare=basefare;
        this.costperkm=costperkm;
    }

    calculateprice(distance){
        return this.basefare+this.costperkm*distance;
    }

};
/// creat an instance of uberpricing:
const uberX=new UberPricing(5,1.2);//base fare:$5,cost per km:$1.2


//calcilate the price for a specific ditance:
const distance=15;//ditance in kilometers
const totalPrice=uberX.calculateprice(distance);
console.log(`total price for a ${distance}km ride:$${totalPrice}`);


