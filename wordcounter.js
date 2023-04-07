let textArea = document.getElementById("text");
let charCounter = document.getElementById("charcounter");
let wordCounter = document.getElementById("wordcounter");

textArea.addEventListener("input",function(){
    let chars = this.value;
    let charCounted = chars.length;
    charCounter.textContent = charCounted;
    let trimArr=[];

    let arr = chars.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    arr.map((s) => {
              let trimStr = s.trim();
              if(trimStr.length > 0){
                trimArr.push(trimStr);
            }
    });
    wordCounter.textContent = trimArr.length;
});  
