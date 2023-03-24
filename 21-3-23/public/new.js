localStorage.clear();
function book() {
    let date = document.getElementById("date").value;
    let time = document.getElementById("timebook").value;
    let seat = document.getElementById("forseat").value;
    if (date == "") {
        alert("Please Select Date");
    }
    else {
        let key = date + seat;
        let val = localStorage.getItem(key);
        const object = {
            date: date,
            time: time,
            table: seat
        }
        if (val != null) {
            let arr = val.split('#');
            
            if (arr.indexOf(time) >= 0) {
                alert("Seat Full");
                return;
            }
            else {
                val += time + '#';
                setdata(object);
            }

        }
        else {
            val = time + '#';
            setdata(object);

        }
        localStorage.setItem(key, val);
        display(date, time, seat);
        getCurrentObj();
    }
}


function display(date, time, seat) {
    const para = document.createElement("div");
    para.setAttribute("id", date + time + seat);
    const line = document.createElement("p");
    line.innerHTML = seat + ": is  Booked  for: " + date + " Between slot: " + time;
    para.appendChild(line);
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.setAttribute("onclick", "Delete(" + JSON.stringify(date) + "," + JSON.stringify(time) + "," + JSON.stringify(seat) + ")");
    para.appendChild(button);
    let x = document.getElementById("display");
    x.appendChild(para);

}

function Delete(date, time, seat) {
    let key = date + seat;
    const obj = {
        date: date,
        time: time,
        table: seat
    }
    deletedata(obj);
    let value = localStorage.getItem(key);
    let items = value.split('#');
    let index = items.indexOf(time);
    items.splice(index, 1);
    let str = "";
    for (let i = 0; i < items.length; i++) {
        str += items[i] + '#';
    }
    localStorage.setItem(key, str);
    let id = date + time + seat;
    document.getElementById(id).remove();
}


function datevalidate() {
    let todaydate = document.getElementById("date");
    let date = new Date();
    let str = date.toISOString();
    todaydate.setAttribute("min", str.substr(0, 10));
    console.log(str);

}
async function deletedata(obj) {
    const url = `http://localhost:3000/delete/`;
    const a = await (await fetch(url + JSON.stringify(obj), {
        method: 'POST',
        headers: {
            "Content-Type": "apllication/json"
        }
    }));

}

async function finddata(obj) {
    const url = `http://localhost:3000/presenttable/`;
    await fetch(url + JSON.stringify(obj), {
        method: 'POST',
        headers: {
            "Content-Type": "apllication/json"
        }
    });
}
async function searchResult(obj) {
    finddata(obj);
    const searchURL = `http://localhost:3000/search/`;
    const str = await fetch(searchURL, {
        method: 'GET'
    })
        .then(
            res => res.json()
        )
        .then(
            data => data
        );
    string = str;
}
async function setdata(obj) {
    const url = `http://localhost:3000/put/`;
    const a = await (await fetch(url + JSON.stringify(obj), {
        method: 'POST',
        headers: {
            "Content-Type": "apllication/json"
        }
    }));

}
async function getCurrentObj() {
    const url = `http://localhost:3000/display/`;
    const obj = await fetch(url, {
        method: 'GET'
    })
        .then(
            res => res.json()
        )
        .then(
            data => data
        );
    return obj;
}