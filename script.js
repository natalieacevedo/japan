const placesToVisit = [
    {
      name: "Tokyo",
      type: "city",
      picture: "https://lp-cms-production.imgix.net/2021-04/Pontocho_Kyoto.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      description: "hiii"
    },
    {
      name: "Naoshima",
      type: "island",
      picture: "https://www.erikastravelventures.com/wp-content/uploads/2019/08/P1010422-1024x762.jpg",
      description: "hiii"
    },
    {
      name: "Memorial Cenotaph ",
      type: "type",
      picture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1393700846.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      description: "hiii"
    },
    {
      name: "Yakushima",
      type: "island",
      picture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_423304240.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      description: "hiii"
    },
    {
      name: "Kamikōchi",
      type: "type",
      picture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1254380497.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    }
];

//code for adding all the cards

//get the card holder 
const carousel=document.querySelector('.carousel');
function createCard(name,type,picture){
    //create a card and append it to the carrousel 
    const card=document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage=`url(${picture})`;
    carousel.appendChild(card);


    //create card empty space and append it to the card
    const cardEmptySpace=document.createElement('div');
    cardEmptySpace.classList.add('card-empty-space');
    card.appendChild(cardEmptySpace);

    //create card description and append it to the card
    const cardInfo=document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);


    //create card title and append it to the card info
    const cardTitle=document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML=name;
    cardInfo.appendChild(cardTitle);

    //create card type and append it to the card info
    const cardType=document.createElement('div');
    cardType.classList.add('card-type');
    cardType.innerHTML=type;
    cardInfo.appendChild(cardType);

}



for(let i=0;i<placesToVisit.length;i++){
    createCard(placesToVisit[i].name,placesToVisit[i].type,placesToVisit[i].picture);
}

//carrousel thing
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    responsiveClass:true,
    responsive: {
      0:{
        items:1,
        nav: false,
        stagePadding:50,
      },
      400:{
        items:1,
        nav: false,
        stagePadding:100,
      },
      1000:{
        items:1,
        nav: false,
        stagePadding:150,
      },
      1500:{
        items:1,
        nav: false,
        stagePadding:200,
      }
    }
});

//popup stuff
function showPopUp() {
  //show popup
  var popUp = document.querySelector(".pop-up");
  popUp.style.display="inline";
  //blur the other stuff
  var container= document.querySelector(".container");
  container.style.filter="blur(30px)";
}
function hidePopUp() {
  //hide popup
  var popUp = document.querySelector(".pop-up");
  popUp.style.display="none";
  //unblur backgorund stuff 
    var container= document.querySelector(".container");
    container.style.filter="blur(0px)";
}

