function age_fill()
{
    var dob = document.getElementById("b_dob").value?document.getElementById("b_dob").value:undefined;  
    if(dob==undefined){
        document.getElementById("sdob").innerHTML ="**Please select here";
          f=1;
        }else{
    const c_date= new Date();
    var c_year=c_date.toDateString();
    var year1=Number(c_year.slice(11,15));
    var year2=Number(dob.slice(0,4));
    var x=document.getElementById("b_age");
    x.value=year1-year2;
    var y= document.getElementById("b_dob1");
    y.value=(year2);
        }
}
function agc()
{
    const c_date= new Date();
    var c_year=c_date.toDateString();
    var year1=Number(c_year.slice(11,15));
   // var year2=Number(dob.slice(0,4));
    var age=document.getElementById('b_age').value;
    var x= document.getElementById("b_dob1");
    x.value=(year1-age);
}
function y(){
    const c_date= new Date();
    var c_year=c_date.toDateString();
    var year1=Number(c_year.slice(11,15));
    var ye=document.getElementById('b_dob1').value;
    var x=document.getElementById("b_age");
    x.value=year1-ye;
}
function val(){
    var x= document.getElementById('b_age').value;
    var y=document.getElementById('b_dob1').value;
    if(x>100){
        document.getElementById('var1').innerHTML="**Age Not Possible";
        document.getElementById('b_dob1').style.display="none";
        document.getElementById('b2').innerHTML=`<input type="text" style="height: 30px;
        width:20px;
        margin-left: 0px;
        margin-top:10px;"></input>`;
    }else if(y.length>=5 || y.length<4){
        document.getElementById('var2').innerHTML="**Enter valid Year";
        document.getElementById('b_age').style.display="none";
        document.getElementById('b1').innerHTML=`<input type="text" style="    height: 30px;
        width: 300px;
        margin-left: 0px;
        margin-top:10px;"></input>`;
    }
    document.getElementById('l').innerHTML="Refresh page to continue";
}