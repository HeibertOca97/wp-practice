import { sum, res, div, mult } from './operaciones.js';
import './main.css';

const btn = document.getElementById("btn-opt"),
    n1 = document.getElementById("n1"),
    n2 = document.getElementById("n2"),
    result = document.getElementById("result");


btn.addEventListener("click", () => {
    let op = document.getElementById("op");

    switch (op.value) {
        case '-':
            result.value = res(Number(n1.value), Number(n2.value));
            break;
        case '/':
            result.value = div(Number(n1.value), Number(n2.value));
            break;
        case '*':
            result.value = mult(Number(n1.value), Number(n2.value));
            break;
        default:
            result.value = sum(Number(n1.value), Number(n2.value));
            break;
    }
});

