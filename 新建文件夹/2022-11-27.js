// function Dog(name,bread,weight){
//     this.name=name;
//     this.bread=bread;
//     this.weight=weight;
// }
// var fido=new Dog("Fido","Mixed",38);
// var fluffy=new Dog("Fluffy","Poodle",30);
// var spot=new Dog("Spot","Chihuahua",10);
// var dogs=[fido,fluffy,spot];

// for (var i=0;i<dogs.length;i++){
//     var size="small";
//     if (dogs[i].weight>10){
//         size="large"
//     }
//     // console.log(size)
//     console.log("Dog:"+dogs[i].name+" is a "+size+" "+dogs[i].bread)
// }

// function Coffee(roast,ounces){
//     this.roast=roast;
//     this.ounces=ounces;
//     this.getSize=function(){
//         if (ounces===8){
//             this.size="small";
//         }else if(ounces===12){
//             this.size="medium";
//         }else if(ounces===16){
//             this.size="large";
//         }
//         return this.size
//     };
//     this.toString=function(){
//         return "you have orderde a "+this.getSize()+" "+this.roast+" coffee"
//     }
// }
// var houseBlebd=new Coffee("house blend",12);
// // console.log(houseBlebd.getSize())
// console.log(houseBlebd.toString());
// var darkRoast=new Coffee("Dark Roast",16);
// console.log(darkRoast.toString());

function Car(make,model,yaer,color,passengers,mileage){
    this.make=make;
    this.model=model;
    this.year=yaer;
    this.color=color;
    this.passengers=passengers;
    this.convertinle=false;
    this.mileage=mileage;
    this.started=false
    this.start=function(){
        this.started=true;
    }
    this.stop=function(){
        this.started=false;
    }
    this.drive=function(){
        if(this.started){
            console.log(this.make+" "+this.model+" goes zoom zoon!")
        }else{
            console.log("start the engine first")
        }
    }

}
var chevy=new Car("Chevy","Bel Air",1957,"red",2,1021)
// 为某个对象增加属性
chevy.owner="Bob"
// 删除某个对象的原始属性
delete chevy.color
// chevy.drive();
// chevy.start();
// chevy.drive();

// if (chevy instanceof Car){
//     console.log("chevy is a Car")
// }

// var now=new Date();
// console.log(now)
// //2022-11-27T10:06:24.651Z
// var dateString=now.toTimeString();
// //18:06:24 GMT+0800 (中国标准时间)
// var theYear=now.getFullYear();
// //2022
// var theDayOfWeek=now.getDay();
// //0
// console.log(dateString)
// console.log(theYear)
// console.log(theDayOfWeek)

// var birthday=new Date("May 1,1983 08:03 pm")
// // 1983-05-01T12:03:00.000Z
// console.log(birthday)
// Array排，陈列
var oddNumber=new Array(3)
oddNumber[0]=3;
oddNumber[1]=5;
oddNumber[2]=1;
console.log(oddNumber);

oddNumber.reverse();
console.log(oddNumber);
var aString=oddNumber.join("-")
console.log(aString);
var areAllodd=oddNumber.every(function(x){
    return ((x%2)!==0);
})