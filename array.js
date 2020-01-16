const companies = ["Airbnb", "Uber", "SkiptheDishes" , "Sonder", "Whatsapp", "Snapchat" , "Amazon" , "Alibaba", "Venmo"];


const forwhat =[" for Students", " for Teachers"," for Engineers", "for Knights", "for Office Spaces", "for Paintings" ,"for Homework Answers", "for Cars" , "for Ancient Artifacts" ,
  "for zookeepers", "for international students" , "for gymgoers", "for designers"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${companies[getRandomNumber(companies.length)]} ${forwhat[getRandomNumber(forwhat.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);
setRandomName();
