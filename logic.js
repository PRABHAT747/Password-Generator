const characters =["A","B","C","D","E",
"F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]"
,",","|",":",";","<",">",".","?",
"/"];
let btnEl= document.getElementById("generate")
let clipEl=document.getElementById("clip")
let p1EL=document.getElementById("p1")






btnEl.addEventListener("click",function(){
    let passwor1="";

let passwor2="";
    
let len = characters.length;    
for(let i = 1 ; i<=12;i++)
{
    let ran1 = Math.floor(Math.random()*len)
    passwor1+=characters[ran1]
    let ran2 = Math.floor(Math.random()*len)
    passwor2 += characters[ran2]
    
}
p1EL.innerHTML=`<p class ="password">
${passwor1}
</p>
<p class ="password">
${passwor2}</p>`
passwor1="";
passwor2=""; 

})


