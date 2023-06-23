//Selectors - what we want to manipulate
const section =document.querySelector('section');

//Create an array of objects to hold the image data (image source and name).
// Add 2 of each image so we have matching pairs.

let array =[
{imgSource: "./images/cheesecake.jpg", name:"cheesecake"},
{imgSource: "./images/chocolatecake.jpg", name:"chocolate-cake"},
{imgSource: "./images/donuts.jpg", name:"donuts"},
{imgSource: "./images/macarons.jpg", name:"macarons"},
{imgSource: "./images/tiramisu.jpg", name:"tiramisu"},
{imgSource: "./images/tresleces.jpg", name:"tres-leches"},
{imgSource: "./images/cheesecake.jpg", name:"cheesecake"},
{imgSource: "./images/chocolatecake.jpg", name:"chocolate-cake"},
{imgSource: "./images/donuts.jpg", name:"donuts"},
{imgSource: "./images/macarons.jpg", name:"macarons"},
{imgSource: "./images/tiramisu.jpg", name:"tiramisu"},
{imgSource: "./images/tresleces.jpg", name:"tres-leches"},

]

// //Create a function to get all of the card data

const getData=() =>
[
    {imgSource: "./images/cheesecake.jpg", name:"cheesecake"},
    {imgSource: "./images/chocolatecake.jpg", name:"chocolate-cake"},
    {imgSource: "./images/donuts.jpg", name:"donuts"},
    {imgSource: "./images/macarons.jpg", name:"macarons"},
    {imgSource: "./images/tiramisu.jpg", name:"tiramisu"},
    {imgSource: "./images/tresleches.jpg", name:"tres-leches"},
    {imgSource: "./images/cheesecake.jpg", name:"cheesecake"},
    {imgSource: "./images/chocolatecake.jpg", name:"chocolate-cake"},
    {imgSource: "./images/donuts.jpg", name:"donuts"},
    {imgSource: "./images/macarons.jpg", name:"macarons"},
    {imgSource: "./images/tiramisu.jpg", name:"tiramisu"},
    {imgSource: "./images/tresleches.jpg", name:"tres-leches"} 
    ]


//Now we need to randomize the results of the function

const randomize =function shuffle(array) {
    const cardData =getData();
    console.log(cardData)
    let counter = cardData.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = cardData[counter];
      cardData[counter] = cardData[index];
      cardData[index] = temp;
    }
  
    return cardData;
  }

 
  

//Now we want to make a function to generate our cards and add the html
//and add class so that we can animate and manipulate with css
//and append the new elements to the page
//to create the 12 cards use foreach which will loop over each element in the array
//then we add the image source from each item object to the front of the card

const cardGenerator = function(){
    const cardData =randomize();
    cardData.forEach((item)=>{
    const card=document.createElement('div')
    const front=document.createElement('img')
    const back=document.createElement('div')
    card.classList='card';
    front.classList='front';
    back.classList='back'; 
    section.append(card);
    card.append(front);
    card.append(back);

    //Attach image to card
    //Adding attribute of name to card so that when we click we should see the name
    front.src=item.imgSource;
    card.setAttribute('name',item.name)

    card.addEventListener('click',(e)=>{
        card.classList.toggle('toggleCard');
        checkCards(e);

    })


    })
 
    
}

//Check Cards
//Use e.target to see which card we click on

// We will add a pointer event of none in our css to the front and back of card so that it isn't clikable
//We will add a class of flipped-card and then select it
const checkCards =(e)=>{     
    const clickedCard=e.target;
    clickedCard.classList.add('flipped');
    const flippedCards=document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard')
    console.log(flippedCards)
    

    //Adding matching logic
    //if the card matches, for each flipped card,remove flipped class and set pointer event to none so user can't click card
    //if the card doesn't match, for each flipped card,remove flipped class and set a timeout to remove the togglecard class
    if(flippedCards.length ===2){
        if(flippedCards[0].getAttribute('name')=== flippedCards[1].getAttribute('name')){
            console.log("match");
            flippedCards.forEach((card)=>{
                card.classList.remove('flipped');
                card.style.pointerEvents='none';
            })
        } else{
            console.log("not a match")
            flippedCards.forEach((card)=>{
            card.classList.remove('flipped');
            setTimeout(()=>card.classList.remove('toggleCard'),1000)
            
            })
        }
        //Check to see if user won the game. If all cards have the class of toggle card, game is won.
        if(toggleCard.length === 12){
            setTimeout(()=>alert('You Won! Refresh to play again!'),2000)
        }
    }
    
}

cardGenerator();

 /* Resources:
 https://www.youtube.com/watch?v=-tlb4tv4mC4
 https://www.youtube.com/watch?v=bznJPt4t_4s
 https://webtips.dev/memory-game-in-javascript
 
 */