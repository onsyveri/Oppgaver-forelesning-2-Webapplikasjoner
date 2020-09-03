window.onload = start;

function start () {

    var main = document.createElement("main");
    document.body.appendChild(main);

    //main.style.display = "block";
    //main.style.margin = "auto";

    var paragraph = document.createElement("p");
    paragraph.setAttribute("class", "paraText");
    var text = document.createTextNode("Jeg trener på JavaScript");
    paragraph.appendChild(text);
    main.appendChild(paragraph);

    var selectBox = document.createElement("select");
    selectBox.setAttribute("id", "objekter");
    main.appendChild(selectBox);

    selectBox.style.maxWidth = "500px";
    selectBox.style.display = "block";
    selectBox.style.margin = "auto";

    var objekt = {

        "Ferrari":1,
        "Mercedes":2,
        "Haas":3

    }

    var objektEntries = Object.entries(objekt);

    for (var i = 0; i < objektEntries.length; i++) {

        var option = document.createElement("option");
        option.value = objektEntries[i][1];
        option.text = objektEntries[i][0];
        selectBox.appendChild(option);

    }

    var testKnapp = document.createElement("button");
    testKnapp.setAttribute("id", "test");
    testKnapp.addEventListener("click", utskrift);
    var testTxt = document.createTextNode("Test");
    testKnapp.appendChild(testTxt);
    main.appendChild(testKnapp);

    function utskrift () {

        var string = "Jeg trener på JavaScript";
        
        var split = string.split("");

        var baklengsArray = split.reverse();

        var joinArray = baklengsArray.join("");

        var wordSplit = joinArray.split(" ");

        var arrayNoFirstLetter = wordSplit.map(el => el.slice(1));

        var wordJoin = arrayNoFirstLetter.join(" ");

        console.log(wordJoin);

    }

    var resetKnapp = document.createElement("button");
    resetKnapp.setAttribute("id", "reset");
    resetKnapp.addEventListener("click", test);
    var resetTxt = document.createTextNode("Reset");
    resetKnapp.appendChild(resetTxt);
    main.appendChild(resetKnapp);

    var liste = document.createElement("ul");
    main.appendChild(liste);

    function test () {

        liste.innerHTML="";

        for (var i = 0; i < 4; i++) {

            var listeElement = document.createElement("li");
            listeElement.setAttribute("id", i);
            var listeTxt = document.createTextNode("Liste element: " + i);
            listeElement.appendChild(listeTxt);

            var deleteKnapp = document.createElement("button");
            deleteKnapp.setAttribute("id", i);
            deleteKnapp.addEventListener("click", slett);

            var deleteTxt = document.createTextNode("delete");
            deleteKnapp.appendChild(deleteTxt);
            listeElement.appendChild(deleteKnapp);

            listeElement.style.padding = "2px";
            deleteKnapp.style.margin = "5px";

            liste.appendChild(listeElement);

        }

    }

    test()

    function slett (element) {

        var elementId = element.target.id;

        var item = document.getElementById(elementId);
        item.parentNode.removeChild(item);

    }

}