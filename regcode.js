function getdata(obj) {
    console.log(111)
    function objKeySort(obj) {//排序的函数
        var newkey = Object.keys(obj).sort();
        //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序
        var newObj = {};//创建一个新的对象，用于存放排好序的键值对
        for (var i = 0; i < newkey.length; i++) {
            console.log(newkey[i])
            console.log(obj[newkey[i]]);
            if(newkey[i] == null || obj[newkey[i]] == '' || obj[newkey[i]] == null){

            } else {
                newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
            }

        }
        return newObj;//返回排好序的新对象
    }

    var reobj = objKeySort(obj) // 排序后的对象
    console.log(reobj)

    var recode = '';
    for(var key in reobj){
        recode += (key+reobj[key])
    }
    console.log(recode)
    recode = 'a b9'
    console.log(recode)
    var sign = String(CryptoJS.MD5(recode)).toUpperCase(); //转大写的字符串
    console.log(sign)
}