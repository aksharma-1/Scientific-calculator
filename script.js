const btn = document.querySelectorAll('.btn');
const ans = document.querySelector('.ans');
let expression='';

btn.forEach((button) => {
    button.addEventListener('click',(e)=>{
        const value = e.target.value;
        ans.value += value;
        expression =  ans.value;
        // console.log(expression);
        if(value=='ce'){
            clear();
        }
    })
});

const calculate=()=>{
    try {
        const degCheck = document.querySelector("#deg");

        if(degCheck.checked==true){
            expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
            expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
            expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
            // expression = expression.replace(/log\(/g, 'math.log10(');
            var result = math.evaluate(expression);
            ans.value = result;
        }
        else{
            var result = math.evaluate(expression);
            ans.value = result;
        }        
    } catch (error) {
        ans.value = 'Error';
        console.log(error)
    }
}

const backBtn=()=>{
    ans.value = ans.value.slice(0, -1) 
}
const clear=()=>{
    ans.value='';
}
const inverse=()=>{
    var sinText = document.querySelector('#sin').innerHTML;
    
    if(sinText=="sin"){
        
        document.querySelector('#sin').innerHTML='sin<sup>-1</sup>';
        document.querySelector('#cos').innerHTML='cos<sup>-1</sup>';
        document.querySelector('#tan').innerHTML='tan<sup>-1</sup>';
        
        document.querySelector('#sin').value='asin';
        document.querySelector('#cos').value='acos';
        document.querySelector('#tan').value='atan';
    }
    else{
        document.querySelector('#sin').innerHTML='sin';
        document.querySelector('#cos').innerHTML='cos';
        document.querySelector('#tan').innerHTML='tan';
        
        document.querySelector('#sin').value='sin';
        document.querySelector('#cos').value='cos';
        document.querySelector('#tan').value='tan';
    }
}