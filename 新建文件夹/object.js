function getSecret(file,secretPasword){ //定义一函数getSecre，file和secretPasword为形参
    file.opened=file.opened+1;//没执行一次函数，opened次数加一
    if (secretPasword==file.password){ //当输入的密码和文件密码相同
        return file.contents; //返回文件内容
    }else{//当输入密码与文件密码不同
        return "invalid password! no secret for you"//返回invalid password! no secret for you
    }
}

function setSecret(file,secretPasword,secret){ //定义一个函数setSecret，file,secretPasword,secret为形参
    if (secretPasword==file.password){ //当输入的密码和文件密码相同
        file.opened=0; //opened次数归0
        file.contents=secret; //文件contents替换为secret
    }
}

var superSecretFile={ //创建一个对象superSecretFile
    level:"classified",
    opened:0,
    password:2,
    contents:"dr.evel's next meeting is not detroit"
};
// var ecretPasword=3  //定义输入的密码，目前是直接输入，可以用prompt自定义输入
var ecretPasword=prompt("game(enter a number 0-6):")
var secret=getSecret(superSecretFile,ecretPasword); //secret的值是函数getSecret参数为superSecretFile,ecretPasword
console.log(secret); 
console.log(superSecretFile.opened)
//控制台显示输入密码之后对于的提示，密码正确提示dr.evel's next meeting is not detroit，密码错误提示invalid password! no secret for you
setSecret(superSecretFile,ecretPasword,"dr.evel's next meeting is in philadelphia");
//调用函数setSecret参数为superSecretFile,ecretPasword,"dr.evel's next meeting is in philadelphia"
secret=getSecret(superSecretFile,ecretPasword);
//调用函数getSecret参数superSecretFile,ecretPasword，由于更新了文件的contents，所以调用函数之后返回的值更新了
console.log(secret)