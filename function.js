var scores=[60,78,60,43,67,21,78,33,78,34];
var costs=[.23,.12,.123,.34,.34,.565,.45,.3,.78,.43];
console.log(test(scores,costs,getHightScore(scores)));

function getHightScore(scores){ // 在scores中找到最大值
    var hightScore=0;
    var output;
    for (var i=0;i<scores.length;i++){
        // output=i+' '+scores[i]  遍历scores所有的值（包括索引）
        // console.log(output)     并在控制台显示出来
        if (scores[i]>hightScore){
            hightScore=scores[i];
        }
    }
    return hightScore; //调用这个函数后，放回最大值
}
// console.log(getHightScore(scores))  控制台显示scores中找到最大值

function getBestResultes(scores,hightScore){
    var bestAolution=[];
    for (var i=0;i<scores.length;i++){
        if (scores[i]==hightScore){
            bestAolution.push(i);
        }
    }
    return bestAolution; //调用这个函数后，放回最大值对于的索引位置
}
// console.log(getBestResultes(scores,getHightScore(scores)))  控制台显示scores中找到最大值所在的索引位置

function test(scores,costs,hightScore){
    var cost=100; //初始化一个比较大的值
    var index
    for (var i=0;i<scores.length;i++){
        if (scores[i]==hightScore){ // 找到scores最大值对于的索引
            if (cost>costs[i]){   //找到costs最小的值
                var index=i;
                var cost=costs[i];
            }
        }
    }
    return index //返回找到的scores最大值（2个）索引对应的costs最小值（一个）
}





// // function Game(){
//     var words1=[1,2,3,4,5];
//     var words2=["a","b","c","d","e"];
//     var words3=["A","B","C","D","E"];
//     var rand1=Math.floor(Math.random()*words1.length);
//     var rand2=Math.floor(Math.random()*words2.length);
//     var rand3=Math.floor(Math.random()*words3.length);
//     var phrass=words1[rand1]+" "+words2[rand2]+" "+words3[rand3];
//     console.log(phrass)
// //     return phrass
// // }
// // Game()

// 遍历每一个数据，并找出最高分和最高分所在的位置
// var scores=[60,50,60,43,67,21,78,33,78,34];
// var hightScore=0;

// for (var i=0;i<scores.length;i=i+1){
//     console.log("bubble # "+i+" scores "+scores[i]);-1
//     if (scores[i]>hightScore){
//         hightScore=scores[i];
//     }
// }
// console.log(i);
// console.log(hightScore);
// var genres=[]
// for (var i=0;i<scores.length;i=i+1){
// if (scores[i]==hightScore){
//     genres.push(i)
// }
// }
// console.log(genres)


// var hightScoreNum
// var hightScore

// console.log(hightScoreNum)
// console.log(hightScore)





// var hightScore=0;
// function getHightScore(scores)
// var lowScores=[];
// var lowScore=0
// for (var i=0;i<scores.length;i++){
//     if (scores[i]>hightScore){
//         hightScore=scores[i];
//     }
// }
// console.log(hightScore)
// for (var i=0;i<scores.length;i++){
//     if (hightScore==scores[i]){
//         lowScores.push(costs[i])
//     }
// }
// console.log(lowScores)

// for (var x=0;x<lowScores.length;x++){
//     if (lowScores[x]<lowScore){
//         lowScore=lowScores[x]
//     }
// }
// console.log(lowScore)

// function aaa(scores,costs,hightScore){
//     var cost=100;
//     var index
//     for (var i=0;i<scores.length;i++){
//         if (scores[i]==hightScore){
//             if (cost>cost[i]){
//                 index=i;
//                 cost=costs[i];
//             }
//         }
//         }
//         return index;
//     }
//     console.log(aaa(scores,costs,hightScore))

