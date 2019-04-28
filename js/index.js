function login(uname,pword){
if(uname=="amir" && pword=="1234"){
    return "hallo"+uname+"(!)";
}else{
    return "user name or password wrong";
}


}
function getuname(){
uname= document.getElementById("username").value;
  pword=  document.getElementById("password").value;

    let res=login(uname,pword);
    document.getElementById("login").innerHTML=res;
}
