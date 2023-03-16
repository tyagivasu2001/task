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
console.log(tableDUB);


function book(){
    var date=document.getElementById("date").value;
    var starttime=document.getElementById("starttime").value;
    var endtime=document.getElementById("endtime").value;
    var seat=document.getElementById("forseat").value;
    let obj={
        start:starttime,
        end:endtime
    }
    
    if(!localStorage.getItem(date)){
        localStorage.setItem(date,JSON.stringify(allbooking));
        
    }
    else{ 
         
        if(seat==2){
            let map=JSON.parse(localStorage.getItem(date));

            let dmap=map[0];
            console.log(map);
            console.log(dmap);
            
            if(dmap.get("dubtable1").length==0){
                let arr1=[];
            }
            if(dmap.get("dubtable2").length==0){
                let arr2=[];
            }
            else{
                let arr1=dmap.get("dubtable1");
                let arr2=dmap.get("dubtable2");
            }
            
            if(arr1.length==0){
                arr1.push(obj);
                let booked = document.getElementById("display");
                booked.innerHTML += starttime + " to " + endtime + " for seat :"+seat+ "<br>";
            }
            let flag=false;
            for(let i=0;i<arr1.length;i++){
                if(arr1[i].start<=starttime  && arr1[i].end>=starttime || arr1[i].end<=endtime && arr1[i].end>=endtime){
                    flag=true;
                    break;
                }
            }
            if(flag==false){
                arr1.push(obj);
                let booked = document.getElementById("display");
                booked.innerHTML += starttime + " to " + endtime + " for seat :"+seat+ "<br>";
            }
            else if(flag==false){
                for(let i=0;i<arr2.length;i++){
                    if(arr2[i].start<=starttime  && arr2[i].end>=starttime || arr2[i].end<=endtime && arr2[i].end>=endtime){
                        window.alert("Seats are Full");
                    }
                    else{
                        flag=true;
                    }
                }
                
                if(flag==true){
                    arr2.push(obj);
                    let booked = document.getElementById("display");
                    booked.innerHTML += starttime + " to " + endtime + " for seat :"+seat+ "<br>";
                }
                
            }




        }












    }
   
}