function getfullname(){
    var fn= document.getElementById("fname").Value;
    var ln=document.getElementById("lname").Value;
    var fullname=fn+ ""+ln+"!";
    return fullname;
     }
     function sayhello(){
         var hello="hello, "+getfullname();
         document.getElementById("dome").innerText=hello;
     }