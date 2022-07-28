
let n = parseInt(prompt("eded daxil edin:"));
divided7(n);
function divided7(n) {
    if (n % 7 == 0) {
        return console.log("eded 7-e bolunur");
    }
    else {
        let res = n % 7
        if (res > 3) {
            return console.log(n + (7 - res));;

        }
        else {
            return console.log(n - res);
        }
    }

}

let a = parseInt(prompt("eded daxil edin: "))

if (a < 50) {

    alert(parseInt(a / 3));
}
else if (a < 100) {
    alert(parseInt(a / 5));
}
else {
    alert(parseInt(1 / 8));
}