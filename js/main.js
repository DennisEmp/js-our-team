// CREARE UN ARRAY DI OGGETTI PER RAPPRESENTARE I MEMBRI DEL TEAM

// ogni membro è caratterizzato da: nome, ruolo e foto

// ---------------------------------------------------------------

// 1. Creare array di oggetti con le informazioni necessaree

// 2. Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// 3. Stampare le stesse informazione sul DOM sottoforma di stringhe

let ArrCard = [
    {
        "Nome" : "Wayne Barnett",
        "Ruolo" : "Founder & CEO",
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "Nome" : "Angela Caroll",
        "Ruolo" : "Chief Editor",
        "foto" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "Nome" : "Walter Gordon",
        "Ruolo" : "Office Manager",
        "foto" : "img/walter-gordon-office-manager.jpg"
    },

    {
        "Nome" : "Angela Lopez",
        "Ruolo" : "Social Media Manager",
        "foto" : "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "Nome" : "Scott Estrada",
        "Ruolo" : "Developer",
        "foto" : "img/scott-estrada-developer.jpg"
    },

    {
        "Nome" : "Barbara Ramos",
        "Ruolo" : "Graphic Designer",
        "foto" : "img/barbara-ramos-graphic-designer.jpg"
    },
    
]

console.log(ArrCard);
cards();
function cards () {

    for (let i = 0; i < ArrCard.length; i++) {

        let newCard = 
        
        `<div class="box-user">
            <div class="img">
                <img src="${ArrCard[i].foto}" alt="">
                <div id="user-data">
                    <div id="nome">${ArrCard[i].Nome}</div>
                    <div id="ruolo">${ArrCard[i].Ruolo}</div>
                </div>
            </div>
         </div>`
        

        const container=document.querySelector(".container").innerHTML += newCard

    }
}