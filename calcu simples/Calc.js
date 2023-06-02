function Solve(val) {
    let v = document.getElementbyId('res') ;
    v.value += val;
}
function Result(val){ 
    let num1 = document.getElementbyId('res').value;
    let num2 = eval(num1);
    document.getElementById('res');
}
function Clear(val){
    let inp = document.getElementbyId('res') ;
    encodeURIComponent;
    inp.value = '';
}

function back(val){
    let ev = document.getElementbyId('res') ;
    ev.value = ev.value.slice(0,-1);
}