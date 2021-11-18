//define random Number
let rn = 0;

function definern() {
    rn = Math.floor(Math.random() * (3 - 1 + 1) + 1);
};
definern();

//define bot
let bot = 0;
definebot();

function definebot() {

    if (rn == 1) {
        bot = "r";

    };

    if (rn == 2) {
        bot = "p";
    };

    if (rn == 3) {
        bot = "s";
    };

    if (rn > 3) {
        console.log("error")
    }
    console.log(bot)
};


//define player

let player = 0;

function cr() {
    player = "r";
    console.log(player);
    game();
};

function cp() {
    player = "p";
    console.log(player);
    game();
};

function cs() {
    player = "s";
    console.log(player);
    game();
};


//result

let result = "error";

function game() {
    if (bot + player === "rr" || bot + player === "pp" || bot + player === "ss") {
        result = "draw";
    }
    if (bot + player === "rp" || bot + player === "ps" || bot + player === "sr") {
        result = "won";
    }
    if (bot + player === "rs" || bot + player === "pr" || bot + player === "sp") {
        result = "lost";
    }
    console.log("result: " + result);
    getHTML();
};

//getHTML
function getHTML() {
    document.getElementById("result").innerHTML = printresult();
};

//Result ausgeben ins HTML
let html = "";

function printresult() {
    html = result;
    return html;
};

//redefine bot
function tryagain() {
    rn = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    definebot();
};


//delete html
document.getElementById("button").addEventListener("click", function() {
    gethtmldelete();
    tryagain();
});

function gethtmldelete() {
    document.getElementById("result").innerHTML = htmldelete();
};

function htmldelete() {
    html = "";
    return html;
};