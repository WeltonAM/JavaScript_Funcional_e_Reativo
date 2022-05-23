function exec(fn, a, b){
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (x, y) => console.log(x - y);

exec(somarNoTerminal, 5, 5);
exec(subtrairNoTerminal, 5, 5);

const mult = (w, z) => w * z;
const r = exec(mult, 5, 5);
console.log(r);

setInterval(function () {
    console.log('Exec...')
}, 5000);