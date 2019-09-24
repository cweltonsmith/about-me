
async function apifunc(){
	const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk')
	const myJson = await response.json();

	let imageUrl = myJson.hdurl;
	let title = myJson.title;
	let descrip = myJson.explanation;

	document.getElementById("myImg").src = imageUrl;
	document.getElementById("ImgInfo").innerHTML = "<b> Title: " + title +"</b><br>" + descrip;

}

document.querySelector('#getImageButton').addEventListener('click', apifunc())

