interface User{
 age: number;
 email?: string;  // '?' defines that optional argument
}

function isLegal(user:User):boolean{
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}

isLegal({
age: 19,
email: 'haha' //this is optional to give
})

