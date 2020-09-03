 window.onload = click;

 var i = 0;

 
function click () {
    
    var modal = document.getElementById("myModal");

    var btn = document.getElementById("todoKnapp");

    var span = document.getElementsByClassName("close")[0];

    var create = document.getElementsByClassName("create")[0];
 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    create.onclick = function() {

        modal.style.display = "none";
        myFunction();

    }
    

 }

 function myFunction() {

    if(i > 2) {

        var id = i -3
        maks3(id);

    }

    var alleKort = document.getElementById("alleKort");
    
    var article = document.createElement("ARTICLE");
    article.setAttribute("id", i);
    article.setAttribute("class", "kort");
    alleKort.appendChild(article);

    var div = document.createElement("div");
    div.setAttribute("class", "kortInnhold");
    article.appendChild(div);

    var heading = document.createElement("h3");
    var tittel = document.getElementById("title").value;
    var txt1 = document.createTextNode(tittel);
    heading.appendChild(txt1);
    div.appendChild(heading);

    var para = document.createElement("p");
    para.setAttribute("class", "kortTekst");
    var tekst = document.getElementById("description").value;
    var txt2 = document.createTextNode(tekst);
    para.appendChild(txt2);
    div.appendChild(para);

    //Knapper

    var divKnapper = document.createElement("div");
    divKnapper.setAttribute("class", "knapper");
    div.appendChild(divKnapper);

    var deleteKnapp = document.createElement("p");
    deleteKnapp.setAttribute("id", i);
    deleteKnapp.setAttribute("class", "delete");
    deleteKnapp.addEventListener("click", slett);

    var deleteTxt = document.createTextNode("delete");
    deleteKnapp.appendChild(deleteTxt);
    divKnapper.appendChild(deleteKnapp);

    var completeKnapp = document.createElement("p");
    completeKnapp.setAttribute("id", i);
    completeKnapp.setAttribute("class", "complete");
    completeKnapp.addEventListener("click", addTable);
    completeKnapp.addEventListener("click", slett);

    var completeTxt = document.createTextNode("complete");
    completeKnapp.appendChild(completeTxt);
    divKnapper.appendChild(completeKnapp);

    i++;

}

function addTable () {

    var tabell = document.getElementById("tabell");
    
    var tr = document.createElement("tr");
    tr.setAttribute("class", "tableInnhold");
    tabell.appendChild(tr);

    var heading = document.createElement("td");
    var tittel = document.getElementById("title").value;
    var txt1 = document.createTextNode(tittel);
    heading.appendChild(txt1);
    tr.appendChild(heading);

    var author = document.createElement("td");
    var navn = document.getElementById("author").value;
    var txt2 = document.createTextNode(navn);
    author.appendChild(txt2);
    tr.appendChild(author);

    var para = document.createElement("td");
    var tekst = document.getElementById("description").value;
    var txt3 = document.createTextNode(tekst);
    para.appendChild(txt3);
    tr.appendChild(para);

    var dato = document.createElement("td");

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var idag = year + '.' + month + '.' + day;

    var txt4 = document.createTextNode(idag);
    dato.appendChild(txt4);
    tr.appendChild(dato);
    console.log(idag);

}

function slett(element) {

    var elementId = element.target.id;

    var item = document.getElementById(elementId);
    item.parentNode.removeChild(item);
    
}

function maks3(element) {

    var item = document.getElementById(element);
    item.parentNode.removeChild(item);    

}