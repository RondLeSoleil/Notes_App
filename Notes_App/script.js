/*const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML= localStorage.getItem('notes');
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
                
            }
        })
    }
})*/


const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");


function showNotes() {//localStorage.getItem("notes") récupère les notes enregistrées sous la clé "notes".
    notesContainer.innerHTML = localStorage.getItem("notes") || "";//notesContainer.innerHTML = localStorage.getItem("notes") || ""; : Si des notes sont présentes, elles seront affichées dans notesContainer. Sinon, il n’affiche rien.
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);//localStorage.setItem("notes", notesContainer.innerHTML); : Enregistre le contenu HTML de notesContainer dans localStorage sous la clé "notes". Cela permet de conserver toutes les notes créées.
}


createBtn.addEventListener("click", () => {//Lors du clic sur createBtn, un nouveau paragraphe inputBox est créé pour représenter une note.
    let inputBox = document.createElement("p");//Création d'un paragraphe (inputBox) : Ce paragraphe servira de conteneur pour le texte de la note et l'icône de suppression.
    let img = document.createElement("img");//Création de l'image (img) : L'image représente l'icône de suppression, permettant de supprimer la note lorsqu'on clique dessus.

    inputBox.className = "input-box";//inputBox.className = "input-box"; : Assigne la classe input-box à l'élément inputBox. 
    inputBox.setAttribute("contenteditable", "true"); //inputBox.setAttribute("contenteditable", "true"); : Rend inputBox éditable, permettant à l'utilisateur de cliquer et de taper directement dans la note.
    img.src = "images/delete.png";//img.src = "images/delete.png"; : Spécifie l'emplacement de l'image de l'icône de suppression.
    img.className = "delete-icon";//img.className = "delete-icon"; : Assigne la classe delete-icon à l'icône, permettant de lui appliquer un style CSS spécifique

    inputBox.appendChild(img);//inputBox.appendChild(img); : Ajoute l'icône de suppression dans inputBox, positionnant ainsi l'icône de suppression à l'intérieur de chaque note créée.
    notesContainer.appendChild(inputBox);//Ajout de inputBox dans notesContainer : La note complète (le paragraphe éditable avec l'icône de suppression) est ajoutée au conteneur principal des notes (notesContainer), pour qu'elle apparaisse sur la page.


    updateStorage();//Mise à jour du localStorage : updateStorage() sauvegarde l'état actuel de notesContainer (incluant la nouvelle note) dans le localStorage, permettant de conserver la note même après rafraîchissement ou fermeture de la page.
});


notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {//e.target.tagName === "IMG" : Vérifie que l’élément cliqué est bien une icône (img) de suppression
      
        e.target.parentElement.remove();//e.target.parentElement.remove(); : Supprime l’élément parent de l’icône (inputBox), ce qui supprime la note
        updateStorage(); //updateStorage(); met à jour le localStorage pour refléter la suppression de la note.
    }
});

notesContainer.addEventListener("input", function(e) {//input : notesContainer écoute l’événement input, qui se déclenche chaque fois que le contenu d’un élément éditable dans notesContainer est modifié
   //e représente l’événement déclenché (dans ce cas, un événement input). Il contient des informations sur l’élément cible et l'action réalisée.
    if (e.target.classList.contains("input-box")) {// Ce code vérifie que l’élément modifié a bien la classe input-box. Cela garantit que seules les modifications effectuées dans les notes (et non dans d’autres éléments de notesContainer) déclenchent la mise à jour du localStorage.
        updateStorage();//Si la condition est remplie (modification sur une note), updateStorage() est appelée. Cette fonction enregistre le contenu de notesContainer dans le localStorage, assurant que le texte actualisé de la note soit sauvegardé.
    }
});