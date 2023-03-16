localStorage.clear();

function book(){
    let date=document.getElementById("date").value;
    let time=document.getElementById("timebook").value;
    let seat=document.getElementById("forseat").value;
    if(date==""){
         alert("Please Select Date");
    }
    else{

    
    let  key=date +seat;
    let val=localStorage.getItem(key);
    if(val!=null){
        let arr=val.split('#');
        if(arr.indexOf(time)>=0){
            alert("Seat Full");
            return;
        }
        else{
            val += time+'#';


        }
        
    }
    else{
        val=time+'#';
        
    }
    localStorage.setItem(key,val);
    display(date,time,seat);
}
}
function display(date,time,seat){
    const para = document.createElement("div");
    para.setAttribute("id",date+time+seat);
    const line = document.createElement("p");
    line.innerHTML=seat +" is  Booked  on "+date+" for time slot: "+time;
    para.appendChild(line);
    const button=document.createElement("button");
    button.innerHTML="Delete";
    button.setAttribute("onclick","Delete("+JSON.stringify(date)+","+JSON.stringify(time)+","+JSON.stringify(seat)+")");
    para.appendChild(button);
    let x=document.getElementById("display");
    x.appendChild(para);
    


}

function Delete(date,time,seat){
    let key=date+seat;
    let value=localStorage.getItem(key);
    let items=value.split('#');
    let index=items.indexOf(time);
    items.splice(index,1);
    localStorage.setItem(key,items);
    let id=date+time+seat;
    document.getElementById(id).remove();
    


}