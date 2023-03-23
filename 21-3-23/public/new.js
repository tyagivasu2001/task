localStorage.clear();


function book() {
    const obj = {
        date: String,
        time: String,
        seat: String
    }
    let date = document.getElementById("date").value;
    let time = document.getElementById("timebook").value;
    let seat = document.getElementById("forseat").value;
    if (date == "") {
        alert("Please Select Date");
    }
    else {


        let key = date + seat;
        let val = localStorage.getItem(key);
        let flag = true;
        obj.date = date;
        obj.time = time;
        obj.seat = seat;


        async function checkTable() {


            const url = `http://localhost:3000/find/`;
            const response = await fetch(url + JSON.stringify(obj), {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            console.log(response);
        }

        if (val != null) {
            let arr = val.split('#');
            if (arr.indexOf(time) >= 0) {
                alert("Seat Full");
                return;
            }
            else {
                val += time + '#';
                //----------------------------------Insert Call
                setData(obj);
            }
        }
        else {
            val = time + '#';
            //------------------------------------Insert Call
            setData(obj);
        }
        localStorage.setItem(key, val);
        display(date, time, seat);
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
    const obj = {
        date: String,
        time: String,
        seat: String
    }
    let key = date + seat;
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
    obj.date = date;
    obj.time = time;
    obj.seat = seat;
    //-----------------------------------------Delete Call
    deleteData(obj);
}
function datevalidate() {
    let todaydate = document.getElementById("date");
    let date = new Date();
    let str = date.toISOString();
    todaydate.setAttribute("min", str.substr(0, 10));
    console.log(str);

}

//------------------------------------------------Insert Method
async function setData(obj) {
    const url = `http://localhost:3000/setData/`;

    await fetch(url + JSON.stringify(obj), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

//----------------------------------------------------Delete method 
async function deleteData(obj) {
    const url = `http://localhost:3000/deleteData/`;
    await fetch(url + JSON.stringify(obj), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
}