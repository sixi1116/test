// var eightBall = {
//     index:0,
//     advice:["yes","no","maybe","not a chance"],
// //     shake:function(){
// //         this.index=this.index+1;
// //         if (this.index>=this.advice.length){
// //             this.index=0;
// //         }
// //     },
// //     look:function(){
// //         return this.advice[this.index]
// //     }
// }
//  for (var prop in eightBall){
//     console.log(prop+": "+eightBall[prop])
//  }

//  console.log(eightBall["ad"+"vice"])

var fiat={
    make:"Fiat",
    model:"500",
    started:false,
    fuel:1,
    start:function(){
        this.started=true;
    },
    stop:function(){
        this.started=false;
    },
    drive:function(){
        if (this.started){
            if (this.fuel>0){
            this.fuel=this.fuel-1;
            return(this.make+" "+this.model+" goes zoom zoom!");
            }
            else{
            this.stop();
            return("uh oh,out of fuel.");
            }
        }else{
            return("you need to start th engine first.");
        }
    },
    addFuel:function(amount){
        this.fuel=this.fuel+amount;
        console.log("加了 "+amount+" 升油"+",目前 "+this.fuel+" 升油")

    }
}
fiat.start()
fiat.addFuel(2)
console.log(fiat.drive())
console.log(fiat.drive())
console.log(fiat.drive())
console.log(fiat.drive())
fiat.stop()
fiat.addFuel(2)
console.log(fiat.drive())