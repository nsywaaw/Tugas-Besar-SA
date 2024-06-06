document.getElementById("greedyButton").addEventListener("click", () => {
    const schedule = solveExamScheduling("greedy");  
    displaySchedule(schedule);  
    displayGraph(schedule); 
});

document.getElementById("backtrackingButton").addEventListener("click", () => {
    const schedule = solveExamScheduling("backtracking");  
    displaySchedule(schedule);  
    displayGraph(schedule); 
});

const courses = ["Strategi Algoritma", "IuM", "VVPL", "Tata Tulis", "RPL", "IMK", "TBA", "Inggris untuk Karir", "PKB", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Kalkulus Lanjut", "Jaringan Komputer", "MP", "PenPro", "Forensik Digital", "SPR", "APJK", "Sosio", "ABP", "Struktur Data"];

const students = {
    "Raden": ["Strategi Algoritma"],
    "Rafif": ["Strategi Algoritma"],
    "Aditya": ["Strategi Algoritma"],
    "Ridho": ["Strategi Algoritma"],
    "Rizqi": ["Strategi Algoritma", "TBA", "Kalkulus Lanjut", "PKB", "Sistem Operasi", "Tata Tulis", "Inggris untuk Karir"],
    "Mufidah": ["Strategi Algoritma", "IuM"],
    "Yuris": ["Strategi Algoritma"],
    "Ricky": ["Strategi Algoritma", "APJK", "SPR", "Forensik Digital", "Tata Tulis", "TBA", "IuM"] ,
    "Dicky": ["Strategi Algoritma", "MP", "VVPL", "PenPro", "Tata Tulis", "IuM"] ,
    "Aktsa": ["Strategi Algoritma", "ABP", "RPL", "MP", "Inggris untuk Karir", "Tata Tulis", "Sosio", "IuM"],
    "Ilyas": ["Strategi Algoritma", "Sosio", "IuM"],
    "Adam": ["Strategi Algoritma"],
    "Bagus": ["Strategi Algoritma"],
    "Ariiq": ["Strategi Algoritma", "Tata Tulis", "Sosio"],
    "Pradipa": ["Strategi Algoritma"],
    "Alviko": ["Strategi Algoritma", "Inggris untuk Presentasi", "Kewarganegaraan", "Sistem Operasi", "Jaringan Komputer"],
    "Claintont": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Isteu": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"] ,
    "Shafa": ["Strategi Algoritma", "Kewarganegaraan", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Salma": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Ghifary": ["Strategi Algoritma", "Kewarganegaraan", "Sistem Operasi", "Jaringan Komputer", "PKB", "TBA", "RPL", "IMK"],
    "Zul": ["Strategi Algoritma", "Kewarganegaraan", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Jason": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Kenza": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Ajax": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Farrel": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Ibrahim": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Diva": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Hibban": ["Strategi Algoritma", "Sistem Operasi", "Jaringan Komputer", "PKB", "TBA"],
    "Andira": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Nabil": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Altaf":  ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Muthia": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Naufal": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Abrar": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Azra": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Erwin":["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Khidir": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Rapli": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Alif": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Ahmad":["Strategi Algoritma", "Kewarganegaraan", "RPL", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB" ,"TBA"],
    "Farah": ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Mika":["Strategi Algoritma", "Kewarganegaraan", "RPL", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"],
    "Vio":["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "PKB", "Struktur Data"],
    "Dzaki": ["Strategi Algoritma", "Kewarganegaraan", "Sistem Operasi", "Jaringan Komputer", "RPL", "PKB", "TBA"],
    "Fabian": ["Strategi Algoritma", "Kewarganegaraan", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA", "RPL"],
    "Steven":  ["Strategi Algoritma", "Kewarganegaraan", "Inggris untuk Presentasi", "Sistem Operasi", "Jaringan Komputer", "IMK", "PKB", "TBA"] 
};

const timeslots = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10"];
const rooms = ["R1", "R2", "R3", "R4", "R5"];
const graph = generateConflictGraph(students);

function generateConflictGraph(students) {
    const graph = {};

    courses.forEach(course => {
        graph[course] = new Set();
    });

    for (let student in students) {
        const studentCourses = students[student];
        for (let i = 0; i < studentCourses.length; i++) {
            for (let j = i + 1; j < studentCourses.length; j++) {
                graph[studentCourses[i]].add(studentCourses[j]);  
                graph[studentCourses[j]].add(studentCourses[i]); 
            }
        }
    }

    return graph;
}

function solveExamScheduling(method) {
    if (method === "greedy") {
        return solveWithGreedy();  
    } else {
        return solveWithBacktracking();  
    }
}

function solveWithGreedy() {
    const schedule = {};
    const availableSlots = timeslots.reduce((acc, slot) => {
        rooms.forEach(room => {
            acc.push({ slot, room });  
        });
        return acc;
    }, []);

    courses.forEach(course => {
        for (let { slot, room } of availableSlots) {
            if (isValidSchedule(course, slot, room, schedule)) {  
                schedule[course] = { slot, room }; 
                break;
            }
        }
    });

    return schedule;
}

function solveWithBacktracking(schedule = {}, courseIndex = 0) {
    if (courseIndex === courses.length) {  
        return schedule; 
    }

    const course = courses[courseIndex];
    for (let slot of timeslots) {
        for (let room of rooms) {
            if (isValidSchedule(course, slot, room, schedule)) {  
                schedule[course] = { slot, room }; 
                const result = solveWithBacktracking(schedule, courseIndex + 1);  
                if (result) return result; 
                delete schedule[course];  
            }
        }
    }

    return null;
}

function isValidSchedule(course, slot, room, schedule) {
    for (let scheduledCourse in schedule) {
        const { slot: scheduledSlot, room: scheduledRoom } = schedule[scheduledCourse];
        if (slot === scheduledSlot && room === scheduledRoom) {  
            return false;
        }
        if (graph[course].has(scheduledCourse) && slot === scheduledSlot) {  
            return false;
        }
    }
    return true;  
}

function displaySchedule(schedule) {
    timeslots.forEach(slot => {
        rooms.forEach(room => {
            document.getElementById(`${slot}${room}`).innerText = ""; 
        });
    });

    for (let course in schedule) {
        const { slot, room } = schedule[course];
        document.getElementById(`${slot}${room}`).innerText = course;
    }
}

function displayGraph(schedule) {
    const graphContainer = document.getElementById("graph");
    graphContainer.innerHTML = "";  

    const nodePositions = {};
    const containerRect = graphContainer.getBoundingClientRect();
    const radius = 300;  

    courses.forEach((course, index) => {
        const node = document.createElement("div");
        node.classList.add("node");
        node.innerText = course;

        
        const angle = (index / courses.length) * 2 * Math.PI;
        const x = containerRect.width / 2 + Math.cos(angle) * radius - 30;
        const y = containerRect.height / 2 + Math.sin(angle) * radius - 30;
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;

        graphContainer.appendChild(node); 
        nodePositions[course] = node;  
    });

    const edges = [];
    courses.forEach(course => {
        graph[course].forEach(neighbor => {
            if (courses.indexOf(course) < courses.indexOf(neighbor)) {  
                const edge = document.createElement("div");
                edge.classList.add("edge");
                graphContainer.appendChild(edge); 

                const pos1 = nodePositions[course].getBoundingClientRect();
                const pos2 = nodePositions[neighbor].getBoundingClientRect();

                const x1 = pos1.left + pos1.width / 2 - containerRect.left;
                const y1 = pos1.top + pos1.height / 2 - containerRect.top;
                const x2 = pos2.left + pos2.width / 2 - containerRect.left;
                const y2 = pos2.top + pos2.height / 2 - containerRect.top;

                const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); 
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;  

                edge.style.setProperty('--target-width', `${length}px`);
                edge.style.transform = `rotate(${angle}deg)`;  
                edge.style.left = `${x1}px`;  
                edge.style.top = `${y1}px`;  

                edges.push(edge);  
            }
        });
    });

    animateEdgeDrawingSequentially(edges, () => {
        setTimeout(() => {
            animateNodeColorSequentially(schedule, nodePositions);
        }, 1000);
    });
}

function animateEdgeDrawingSequentially(edges, callback) {
    let index = 0;

    function animateNextEdge() {
        if (index >= edges.length) {
            if (callback) callback();
            return;
        }

        const edge = edges[index];
        edge.classList.add('draw');

        index++;
        setTimeout(animateNextEdge, 500);
    }

    animateNextEdge();
}

function animateNodeColorSequentially(schedule, nodePositions) {
    let index = 0;

    function animateNextNode() {
        if (index >= courses.length) return;

        const course = courses[index];
        const node = nodePositions[course];

        if (schedule[course]) {  
            const color = getColorForSlot(schedule[course].slot); 
            node.style.setProperty('--target-color', color);
            node.classList.add('color-animate');
        }

        index++;
        setTimeout(animateNextNode, 500);
    }

    animateNextNode();
}

function getColorForSlot(slot) {
    switch (slot) {
        case "S1": return "aqua";
        case "S2": return "aquamarine";
        case "S3": return "aliceblue";
        case "S4": return "antiquewhite";
        case "S5": return "pink";
        case "S6": return "orange";
        case "S7": return "violet";
        case "S8": return "red";
        case "S9": return "yellow";
        case "S10": return "blue";
        default: return "white";
    }
}