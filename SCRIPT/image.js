

document.getElementById("myImg").style.visibility= "hidden";

let myfunc = async function apifunc(){

	const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk')
	const myJson = await response.json();

	let imageUrl = myJson.url;
	let title = myJson.title;
	let descrip = myJson.explanation;

	document.getElementById("myImg").style.visibility= "visible";
	document.getElementById("myImg").src = imageUrl;
	document.getElementById("ImgInfo").innerHTML = "<b> Title: " + title +"</b><br>" + descrip;
	
}

document.querySelector('#getImageButton').addEventListener('click', myfunc);

