
function enviar(){
    frase=document.getElementById("frase").value;
    link=document.getElementById("link").value;
    l="<h2 id= 'texto1 '> <a id='Link' href='" + link + "'>click aqui </a> </h2>"
    document.getElementById("texto1").innerHTML=frase+l;
    document.getElementById("link").innerHTML=" ";
    document.getElementById("frase").innerHTML=" ";
    document.getElementById("texto").innerHTML=" ";
}
