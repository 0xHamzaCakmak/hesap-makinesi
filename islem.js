
butonclick=document.getElementById("btn7");
butonclick.onclick= function(){
    text+="+";
    a=text.indexOf("+");
    text=text.slice(0,a);
    text2=text.replace(text,text+"+");
    document.getElementById("Text1").value=text2;
}

butonclick=document.getElementById("btn11");
butonclick.onclick= function(){
    text+="-";
    a=text.indexOf("-");
    text=text.slice(0,a);
    text2=text.replace(text,text+"-");
    document.getElementById("Text1").value=text2;
}

butonclick=document.getElementById("btn13");
butonclick.onclick= function(){
    text+=".";
    a=text.indexOf(".");
    text=text.slice(0,a+1);
    document.getElementById(id).value=text;
}

butonclick=document.getElementById("btn14");
butonclick.onclick= function(){
    text+="/";
    a=text.indexOf("/");
    text=text.slice(0,a);
    text2=text.replace(text,text+"/");
    document.getElementById("Text1").value=text2;
}

butonclick=document.getElementById("btn15");
butonclick.onclick= function(){
    text+="*";
    a=text.indexOf("*");
    text=text.slice(0,a);
    text2=text.replace(text,text+"*");
    document.getElementById("Text1").value=text2;
}

butonclick=document.getElementById("btn16");
butonclick.onclick= function(){
    var str=document.getElementById(id).value;
    if(str.includes("+")){
    son=str.split("+");
    sayi1=son[0];
    sayi2=son[1];
    snc=parseFloat(sayi1)+parseFloat(sayi2); 
    }
    var str=document.getElementById(id).value;
    if(str.includes("-")){
    son=str.split("-");
    sayi1=son[0];
    sayi2=son[1];
    snc=parseFloat(sayi1)-parseFloat(sayi2); 
    }
    var str=document.getElementById(id).value;
    if(str.includes("*")){
    son=str.split("*");
    sayi1=son[0];
    sayi2=son[1];
    snc=parseFloat(sayi1)*parseFloat(sayi2); 
    }
    var str=document.getElementById(id).value;
    if(str.includes("/")){
    son=str.split("/");
    sayi1=son[0];
    sayi2=son[1];
    snc=parseFloat(sayi1)/parseFloat(sayi2); 
    }
    text+="=";
    a=text.indexOf("=");
    text=text.slice(0,a+1);
    document.getElementById(id).value =snc;
    islemkaydi=text+snc;
    var dizi = [];
    dizi.push(islemkaydi);
    for(let key in dizi){
        document.getElementById("demo").innerHTML+=dizi[key]+"<br>";
    }
    
}