var a, b=1; var id=""; var text=""; var text2="";
var son,sayi1,sayi2;

var islemText = document.createElement("input");
islemText.setAttribute("id","Text1");
islemText.setAttribute("type","text");
islemText.setAttribute("onfocus","Text1focus()");
islemText.setAttribute("style","height:30px;width:200px");
document.body.appendChild(islemText);

function Text1focus(){
    id="Text1";
}
document.writeln("<br>")
    for(var j=0; j<17; j++){
        var buton=document.createElement("button");
        buton.setAttribute("id","btn"+j);
        buton.setAttribute("type","button");
        buton.setAttribute("onclick","tikla")
        buton.setAttribute("style","height:40px;width:40px");
        buton.style.backgroundColor="red";
        buton.innerHTML=b;
        if(j%4==0){
        document.writeln("<br/>")
        }
        if(b==4){
            buton.innerHTML="C";
        }
        if(b==5){
            buton.innerHTML=4;
        }
        if(b==6){
            buton.innerHTML=5;
        }
        if(b==7){
            buton.innerHTML=6;
        }
        if(b==8){
            buton.innerHTML="+";
        }
        if(b==9){
            buton.innerHTML=7;
        }
        if(b==10){
            buton.innerHTML=8;
        }
        if(b==11){
            buton.innerHTML=9;
        }
        if(b==12){
            buton.innerHTML="-"
        }

        if(b==13){
            buton.innerHTML=0;
        }
        if(b==14){
            buton.innerHTML=".";
        }

        if(b==15){
            buton.innerHTML="/";
        }
        if(b==16){
            buton.innerHTML="*";
        }
        if(b==17){
            buton.innerHTML="=";
        }
        document.body.appendChild(buton);
        b++;
    }




    