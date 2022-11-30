// var test=document.getElementById("00")
// test.innerHTML="你好"
// test.setAttribute("class","hit")
var utils={
    locationToPoint:(args)=>{
        var arr=["A","B","C","D","E","F","G"];
        for (var i=0;i<arr.length;i++){
            var element=arr[i];
            if (args.indexOf(element)>-1){
                return args.replace(element,i);
            }
        }
    }
};


var view={
    //右上角可以输入信息
    displayMessage: function (msg){
        var messageArea=document.getElementById("messageArea");
        messageArea.innerHTML=msg;
    },

    //定义击中敌人船的函数
    setLocationShip: function (location){
        var id=utils.locationToPoint(location);
        var cell=document.getElementById(id).setAttribute("class","hit");
        // setTimeout(cell=document.getElementById(id).setAttribute("class", ""),2000);
        setTimeout(()=>{
            var id=Number(utils.locationToPoint(location))+10;
            var cell1=document.getElementById(id).setAttribute("class","hit");
        }, 5000)
        // setInterval(test1,1000)
        // for (var i=0;i<test.length;i++){
        //     id=test[i].id
        //     id=Number(id)+10
        // }
        // setTimeout(()=>{

        // }, 5000)
        // console.log(id)

        // console.log(test)
        // setTimeout(()=>{

        // })
    },
    //定义未击中船函数
    displayMiss:function (location){
        var id=utils.locationToPoint(location);
        var cell=document.getElementById(id);
        cell.setAttribute("class","miss");
        // setTimeout(()=>{
        //     cell.setAttribute('class', "")
        // }, 3000)
    },
    //定义地图中船的位置
    initMap(){
        // var items=["A0","A1","A2","A3","A4","A5","A6"]
        // var num=Math.floor(Math.random()*items.length)
        // console.log(items[num])
        // view.setLocationShip(items[num])
        var a="hello"
        view.displayMessage(a)




        
 




        view.setLocationShip("A0")
        view.setLocationShip("B1")
        view.displayMiss("B5")
        view.mySelfShip("C5")
        view.mySelfShip("D5")
        var input=document.getElementById("guessInput")
        var fire=document.getElementById("fireButton")
        fire.addEventListener("click",()=>{
            this.attack(input.value)
        })}
  ,
    //定义用户输入的数值并进行判断是否击中
    attack(location){
        if (location){
            var id=utils.locationToPoint(location);

            //querySelectorAll(".hit")它会将符合条件的元素封装到一个数组中返回
            var hits = document.querySelectorAll(".hit");
            var myshiphits = document.querySelectorAll(".myship");
            var hitde=false;
            hits.forEach(hit=>{
                if(hit.id===id){
                    hitde=true;
                }
            });
            if (hitde===false){
                // if(myshiphits.id=id){
                //     document.getElementById(id).setAttribute("class", "")
                //     console.log("aa")
                // }else{
                this.displayMiss(location);
            }
            else{
                document.getElementById(id).setAttribute("class", "")
            }

        }
        else{
            alert("还没有输入")
        }
    },
    //加入三艘自己的船，船的颜色是红色
    mySelfShip: function (location){
        var id=utils.locationToPoint(location);
        var cell=document.getElementById(id);
        cell.setAttribute("class","myship");
        
        // setTimeout(()=>{
        //     cell.setAttribute('class', "")
        // }, 500)
        // setTimeout(()=>{
        //     cell.setAttribute('class', "myship")
        // }, 1000)
        // setTimeout(()=>{
        //     cell.setAttribute('class', "")
        // }, 1500)
    },
    }



function start(){
    view.initMap();
}
start();
