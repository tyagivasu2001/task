var double=new Map();
double.set("tab1",[]);
let quad=new Map();
quad.set("tab2",[]);
let hexa=new Map();
hexa.set("tab3",[]);

function book()
{
    
    var starttime=document.getElementById("starttime").value;
    var endtime=document.getElementById("endtime").value;
    var seat=document.getElementById("forseat").value;
    if(starttime<="9:00"||starttime>="22:00"){
    window.alert("We are Closed");
    }
    else{
    const obj={
        startTime:starttime,
        endTime:endtime
    }
    if(seat==2){
        tablesdub=double.get("tab1");
        if(tablesdub.length==0){
            tablesdub.push(obj);
            let booked = document.getElementById("display");
            booked.innerHTML += starttime + " to " + endtime + "for seat :"+seat+ "<br>";
            let tabledouble_data=JSON.stringify(tablesdub);
            localStorage.setItem("doubleSeated",tabledouble_data);

        }
        else{
            let arr=JSON.parse(localStorage.getItem("doubleSeated"));
            console.log(arr.length);
            let i=0;
            for( i=0;i<arr.length;i++){
                if(arr[i].startTime<=starttime  && arr[i].endTime>=starttime || arr[i].endTime<=endtime && arr[i].endTime>=endtime){
                    window.alert("No Seats");
                }
                
            }
                if(i==arr.length-1){
                    arr.push(obj);
                    let booked = document.getElementById("display");
                    booked.innerHTML += starttime + " to " + endtime + "for seat: "+seat+ "<br>";
                    let updated_array=JSON.stringify(arr);
                    localStorage.setItem("doubleSeated",updated_array);
                }
                

                
            }
        }
        if(seat==4){
            tablesqud=quad.get("tab2");
            if(tablesqud.length==0){
                tablesqud.push(obj);
                let booked = document.getElementById("display");
                booked.innerHTML += starttime + " to " + endtime + "for seat: "+seat+ "<br>";
                let tablesqud_data=JSON.stringify(tablesqud);
                localStorage.setItem("qudSeated",tablesqud_data);
    
            }
            else{
                let arr=JSON.parse(localStorage.getItem("qudSeated"));
                console.log(arr.length);
                let i=0;
                for( i=0;i<arr.length;i++){
                    if(arr[i].startTime<=starttime  && arr[i].endTime>=starttime || arr[i].endTime<=endtime && arr[i].endTime>=endtime){
                        window.alert("No Seats");
                    }
                    
                }
                    if(i==arr.length-1){
                        arr.push(obj);
                        let booked = document.getElementById("display");
                        booked.innerHTML += starttime + " to " + endtime + "for seat: "+seat+ "<br>";
                        let updated_array=JSON.stringify(arr);
                        localStorage.setItem("qudSeated",updated_array);
                    }
                    
    
                    
                }
            }
            if(seat==6){
                tablesdub=hexa.get("tab3");
                if(tablehex.length==0){
                    tablehex.push(obj);
                    let booked = document.getElementById("display");
                    booked.innerHTML += starttime + " to " + endtime + "for seat "+seat+ "<br>";
                    let tablehex_data=JSON.stringify(tablehex);
                    localStorage.setItem("hexSeated",tablehex_data);
        
                }
                else{
                    let arr=JSON.parse(localStorage.getItem("hexSeated"));
                    console.log(arr.length);
                    var i=0;
                    for( i=0;i<arr.length;i++){
                        if(arr[i].startTime<=starttime  && arr[i].endTime>=starttime || arr[i].endTime<=endtime && arr[i].endTime>=endtime){
                            window.alert("No Seats");
                        }
                        
                    }
                        if(i==arr.length-1){
                            arr.push(obj);
                            let booked = document.getElementById("display");
                            booked.innerHTML += starttime + " to " + endtime + "for seat: "+seat+ "<br>";
                            let updated_array=JSON.stringify(arr);
                            localStorage.setItem("hexSeated",updated_array);
                        }
                        
        
                        
                    }
                }



            }
    }
    