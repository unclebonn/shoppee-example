var users = [
    {
        id: 1,
        name:'Kien Dam'
    }
    ,
    {
        id: 2,
        name:'Son Dang'
    }
    ,
    {
        id: 3,
        name:'Hung Dam'
    }
]
var comments = [
    {
        id:1,
        user_ID :1,
        content:'Anh Son chua ra video :('
    },
    {
        id:2,
        user_ID :2 ,
        content:'Vua ra xong em oi'
    }
] 

// 1.Lấy comments
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

function getComments(){
    return new Promise (function(resolve){
        setTimeout(function(){
            resolve(comments)
        },3000)
    })
}

getComments()
    .then(function(comments){
        console.log(comments);
    })