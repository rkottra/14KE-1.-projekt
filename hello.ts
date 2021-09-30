/*function greeter(person : string) {
    return "Hello, " + person;
}

let a = 10;
let b = 10;
let c = a + b;

document.body.textContent = c.toString();


let user = "Jane User";
document.body.textContent = greeter(user);*/

function Összeadás(a: number, b: number): number {
    return a + b;
}

function Kivonás(a: number, b: number): number {
    return a - b;
}

function Számolás() {
    let a = Number((document.getElementById('a') as HTMLInputElement).value); 
    let b = Number((document.getElementById('b') as HTMLInputElement).value);
    let plusz = (document.getElementById('plusz') as HTMLInputElement).checked;
    let c: Number;
    if (plusz === true) {
        c = Összeadás(a, b);
    } else {
        c = Kivonás(a, b);
    }
    (document.getElementById('c') as HTMLInputElement).value = c.toString();
}

document.getElementById("számolás")?.addEventListener("click" ,Számolás);