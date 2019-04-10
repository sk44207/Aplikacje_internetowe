const tablica =
 [
    {text: 1, col:1, row:4},
    {text: 0, col:'1/3', row:5},
    {text: 2, col:2, row:4},
    {text: 3, col:3, row:4},
    {text: '+', col:4, row:4},
    {text: 4, col:1, row:3},
    {text: 5, col:2, row:3},
    {text: 6, col:3, row:3},
    {text: '-', col:4, row:3},
    {text: 7, col:1, row:2},
    {text: 8, col:2, row:2},
    {text: 9, col:3, row:2},
    {text: 'c', col:4, row:2},
    {text: 'Display', col:'1/5', row:1},
    {text: '=', col:4, row:5},
    {text: ',', col:3, row:5}
];


const init = () => 
{
    const pojemnik = document.createElement('div');
    pojemnik.id = "pojemnik";

    tablica.forEach(el => 
    {
       const guzik = document.createElement('div');
       guzik.textContent = el.text;
       guzik.style.gridColumn=el.col;
       guzik.style.gridRow=el.row;
       pojemnik.appendChild(guzik);
       if(el.text==='Display'){
           guzik.id='Display';
       }else{
        guzik.addEventListener('click', ev=>{
           const d = document.getElementById('Display');
           d.textContent=ev.target.textContent;
        });
       }
    });

    document.body.appendChild(pojemnik);
}

window.addEventListener('DOMContentLoaded', init);