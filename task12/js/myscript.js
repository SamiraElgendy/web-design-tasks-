let btn= document.getElementById('btn');
function calc() {
    let frs = document.getElementById('frs').value;
    let sec = document.getElementById('sec').value;
    let op = document.getElementById('op').value;
    let res = document.getElementById('res');
    if (op == '+') {
        res.value  = +frs + +sec;
    } else if (op == '-') {
        res.value  = +frs - +sec;
    } else if (op == '*') {
        res.value  = +frs * +sec;
    } else {
        res.value  = +frs / +sec;
    }
  
}
btn.onclick = calc




