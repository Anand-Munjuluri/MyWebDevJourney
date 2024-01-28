//like number , any is also a type in typescript(it can be anything, string,number,etc)
function greet(firstname: string,age: number):number{ //explicity give that it returns number
    return age;
}
//even if you did not explicity mention return type
// typescript compiler know that : it is known as type inference
// but it is a good practice to explicity mention the type

greet("anand",23);