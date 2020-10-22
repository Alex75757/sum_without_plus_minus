//  sum_without_plus or minus or math or eval or array or with

// ^ побитовое исключающее или (см через консоль)
// << побитовый сдвиг влево ("двоичное умножение")


const getSum = (a,b) => b ? getSum(a ^ b, (a & b) << 1) : a;

console.log(getSum(2,6))

//  получается "цикл" по тернарному оператору до b = 0