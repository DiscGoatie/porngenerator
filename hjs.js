var id,
    power,
    i,
    powerc = [0],
    powerl = 0,
    idc = [0],
    sauce,
    saucec = [0],
    saucel = 0,
    idl = 0;
    id2 = 0,
    id2c = []
    id2l = 0
    url = "https://nhentai.net/g/",
    fc = [],
    fl = 0,
    el = 0,
    bc = [],
    totalcodes = 10,
    maxCode = 304011;

for (i=1; i < totalcodes + 1; i++) {
    power = 0;
    power = Math.round(Math.random()*2)+5;
    while (power>6) {
        power = power - 1 
    };
    powerc.push(power);
}

for (i=1; i < totalcodes + 1; i++) { 
    id = 0;
    id = (Math.random()*.9);
    if (id<0.1) {
        id = id*10
    }
    idc.push(id);
}

for (i=0; i < totalcodes + 1; i++) {
    id2 = 0;
    id2 = Math.round(Math.pow(10, powerc[powerl++]) * idc[idl++]);
    while (id2>maxCode) {
        id2 = id2 / 1.3
    };
    id2c.push(Math.round(id2));
}
for (i=0; i < totalcodes + 1; i++){
var e = id2c[el++].toString(10);
var b = url + e;
bc.push(b);
}

var e1 = id2c[1].toString(10);
var b1 = url + e1;

    document.getElementById("sauce1").href = bc[1]
    document.getElementById("sauce1").innerHTML = id2c[1];
    document.getElementById("sauce2").href = bc[2];
    document.getElementById("sauce2").innerHTML = id2c[2];
    document.getElementById("sauce3").href = bc[3];
    document.getElementById("sauce3").innerHTML = id2c[3];
    document.getElementById("sauce4").href = bc[4];
    document.getElementById("sauce4").innerHTML = id2c[4];
    document.getElementById("sauce5").href = bc[5];
    document.getElementById("sauce5").innerHTML = id2c[5];    document.getElementById("sauce6").href = bc[6]
    document.getElementById("sauce6").innerHTML = id2c[6];
    document.getElementById("sauce7").href = bc[7];
    document.getElementById("sauce7").innerHTML = id2c[7];
    document.getElementById("sauce8").href = bc[8];
    document.getElementById("sauce8").innerHTML = id2c[8];
    document.getElementById("sauce9").href = bc[9];
    document.getElementById("sauce9").innerHTML = id2c[9];
    document.getElementById("sauce10").href = bc[10];
    document.getElementById("sauce10").innerHTML = id2c[10];

//for (i=0; i < 20; i++) {
//test = 0;
//test = (Math.random()*.9) / 3;
//testc.push(test);
//}