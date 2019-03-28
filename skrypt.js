const double = x => 2*x;
// const mul= (x,y)=> x*y;
const init = (ev, A)=>
{
console.log('pojemnik:',document.getElementById('pojemnik'));
console.log(ev);
console.log(double(A));
// console.log(mul(x,y));
console.log('pojemnik:',document.getElementById('pojemnik').children);



}

window.addEventListener('DOMContentLoaded',x=>{
    init(x, 5);
});
