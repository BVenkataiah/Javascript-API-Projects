let apikey = "tIOSZYTXMPGxv3OvrXfuMw==j5rSI1IyqxfT9AJJ";

let generateBtn = document.getElementById('generate-btn');
let copyBtn = document.getElementById("copy-btn");
let paraDisplay = document.getElementById("para");

let options = {
    method:"GET",
    headers: {'x-api-key': apikey},
}

let url ="https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

let generateParas = () =>{
    let noOfPara = document.getElementById('no-of-para').value;
    let finalUrl = url + noOfPara;
    fetch(finalUrl, options)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        paraDisplay.innerText = data.text;
    })
}

// implement function to copy
copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(paraDisplay.innerText);
    alert("Text Copied to clipboard")
})

generateBtn.addEventListener('click', generateParas);
window.addEventListener('load', generateParas);