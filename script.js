let result= document.querySelector("#result");
let btn= document.querySelector("#btn");
let a= btn.addEventListener("click",()=>{
    let randomNumber=parseInt(Math.random()*100);
    console.log(randomNumber);
    let yourName = document.querySelector("#your-name").value;
    let partnerName = document.querySelector("#partner-name").value;
    if(yourName ===""){
        alert("please enter Your Name !")
    }
    else if(partnerName ===""){
        alert("please enter partner's Name !")
    }
    else{
        result.innerHTML = yourName + " and " + partnerName +" love Percentage is: "+randomNumber +"%";
    }
})
