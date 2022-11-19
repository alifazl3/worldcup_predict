var groupStep = [
    ["qatar", "ecuador", "senegal", "netherlands"],
    ["argentina", "saudi arabia", "mexico", "poland"],
    ["spain", "costa rica", "germany", "japan"],
    ["brazil", "serbia", "switzerland", "cameroon"],
    ['england', 'iran', 'usa', 'wales'],
    ["france", "australia", "denmark", "tunisia"],
    ['belgium', 'canada', 'morocco', 'croatia'],
    ["portugal", "ghana", "uruguay", "Korea"]

];

var groups_data = {
    "1": {"top": 80, "left": 30},
    "2": {"top": 275, "left": 30},
    "3": {"top": 470, "left": 30},
    "4": {"top": 665, "left": 30},
    "5": {"top": 80, "left": 1200},
    "6": {"top": 275, "left": 1200},
    "7": {"top": 470, "left": 1200},
    "8": {"top": 665, "left": 1200}
};

// init


function nameGroup ( name ) {
    
    let group_name = document.createElement( 'p' );
    group_name.className = 'name-group';
    group_name.id = 'group' + name;
    group_name.textContent = 'Group ' + name;

    document.body.appendChild(group_name);

}


function add_group_flag(cName, groupNo, teamNo) {
    let img_container = document.createElement("div");
    img_container.className = "img_container";
    img_container.id = cName;

    (teamNo > 2) ? img_container.style.top = groups_data[groupNo]['top'] + 75 + "px" : img_container.style.top = groups_data[groupNo]['top'] + "px";


    img_container.style.left = groups_data[groupNo]['left'] + 140 * (teamNo % 2) + "px";
    // img_container.onclick = "l2_pusher(" + cName + "," + groupNo + ")";
    img_container.setAttribute("onclick", `l2_pusher('${cName}',${groupNo})`);
    let img = document.createElement("img");
    img.src = "assets/img/flag/" + cName + ".png";
    let name = document.createElement("h6");
    name.innerText = cName;

    img_container.appendChild(img);
    img_container.appendChild(name);
    document.body.appendChild(img_container);


}

for (let groupNo = 0; groupNo < groupStep.length; groupNo++) {
    for (let teamNo = 0; teamNo < 4; teamNo++) {
        add_group_flag(groupStep[groupNo][teamNo], groupNo + 1, teamNo + 1);
    }
}

// l2

var l2_pos = {
    "1": {"top": [80, 150], "left": [360, 1010]},
    "2": {"top": [270, 340], "left": [360, 1010]},
    "3": {"top": [460, 540], "left": [360, 1010]},
    "4": {"top": [660, 740], "left": [360, 1010]},
    "5": {"top": [80, 150], "left": [1010, 360]},
    "6": {"top": [270, 340], "left": [1010, 360]},
    "7": {"top": [460, 540], "left": [1010, 360]},
    "8": {"top": [660, 740], "left": [1010, 360]},
}
var l2 = [
    [],
    [],
    [],
    [],
    [],

    [],
    [],
    [],
    []
];

function l2_pusher(name, group) {
    if (l2[group - 1].length === 2) {
        l2[group - 1] = [];
    }
    l2[group - 1].push(name)
    l2_render();
}

function l2_render() {
    const flags = document.querySelectorAll('.l2');

    flags.forEach(flag => {
        flag.remove();
    });

    for (let i = 0; i < l2.length; i++) {
        for (let rank = 0; rank < l2[i].length; rank++) {
            let img_container = document.createElement("div");
            img_container.className = "img_container l2";
            img_container.style.top = l2_pos[i + 1]['top'][rank] + "px";
            img_container.setAttribute("onclick", `l3_pusher('${l2[i][rank]}',${i + 1},${rank + 1})`)
            img_container.style.left = l2_pos[i + 1]['left'][rank] + "px";

            let img = document.createElement("img");
            img.src = "assets/img/flag/" + l2[i][rank] + ".png";
            let name = document.createElement("h6");
            name.innerText = l2[i][rank];

            img_container.appendChild(img);
            img_container.appendChild(name);
            document.body.appendChild(img_container);
        }
    }
}

// l3

var l3_pos = {
    "1": [{"top": 125, "left": 470,"l4_sit":1}, {"top": 125, "left": 890,"l4_sit":2}],
    "2": [{"top": 300, "left": 470,"l4_sit":1}, {"top": 300, "left": 890,"l4_sit":2}],
    "3": [{"top": 500, "left": 470,"l4_sit":3}, {"top": 500, "left": 890,"l4_sit":4}],
    "4": [{"top": 700, "left": 470,"l4_sit":3}, {"top": 700, "left": 890,"l4_sit":4}],
    "5": [{"top": 125, "left": 890,"l4_sit":2}, {"top": 125, "left": 470,"l4_sit":1}],
    "6": [{"top": 300, "left": 890,"l4_sit":2}, {"top": 300, "left": 470,"l4_sit":1}],
    "7": [{"top": 500, "left": 890,"l4_sit":4}, {"top": 500, "left": 470,"l4_sit":3}],
    "8": [{"top": 700, "left": 890,"l4_sit":4}, {"top": 700, "left": 470,"l4_sit":3}]
}
var l3 = [
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],

    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""]
];


function l3_pusher(name, group, rank) {
    l3[group-1][rank-1] = name;
    l3_render();
    return true;
}


function l3_render() {

    const flags = document.querySelectorAll('.l3');
    flags.forEach(flag => {
        flag.remove();
    });


    for (let i = 0; i < l3.length; i++) {
        for (let rank = 0; rank < 2; rank++) {
            if (l3[i][rank] === "") {
                continue;
            }

            let img_container = document.createElement("div");
            img_container.className = "img_container l3";
            img_container.style.top = l3_pos[i + 1][rank]['top'] + "px";
            img_container.setAttribute("onclick", `l4_pusher('${l3[i][rank]}',${l3_pos[i+1][rank]['l4_sit']})`)
            img_container.style.left = l3_pos[i + 1][rank]['left'] + "px";

            let img = document.createElement("img");
            img.src = "assets/img/flag/" + l3[i][rank] + ".png";
            let name = document.createElement("h6");
            name.innerText = l3[i][rank];

            img_container.appendChild(img);
            img_container.appendChild(name);
            document.body.appendChild(img_container);
        }
    }
}

// l4


var l4_pos = {
    "1": {"top": 225, "left": 600},
    "2": {"top": 225, "left": 760},
    "3": {"top": 600, "left": 600},
    "4": {"top": 600, "left": 760}
}
var l4 = ["","","",""];


function l4_pusher(name,sit) {
    l4[sit-1] = name;
    l4_render();
    return true;
}


function l4_render() {

    const flags = document.querySelectorAll('.l4');
    flags.forEach(flag => {
        flag.remove();
    });


    for (let i = 0; i < l4.length; i++) {
            if (l4[i] === "") {
                continue;
            }

            let img_container = document.createElement("div");
            img_container.className = "img_container l4";
            img_container.style.top = l4_pos[i + 1]['top'] + "px";
            img_container.setAttribute("onclick", `l5_pusher('${l4[i]}',${i%2})`)
            img_container.style.left = l4_pos[i + 1]['left'] + "px";

            let img = document.createElement("img");
            img.src = "assets/img/flag/" + l4[i] + ".png";
            let name = document.createElement("h6");
            name.innerText = l4[i];

            img_container.appendChild(img);
            img_container.appendChild(name);
            document.body.appendChild(img_container);
    }
}

//l5

var l5_pos = {
    "1": {"top": 410, "left": 500},
    "2": {"top": 410, "left": 850}
}
var l5 = ["",""];


function l5_pusher(name,sit) {
    l5[sit] = name;
    l5_render();
    return true;
}


function l5_render() {

    const flags = document.querySelectorAll('.l5');
    flags.forEach(flag => {
        flag.remove();
    });


    for (let i = 0; i < l5.length; i++) {
        if (l5[i] === "") {
            continue;
        }

        let img_container = document.createElement("div");
        img_container.className = "img_container l5";
        img_container.style.top = l5_pos[i + 1]['top'] + "px";
        img_container.setAttribute("onclick", `l6('${l5[i]}')`);
        img_container.style.left = l5_pos[i + 1]['left'] + "px";

        let img = document.createElement("img");
        img.src = "assets/img/flag/" + l5[i] + ".png";
        let name = document.createElement("h6");
        name.innerText = l5[i];

        img_container.appendChild(img);
        img_container.appendChild(name);
        document.body.appendChild(img_container);
    }
}
// l6



function l6(cname){

    let flag = document.getElementsByClassName("l6")[0];
if (flag!==undefined){
    flag.remove();
}
    let img_container = document.createElement("div");
    img_container.className = "img_container l6";
    img_container.style.top = "410px";
    img_container.style.left = "690px";

    let img = document.createElement("img");
    img.src = "assets/img/flag/" + cname + ".png";
    let name = document.createElement("h6");
    name.innerText = cname;

    img_container.appendChild(img);
    img_container.appendChild(name);
    document.body.appendChild(img_container);
}

nameGroup('A');
nameGroup('B');
nameGroup('C');
nameGroup('D');
nameGroup('E');
nameGroup('F');
nameGroup('G');
nameGroup('H');