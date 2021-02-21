const Hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const Katakana = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ";
const Roman = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"];
let progress;

function $$(id) {
    return document.getElementById(id);
}
window.onload = () => {
    progress = localStorage.getItem("progress");
    if (!progress) {
        let p;
        while (!p || p < 1 || p > 46) {
            p = window.prompt("请输入当前学习进度（1~46）");
        }
        localStorage.setItem("progress", p);
    }
}

function deploy() {
    let num = $$("num").value;
    $$("initial").style.display = "none";
    if (num > 0 && num < 11) {
        $$("problemset").style.display = "block";
        $$("current").innerHTML = Hiragana[progress - 1];
        summon(num);
    }
}

function reset() {
    let p;
    while (!p || p < 1 || p > 46) {
        p = window.prompt("请输入当前学习进度（1~46）");
    }
    localStorage.setItem("progress", p);
    progress = p;
}

function show() {
    let p = $$("table");
    p.style.display = "block";
    $$("initial").style.display = "none";
    p.innerHTML = "";
    for (let i = 0; i < 46; i++) {
        p.innerHTML += Hiragana[i] + " " + Katakana[i] + " " + Roman[i] + "<br>";
    }
}

function summon(x) {
    let hir = $$("hir");
    let kat = $$("kat");
    let rom = $$("rom");
    let h = [];
    let k = [];
    let r = [];
    let num = [];
    while (x--) {
        let ord = Math.floor(Math.random() * progress);
        num.push(ord);
    }
    for (let i = 0; i < num.length; i++) {
        h.push(Hiragana[num[i]]);
        k.push(Katakana[num[i]]);
        r.push(Roman[num[i]]);
    }
    hir.innerHTML = h.join(" ");
    kat.innerHTML = k.join(" ");
    rom.innerHTML = r.join(" ");
}

$$("toggleHir").addEventListener("click", function() {
    let h = $$("hiragana");
    if (h.style.display == "none") {
        h.style.display = "block";
    } else {
        h.style.display = "none";
    }
});
$$("toggleKat").addEventListener("click", function() {
    let h = $$("katakana");
    if (h.style.display == "none") {
        h.style.display = "block";
    } else {
        h.style.display = "none";
    }
});
$$("toggleRom").addEventListener("click", function() {
    let h = $$("roman");
    if (h.style.display == "none") {
        h.style.display = "block";
    } else {
        h.style.display = "none";
    }
});