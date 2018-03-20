var total = 0;
var cheatCopyCat = false;
var cheatGrunger = false;
var cheatDetective = false;


function clearContent(element) {
    elements.value = "0";
}

function getTotal() {
    var inputNums = document.getElementById("inputMes").value;
    document.getElementById("resultMes").innerHTML = "";
    if (inputNums.length == 25 && inputNums.match("^[01]+$")) {
        for (i = 0; i < inputNums.length; i++) {
            if (4 >= i && i >= 0) copyCat(inputNums.charAt(i), i);
            else if (8 >= i && i >= 5) alwaysCheat(inputNums.charAt(i));
            else if (12 >= i && i >= 9) alwaysCoop(inputNums.charAt(i));
            else if (17 >= i && i >= 13) grunger(inputNums.charAt(i));
            else if (24 >= i && i >= 18) detective(inputNums.charAt(i), i);
        }
        document.getElementById("errorMes").style.visibility = "hidden";
        document.getElementById("resultMes").innerHTML = total;
        total = 0;
        cheatCopyCat = false;
        cheatGrunger = false;
        cheatDetective = false
    } else {
        document.getElementById("errorMes").style.visibility = "visible";
        document.getElementById("errorMes").innerHTML = "Your number is incorrect, try again!";
    }
}

function copyCat(num, i) {
    if (num == "0") {
        if (i == 0) {
            total += 3;
            cheatCopyCat = true;
        } else {
            if (cheatCopyCat == false) {
                total += 3;
                cheatCopyCat = true;
            } else cheatCopyCat = true;
        }
    } else {
        if (cheatCopyCat == false) total += 2;
        else {
            total -= 1;
            cheatCopyCat = false;
        }
    }
}

function alwaysCheat(num) {
    if (num == "1") total - 1;
}

function alwaysCoop(num) {
    if (num == "0") total += 3;
    else total += 2;
}

function grunger(num) {
    if (num == "0") {
        if (cheatGrunger == false) {
            total += 3;
            cheatGrunger = true;
        }
    } else {
        if (cheatGrunger == true) total -= 1;
        else total += 2;
    }
}

function detective(num, i) {
    if (i == 18) {
        if (num == "0") total += 3;
        else total += 2;
    } else if (i == 19) {
        if (num == "1") total -= 1;
    } else if (i == 20 || i == 21) {
        if (num == "0") {
            total += 3;
            cheatDetective = true;
        } else {
            total += 2;
            cheatDetective = false;
        }
    } else {
        if (num == "0") {
            if (cheatDetective == false) {
                total += 3;
                cheatDetective = true;
            }

        } else {
            if (cheatDetective == true) {
                total -= 1;
                cheatDetective = false;
            } else {
                total += 2;
                cheatDetective = false;
            }
        }
    }
}