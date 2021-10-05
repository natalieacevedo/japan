
const placesToVisit = [
    {
      name: "Tokyo",
      type: "city",
      sliderPicture: "https://lp-cms-production.imgix.net/2021-04/Pontocho_Kyoto.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      popUpPicture: "https://lp-cms-production.imgix.net/2021-04/Pontocho_Kyoto.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      description: "this is a place bla bla bla",
    },
    {
      name: "Naoshima",
      type: "island",
      sliderPicture: "https://www.erikastravelventures.com/wp-content/uploads/2019/08/P1010422-1024x762.jpg",
      popUpPicture:"https://www.erikastravelventures.com/wp-content/uploads/2019/08/P1010422-1024x762.jpg",
      description: "this is a place bla bla bla",
    },
    {
      name: "Memorial Cenotaph ",
      type: "type",
      sliderPicture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1393700846.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1393700846.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      description: "this is a place bla bla bla",
    },
    {
      name: "Yakushima",
      type: "island",
      sliderPicture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_423304240.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_423304240.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      description: "this is a place bla bla bla",
    },
    {
      name: "Kamikōchi",
      type: "type",
      sliderPicture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1254380497.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1254380497.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
      description: "this is a place bla bla bla",
    }
];

//popup stuff
function showPopUp(name) {
  var popUpToShow = document.getElementById(name);
  popUpToShow.style.display="block";
  //blur the other stuff
  var container= document.querySelector(".container");
  container.style.filter="blur(30px)";
}
function hidePopUp(name) {
  //hide popup
  var popUpToHide = document.getElementById(name);
  popUpToHide.style.display="none";
  //unblur backgorund stuff 
  var container= document.querySelector(".container");
  container.style.filter="blur(0px)";
}

//code for adding all the cards

//get the card holder 
const carousel=document.querySelector('.carousel');
function createCard(name,type,sliderPicture,popUpPicture,description){
    //create a card
    const card=document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage=`url(${sliderPicture})`;


    //append the card on the carrousel
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

    //create a pop up and add it to the document
    const popUp=document.createElement('div');
    popUp.classList.add('pop-up');
    document.body.appendChild(popUp);

    //give the popup an id
    popUp.setAttribute('id', name);

    //add the closing button to the popup
    const closeButton=document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML='x'
    popUp.appendChild(closeButton);

    //add the image of the popup
    const imagePopUp=document.createElement('div');
    imagePopUp.classList.add('image-pop-up');
    imagePopUp.style.backgroundImage=`url(${popUpPicture})`;
    popUp.appendChild(imagePopUp);

    // add the article of the popup
    const articlePopUp=document.createElement('div');
    articlePopUp.classList.add('article-pop-up');
    popUp.appendChild(articlePopUp);

    //add the title to the article of the popup
    const titlePopUp=document.createElement('div');
    titlePopUp.classList.add('title-pop-up');
    titlePopUp.innerHTML=name;
    articlePopUp.appendChild(titlePopUp);

    //add the description to the article of the popup
    const descriptionPopUp=document.createElement('div');
    descriptionPopUp.classList.add('description-pop-up');
    descriptionPopUp.innerHTML=description;
    articlePopUp.appendChild(descriptionPopUp);

    //add the on click property to the card 
    card.addEventListener('click',function(){
      showPopUp(name);
    });
    //add the on click property to the clossing button
    closeButton.addEventListener('click',function(){
      hidePopUp(name)
    });
}

for(let i=0;i<placesToVisit.length;i++){
    createCard(placesToVisit[i].name,placesToVisit[i].type,placesToVisit[i].sliderPicture,placesToVisit[i].popUpPicture,placesToVisit[i].description);
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




