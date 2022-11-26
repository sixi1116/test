function fun(echo){
    console.log(echo);
}
// console.log(fun) //结果是[Function: fun]
fun("hello");
function boo(aFunction){
    aFunction("boo");
}
boo(fun);
console.log(fun);
fun(boo);
var moreFun=fun;
moreFun("hello again");
function echoMaker(){
    return fun;
}
var bigFun=echoMaker();
bigFun("is there an echo");