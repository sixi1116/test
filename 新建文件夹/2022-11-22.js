// function Duck(sound){
//     this.sound=sound
//     this.quack=function(){
//         console.log(this.sound)
//     }
// }
// var Toy=new Duck("quack quack")
// Toy.quack()
// console.log(typeof Toy)
// console.log(Toy instanceof Duck)
// a=""
// b=" "
// if (b){
//     console.log("是真值")

// }else{
//     console.log("是假值")
// }








var a=1
var phoneNumber1="123-567"
var phoneNumber2="234,467"
var phoneNumber3="123 457"
var phoneNumber4="a23457"
var phoneNumber5="123456 "
var phoneNumber6=" 234567"
var phoneNumber7=a+"234567"
var phoneNumber8=" 23456790"
// var phoneNumber9
var phoneNumber10=""

function myFunction(phoneNumber) {
    var phoneNumber=phoneNumber.trim()
    if (phoneNumber.length==8){
        if (phoneNumber.charAt(3)=="-"){
            if (isNaN(phoneNumber[0,1,2,4,5,6,7])){
                console.log("输入的是8个字符，且第三位是-，但其他字符不是数字")
        }else{
            console.log("aa")
        }
    }else{
            console.log("索引第三位不是-")
        }
    }else{
        console.log("不是8个字符")
    }
    if (phoneNumber.length==7){
        if (isNaN(phoneNumber)){
                console.log("输入的是7个字符，但其他字符不是数字"+phoneNumber)
            }else{
                console.log("aa")
            }
    }else{
    console.log("不是7个字符"+phoneNumber)}
    }

myFunction(phoneNumber1)
myFunction(phoneNumber2)
myFunction(phoneNumber3)
myFunction(phoneNumber4)
myFunction(phoneNumber5)
myFunction(phoneNumber6)
myFunction(phoneNumber7)
myFunction(phoneNumber8)
// myFunction(phoneNumber9)
myFunction(phoneNumber10)

// var a="1"
// if (isNaN(a)){
//     console.log("a不是数字")
// }else{
//     console.log("a是数字")
// }







// if (99=="99"){
//     console.log("a number");
// }else{
//     console.log("not a number")
// }

// var a=3+"5"
// var b=3+a
// console.log(a)
// console.log(b)
// var c="x"*3
// var d=10-"5"
// var e=20/"2"  
// console.log(c)
// console.log(d)
// console.log(e)

// var name="jenny";
// var phone="8567-5309";
// var fact="this is a prime number";

// var songName=phone+"/"+name;
// //phone.indexOf("-5")字符串-5的索引（索引从0开始）
// var index=phone.indexOf("-5");
// //phone.indexOf("5",3)字符索引3开始找5，之后5所处的索引（索引从0开始）
// var index=phone.indexOf("5",3);

// console.log("-5在index"+index)
// console.log("从索引3开始找5，位置是"+index)
// //fact.substring（10,15）变量fact字符串10-15的值（索引从0开始）
// if (fact.substring(10,15)==="prime"){
//     console.log(fact);
// }else{
//     console.log("aa")
// }


// var date= "name|phone|address"
// var vals=date.split("|")
// console.log("aa",vals)

// var input = "aaaa@qq.com"
// for (var i=0;i<input.length;i++){
//     //input.charAt(i)获取input字符串中指定位置的索引（索引从0开始）
//     if (input.charAt(i)==="@"){
//         console.log("@在index"+i)
//     }
// }