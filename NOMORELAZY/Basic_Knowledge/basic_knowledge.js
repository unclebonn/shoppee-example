
// ------------------------TEST FUNCTION-----------------
function writeLOg() {
    var myString = '';
    for (var param of arguments) {
        //Cach 1:    
        myString += `${param} - `
        // myString = myString + `${param} -`

        //Cach 2:    myString += param + ' ';

        /**
         * step 1: myString = '' + hofdsa - 
         * step 2: myString = " '' + hofdsa - " + fdsfa - 
         * step 3: myString = " '' + hofdsa - fdsfa - " + 3 - 
         * step 4: myString = " '' + hofdsa -  + fdsfa - 3 - " + 4 - 
         * result: hofdsa - fdsfa - 3 - 4 -
         */
    }
    console.log(myString);
}
writeLOg('hofdsa', 'fdsfa', 3, 4);
//---------------------------------------------------------------


/**  */

/**
 * ---------  Các chức năng trong mảng-------------
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]
var otherLanguages = [
    'English',
    'France',
    'Spanish'
] 

console.log(languages.toString());
console.log(languages.join(' - '));
console.log(languages.pop());
console.log(languages.push('HTML'));
console.log(languages.shift());
console.log(languages.unshift('CSS'));
console.log(languages.splice(0,1));
console.log(languages.concat(otherLanguages));
console.log(languages.slice(0,1)); // Copy trong một khoảng nào đó trong chuỗi 
console.log(languages);
 */



/** ----- Cách lấy phần tử đầu và cuối của một mảng ---------
function getFirstElement(array) {
    for (let i = 0; i < array.length; i++) {
        if (i = array[0]) {
            return array[0];
        }
    }
}
console.log(getFirstElement(languages));


function getLastElement(array) {
    for (let i = 0; i < array.length ; i++) {
        if (i = array.length -1) {
            return array[i];
        }
    }
}
console.log(getFirstElement(languages));

*/


// Ví dụ cách tạo một Constructor
function protTTo(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.getName = function () {
        return `${this.name} ${this.age}`;
    }
}
// Ví dụ cách thêm một key khác trong Constructor
protTTo.prototype.height = 190;
var user1 = new protTTo('Anh Kkkkhoi', 19, 'tran khac chan');
console.log(user1);

// Ví dụ về hàm ngày tháng
function getNextYear() {
    var date = new Date();
    var fullYear = date.getFullYear();
    return fullYear;
}
console.log(getNextYear());

//Ví dụ hàm Math.random()
function getRandomItem(array) {
    var random = Math.floor(Math.random() * 5);
    console.log(random);
    return array[random];
}

var Item = [
    'con chó tùng bị ngu',
    'con chó tùng bị khùng',
    'con chó tùng bị điên',
    'con chó tùng bị bệnh',
    'con chó tùng bị hâm'
]
console.log(getRandomItem(Item));

// Ví dụ vòng lập for 
function getRandNumbers(min, max, length) {
    var random_Array = [];
    for (var i = 0; i <= length - 1; i++) {

        random_Array.unshift(Math.random() * (max - min) + min);
        // console.log(length);
    }
    return random_Array;


}
console.log(getRandNumbers(1, 3, 10));

// Ví dụ của vòng lập for/in trong object
var myinFo = {
    name: 'tran anh khoi',
    age: 19,
    address: '77 tran khac chan'
}

function getProperties(object) {
    var arr = [];
    for (var key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}
console.log(getProperties(myinFo));

// Ví dụ vòng lập lồng nhau 
var myArray = [
    ['anh khoi', 'Anh Khoi'],
    ['ANH KHOI', 'ANH khoi'],
    ['aaaaaa', 'AAAAAAA']
]

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}


console.log('----------GIAI THỪA-----------------');
// Đệ quy
function GiaiThua(number) {
    if (number > 0) {
        return number * GiaiThua(number - 1);     // Step 1:  3 * GiaiThua(2);
        //          3 * 2 * GiaiThua(1);
        //          3 * 2 * 1 * GiaiThua(0) -----> GiaiThua(0) return lại 1 bởi vì không thoả điều kiện lớn hơn 0;
        //  Suy ra : return --> 3 * 2 * 1 * 1; 
    }
    return 1;
}
console.log(GiaiThua(5));

// Ví dụ của array.reduce()
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var depthArray2 = [];
// var totalCoin = depthArray.reduce(function (flat, depthArray__Item) {
//     console.log(flat);
//     return flat.concat(depthArray__Item); /**
//     bởi vì khi nó trả về một kết quả, nó sẽ lưu trữ kết quả đó mà làm tiếp như ở đây kết
//     quả trả về lần đầu là [1] thì lần sau cũng sẽ lấy [1] nối chuỗi tiếp
//     */
// }, [])
// console.log(totalCoin);

console.log('----------REDUCE FUNCTION-----------------');

var coin = [1,2,3,4,5,6];

Array.prototype.reduce3 = function(callback,initialValue){
    let i =0;
    if(arguments.length < 2 ){
        i = 1;
        initialValue = this [0];
    }
    for( ; i < this.length;i++){
        initialValue = callback(initialValue,this[i],i,this)
    }
    return initialValue;

}

console.log(coin.reduce3(function(accumulation,current){
    return accumulation + current;
},10));
console.log('---------------MAP FUNCTION----------------');


Array.prototype.map2 = function(callback){
    let i =0;
    var ouput = [];
    for( ; i<this.length;i++){
        var result = callback(this[i],i,this);
        ouput.push(result);
    }
    return ouput;
}

var MAP =  coin.map2(function(current){
    return `<h2>${current}</h2>`;
});

console.log(MAP);

console.log('---------------FOREACH FUNCTION----------------')


var FOREACH = [ 
    'java','php','react'
]
FOREACH.length = 10;
Array.prototype.forEach2 = function(callback,thisArg){

    for(var i in this){
        if(this.hasOwnProperty(i)){
        callback(this[i],i,this);
        }
      
    }
}

FOREACH.forEach2(function(element,index){
    console.log(index , element);
});

console.log('---------------FILTER FUNCTION----------------')

var filterFunction = ['fsda',123,'ewww','sd789'];
Array.prototype.filter2 = function(callback,thisArg){
    var output = [];
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index],parseInt(index),this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}

console.log(filterFunction.filter2(function(element,index){ 
    return index;
}));


console.log('---------------FIND FUNCTION----------------')

var findFunction = [
    {
        name : 'khoi',
        age : 20
    },
    {
        name : 'kiet',
        age : 30
    },
    {
        name : 'khoi',
        age : 21
    }
];

Array.prototype.find2 = function(callback,thisArg){
    for(var index in this){
       if(this.hasOwnProperty(index)){
        var result = callback(this[index],parseInt(index),this);
        if(result){
            return this[index];
        }
       }
    }
}

console.log(findFunction.find(function(element,index){
    return element;
}));

console.log('---------------SOME FUNCTION----------------')

var someFunction = [
    {
        name : 'khoi',
        finishSchool : true
    },
    {
        name : 'kiet',
        finishSchool : true
    },
    {
        name : 'khoi',
        finishSchool : true
    }
];
Array.prototype.some2 = function(callback,thisArg){
    var flag = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
            if(!result){
                flag = false;
                break;
            }
        }
    }
    return flag ;
}

console.log(someFunction.some2(function(element,index){
    return element.finishSchool;
}));

console.log('---------------EVERY FUNCTION----------------')

var everyFunction = [
    {
        name : 'khoi',
        finishSchool : true
    },
    {
        name : 'kiet',
        finishSchool : true
    },
    {
        name : 'khoi',
        finishSchool : true
    }
];

Array.prototype.every2 = function(callback,thisArg){
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
            if(!result){
                output = false;
                break;
            }
        }

    }
    return output;
}


























  
  
  


  
  
  