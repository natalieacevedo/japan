const placesToVisit = [
    {
      name: "Lucky",
      type: "type",
      picture: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVubnklMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      name: "Symba",
      type: "type",
      picture: "https://placekitten.com/200/139"
    },
    {
      name: "Léo",
      type: "type",
      picture: "https://placekitten.com/200/90"
    },
    {
      name: "Milo",
      type: "type",
      picture: "https://placekitten.com/200/194"
    },
    {
      name: "Charly",
      type: "type",
      picture: "https://placekitten.com/200/179"
    }
];

//code for adding all the cards

//get the card holder 
const carousel=document.querySelector('#c');
function createCard(name,type,picture){
    //create a card and append it to the carrousel 
    const card=document.createElement('div');
    card.classList.add('card');
    carousel.appendChild(card);

    //create the card header and append it to the card
    const cardHeader=document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.style.backgroundImage=`url(${picture})`;
    card.appendChild(cardHeader);


    //create card description and append it to the card
    const cardDescription=document.createElement('div');
    cardDescription.classList.add('card-description');
    card.appendChild(cardDescription);


    //create card title and append it to the card description
    const cardTitle=document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML=name;
    cardDescription.appendChild(cardTitle);

    //create card type and append it to the card description
    const cardType=document.createElement('div');
    cardType.classList.add('card-type');
    cardType.innerHTML=type;
    cardDescription.appendChild(cardType);
}


for(let i=0;i<placesToVisit.length;i++){
    createCard(placesToVisit[i].name,placesToVisit[i].type,placesToVisit[i].picture);
}


function myOpenPopUp(){
    alert("PROBLEM");
}

//carrousel thing
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
});
