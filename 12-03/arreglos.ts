let v: (number | string) []= [1,2,3,4,5];
v.push(6);
v.push(7);
v.push('hola'); //error
console.log(v);

let a: Array<number> = [1,2,3,4,5];
a.push(6);
a.push(7);
let b = [...a] //split (...)
b.push(8);
console.log(a);
console.log(b);