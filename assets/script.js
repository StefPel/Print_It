const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/********** variables *********/
let dots = document.querySelector(".dots");	

/******** carrousel **********/

for(let i = 0; i < slides.length; i++){
	const content = document.createElement("span");
	content.classList.add("dot")
	dots.appendChild(content);
	dots.firstElementChild.classList.add("dot_selected");	
};

arrowRight.addEventListener("click", function(){
	console.log("suivant");	
	next();
});

arrowLeft.addEventListener("click", function(){
	console.log("précédent");
	previous();
});