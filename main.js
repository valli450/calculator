const insertColor = document.querySelector(".whale-section");
const inputBlock = document.querySelector(".number-input");
let numberList = [];
let curInput = '';
let total = 0;
let mathSign = [];
const re = new RegExp(/^(\d+|\*\*|[+\-*/.])$/);
let flag = false;

function changebgr(o) {
    if(o === '1'){
        insertColor.classList.remove('light');
        insertColor.classList.remove('purple');
        document.body.style.backgroundColor = '#3A4663';
    }else if(o === '2'){
        insertColor.classList.add('light');
        document.body.style.backgroundColor = '#E6E6E6';
        insertColor.classList.remove('purple');
    }else if(o === '3'){
        insertColor.classList.remove('light');
        document.body.style.backgroundColor = '#17062A';
        insertColor.classList.add('purple');
    }
}

function manualInsert(){
    if(inputBlock.value[inputBlock.value.length-1] === '+'){
        let j = inputBlock.value.slice(0, inputBlock.value.length-1)
        numberList.push(j);
        plusSign()
    }else if(inputBlock.value[inputBlock.value.length-1] === '-'){
        let j = inputBlock.value.slice(0, inputBlock.value.length-1)
        numberList.push(j);
        minusSign()
    }else if(inputBlock.value[inputBlock.value.length-1] === '*'){
        let j = inputBlock.value.slice(0, inputBlock.value.length-1)
        numberList.push(j);
        multiplySign()
    }else if(inputBlock.value[inputBlock.value.length-1] === '/'){
        let j = inputBlock.value.slice(0, inputBlock.value.length-1)
        numberList.push(j);
        divideSign()
    }else if(inputBlock.value[inputBlock.value.length-1] === '='){
        result();
    }else{
        curInput+=inputBlock.value[inputBlock.value.length-1];
    }
}

function buttonInput(o){
    if(!flag){
        if(o === "." && curInput.includes(".")){
            console.log('Error')
        }else if( o === "0"){
            if(curInput[0] === '0' && curInput[1] !== '.'){
                console.log('Error')
            }else{
            curInput += o;
            }
        }else if(o === '+'){
            if(curInput.includes("undefined")){
                numberList.push(curInput.slice(9, curInput.length));
            }else{
                numberList.push(curInput);
            }
            plusSign();
        }else if(o === '-'){
            if(curInput.includes("undefined")){
                numberList.push(curInput.slice(9, curInput.length));
            }else{
                numberList.push(curInput);
            }
            minusSign();
        }else if(o === '*'){
            if(curInput.includes("undefined")){
                numberList.push(curInput.slice(9, curInput.length));
            }else{
                numberList.push(curInput);
            }
            multiplySign();
        }else if(o === '/'){
            if(curInput.includes("undefined")){
                numberList.push(curInput.slice(9, curInput.length));
            }else{
                numberList.push(curInput);
            }        
            divideSign();
        }else{
            curInput += o;
        }
        if(curInput.includes("undefined")){
            inputBlock.value = curInput.slice(9, curInput.length)
        }else{
            inputBlock.value = curInput;
        }  
    }
    
}

function plusSign() {
    curInput = '';
    inputBlock.value = "";
    mathSign.push("+");
}

function minusSign(){
    curInput = '';
    inputBlock.value = "";
    mathSign.push("-");
}

function multiplySign() {
    curInput = '';
    inputBlock.value = "";
    mathSign.push("*");
}

function divideSign() {
    curInput = '';
    inputBlock.value = "";
    mathSign.push("/");

}

function reset(){
    numberList = [];
    curInput = '';
    total = 0;
    totalString = '';
    mathSign = [];
    inputBlock.value = '0';
    flag = false;
}

function deleteLast(){
    if(!flag){
        curInput = curInput.slice(0, curInput.length - 1);
        if(curInput.length === 0){
            inputBlock.value = '0';
        }else{
            inputBlock.value = curInput;
        }
    }
    
}

function result(){
    if(!flag){
        if(curInput.includes("undefined")){
            numberList.push(curInput.slice(9, curInput.length));
        }else{
            numberList.push(curInput);
        }        
        let num = 1;
        let numu = 0;
        if(total === 0){
            total = numberList[0];
        }
        for(let u = 1; u < numberList.length; u++){
                if(mathSign[numu] === '+'){
                    total = String(Number(total) + Number(numberList[u]));
                    numu++;
                }else if(mathSign[numu] === '-'){
                    total = String(Number(total) - Number(numberList[u]));
                    numu++;
                }else if(mathSign[numu] === '*'){
                    total = String(Number(total) * Number(numberList[u]));
                    numu++;
                }else if(mathSign[numu] === '/'){
                    if(numberList[u] !== '0'){
                        total = String(Number(total) / Number(numberList[u]));
                        numu++;
                    }else{
                        total = 'Error';
                        inputBlock.value = total;
                        document.querySelector(".number-input").disabled = true;
                        flag = true;
                        break;
                    }
                }
            
            if(total !== (Math.ceil((total)*100)/100)){
                total = Math.ceil((total)*100)/100;
            }
            inputBlock.value = total;
                document.querySelector(".number-input").disabled = true;
                flag = true;
        }
    }
    
}