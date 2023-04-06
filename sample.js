var x1=0,x2=0,x3=0,x4=0,c=4;
document.getElementById('h').innerHTML=c;
function inc1(){
    x1=x1+1;
    document.getElementById('p1').innerHTML=x1;
    document.getElementById('p1').style.backgroundColor="aqua";
}
function inc2(){
    x2=x2+1;
    document.getElementById('p2').innerHTML=x2;
    document.getElementById('p2').style.backgroundColor="aqua";
}
function inc3(){
    x3=x3+1;
    document.getElementById('p3').innerHTML=x3;
    document.getElementById('p3').style.backgroundColor="aqua";
}
function inc4(){
    x4=x4+1;
    document.getElementById('p4').innerHTML=x4;
    document.getElementById('p4').style.backgroundColor="aqua";
}
function dec1(){
    x1=x1-1;
    if(x1<=0){
        document.getElementById('p1').innerHTML='Un-Avaliable';
        document.getElementById('p1').style.backgroundColor="yellow";
    }else{
    document.getElementById('p1').innerHTML=x1;
    }
}
function dec2(){
    x2=x2-1;
    if(x2<=0){
        document.getElementById('p2').innerHTML='Un-Avaliable';
        document.getElementById('p2').style.backgroundColor="yellow";
    }else{
    document.getElementById('p2').innerHTML=x2;
    }
}
function dec3(){
    x3=x3-1;
    if(x3<=0){
        document.getElementById('p3').innerHTML='Un-Avaliable';
        document.getElementById('p3').style.backgroundColor="yellow";
    }else{
    document.getElementById('p3').innerHTML=x3;
    }
}
function dec4(){
    x4=x4-1;
    if(x4<=0){
        document.getElementById('p4').innerHTML='Un-Avaliable';
        document.getElementById('p4').style.backgroundColor="yellow";
    }else{
    document.getElementById('p4').innerHTML=x4;
    }
}
function del1()
{
    document.getElementById('k1').style.display="none";
    document.getElementById('h').innerHTML=c-1;
    c=c-1;
}
function del2()
{
    document.getElementById('k2').style.display="none";
    document.getElementById('h').innerHTML=c-1;
    c=c-1;
}
function del3()
{
    document.getElementById('k3').style.display="none";
    document.getElementById('h').innerHTML=c-1;
    c=c-1;
}
function del4()
{
    document.getElementById('k4').style.display="none";
    document.getElementById('h').innerHTML=c-1;
    c=c-1;
}
