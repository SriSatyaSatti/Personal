const array=["","","","","","","","","",""];
var i=0;
var f=0;
var s=0;
var carno;
var space=10;
function ent(){
    f=0;
    s=0;
    carno=document.getElementById('inp').value;
    for(i=0;i<10;i++){
        if(array[i]==carno){
            alert("you have already entered with ID:"+(array.indexOf(carno)+1));
            f=1;
        }
    }
    if(space==0){
        alert("Parking is full!!!!");
        s=1;
    }
    if(s==0){
    if(f==0){
    for(i=0;i<10;i++){
        if(array[i]==""){
            break;
        }
    }
    array[i]=carno;
    space=space-1;
    alert("you have allocated with ID:"+(array.indexOf(carno)+1))
    document.getElementById(i).style.display="inline-block";
    if(i<5){
    document.getElementById(i).src="cardown.png";
    }else{
        document.getElementById(i).src="carup.png"; 
    }
   }
}
document.getElementById('pa').style.display="none";
}
function ex(){
    f=0;
    carno=document.getElementById('inp').value;
    for(i=0;i<10;i++){
        if(array[i]==carno){
            alert("Thank you");
            f=1;
            array[array.indexOf(carno)]="";
            space=space+1;
            if(i==0){
                document.getElementById(i).src="0.png";
            }
            if(i==1){
                document.getElementById(i).src="1.png";
            }
            if(i==2){
                document.getElementById(i).src="2.png";
            }
            if(i==3){
                document.getElementById(i).src="3.png";
            }
            if(i==4){
                document.getElementById(i).src="4.png";
            }
            if(i==5){
                document.getElementById(i).src="5.png";
            }
            if(i==6){
                document.getElementById(i).src="6.png";
            }
            if(i==7){
                document.getElementById(i).src="7.png";
            }
            if(i==8){
                document.getElementById(i).src="8.png";
            }
            if(i==9){
                document.getElementById(i).src="9.png";
            }
        }
    }
    if(f==0){
        alert("You have not yet entered");
    }
    document.getElementById('pa').style.display="none";
}
function dis(){
    document.getElementById('pa').innerHTML=array;
    document.getElementById('pa').style.display="block";
}
function hide(){
    document.getElementById('pa').style.display="none";
}