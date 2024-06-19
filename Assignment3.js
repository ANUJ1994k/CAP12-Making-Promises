

function getUserData (id,callback){
//// Create a dummy user object
    setTimeout(()=>{
        const user={
            id:id,
            name:"ANUJ kumar",
            email:"anuj1994k@gmail.com"
        };
        callback(user);
    },2000)

}

function displayUser(user){
    console.log("User ID:",user.id);
    console.log("User name:",user.name);
    console.log("User id:",user.email);
}

//calling the getUserData function with argument id and callback function

getUserData(1, displayUser)