const tablica =
    [
        { text: 1, col: 1, row: 4 },
        { text: 0, col: '1/3', row: 5 },
        { text: 2, col: 2, row: 4 },
        { text: 3, col: 3, row: 4 },
        { text: '+', col: 4, row: 4 },
        { text: 4, col: 1, row: 3 },
        { text: 5, col: 2, row: 3 },
        { text: 6, col: 3, row: 3 },
        { text: '-', col: 4, row: 3 },
        { text: 7, col: 1, row: 2 },
        { text: 8, col: 2, row: 2 },
        { text: 9, col: 3, row: 2 },
        { text: 'c', col: 4, row: 2 },
        { text: 'Display', col: '1/5', row: 1 },
        { text: '=', col: 4, row: 5 },
        { text: '.', col: 3, row: 5 }
    ];


class calc {
    constructor() {
        this.clearflag = false;
        this.memory = 0;
        this.op = 0;
        this.pojemnik = document.createElement('div');
        this.pojemnik.id = 'pojemnik';
        this.createButtons();

    }
    createButtons() {

        tablica.forEach(el => {
            const guzik = document.createElement('div');
            guzik.textContent = el.text;
            guzik.style.gridColumn = el.col;
            guzik.style.gridRow = el.row;
            this.pojemnik.appendChild(guzik);
            if (el.text === 'Display') {
                this.disp.guzik.id = 'Display';
                guzik.textContent = 0;
            } else {
                guzik.addEventListener('click',() => this.handlclick(ev));
            }
        });

    }
    init() {
        document.body.appendChild(this.pojemnik);
    }

    set disp(val) {
        this.display.textContent = val;
    }
    get disp() {
        return parseFloat(this.display.textContent);
    }

    handlclick(ev) {

        const key = ev.target.textContent;
        switch (key) {
            case 'c':
                this.disp = 0;
                this.clearflag = false;
                this.memory = 0;
                this.op = 0;

                break;


            case '+':
            case '-':
                if (this.op === 0) {
                    this.memory = this.disp;
                } else {
                    this.memory += this.op * this.disp;
                }
                this.op = key === '+' ? 1 : -1;
                this.clearflag = true;
                break;


            case '=':
                if (this.op === 0) {
                    this.memory = this.disp;
                } else {
                    this.memory += this.op * this.disp;
                }
                this.op = 0;
                this.disp.textContent = this.memory;
                break;


            default:
                if (key === '0' && this.disp === '0') return;
                if (key === '.' && this.display.textContent.includes('.')) return;
                if (key !== ('.') && this.disp === '0' || this.clearflag) {
                    this.disp = key;
                    this.clearflag = false;
                }
                else {
                    this.disp += key;
                }
                break;
        }
    }


}

const kalku = new calc();


window.addEventListener('DOMContentLoaded', () => kalku.init());