var datemap=new Map();
var tableDUB=new Map();
tableDUB.set("dubtable1",[]);
tableDUB.set("dubtable2",[]);
var tableFOUR=new Map();
tableFOUR.set("fourtable1",[]);
tableFOUR.set("fourtable2",[]);
var tableSIX=new Map();
tableSIX.set("sixtable1",[]);
tableSIX.set("sixtable2",[]);
let allbooking=[tableDUB,tableFOUR,tableSIX];

function book(){
    var date=document.getElementById("date").vallue;
    var starttime=document.getElementById("starttime").value;
    var endtime=document.getElementById("endtime").value;
    var seat=document.getElementById("forseat").value;
    const obj={
        startTime:starttime,
        endTime:endtime
    }
    if(seat==2)
    {
        let arr=tableDUB.get("dubtable1");
        let arr2=tableDUB.get("dubtable2");
        if(arr.length==0){
            arr.push(obj);
            let booked = document.getElementById("display");
            booked.innerHTML += starttime + " to " + endtime + "for seat :"+seat+ "<br>";
        }
        else if(arr2.length==0){
            arr2.push(obj);
            let booked = document.getElementById("display");
            booked.innerHTML += starttime + " to " + endtime + "for seat :"+seat+ "<br>";
        }
        else{ 
            let i=0;
            for(i=0;i<arr.length;i++){
                if(arr[i].startTime<=starttime  && arr[i].endTime>=starttime ){
                    checkforsecond();
                }
                else{
                    arr.push(obj);
                    let booked = document.getElementById("display");
                    booked.innerHTML += starttime + " to " + endtime + "for seat :"+seat+ "<br>";
                    break;
                }
            }
            function checkforsecond(){
                for(i=0;i<arr2.length;i++){
                    if(arr2[i].startTime<=starttime  && arr2[i].endTime>=starttime ){
                        window.alert("No Seats");
                    }
                    else{
                        arr2.push(obj);
                        let booked = document.getElementById("display");
                        booked.innerHTML += starttime + " to " + endtime + "for seat :"+seat+ "<br>";
                        break;
                    }
                }
            }
        }
        
    }

}