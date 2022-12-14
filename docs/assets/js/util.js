let stationNuevoTiempoPeru = document.getElementById("audioNTPeru");
let station3abn = document.getElementById("audio3abn");
let station3abnEN = document.getElementById("audio3abnEN");
let stationRPP = document.getElementById("audioRPP");
let stationExitosa = document.getElementById("audioExitosa");

let btnpauseNTPeru = document.getElementById("btnpauseNTPeru");
let btnpause3abn = document.getElementById("btnpause3abn");
let btnpause3abnEN = document.getElementById("btnpause3abnEN");
let btnpauseRPP = document.getElementById("btnpauseRPP");
let btnpauseExitosa = document.getElementById("btnpauseExitosa");


let allowPlay = true
let audio;
let video;
let stationValues;
let idPlaybtn;
let idPausebtn;

//Validate which item is loaded in that moment

//Hide pause buttons
const btnpauseElements = document.getElementsByClassName("button_pause");
	
	for( const btnpauseElement of btnpauseElements){
		btnpauseElement.style.display = "none";    
    	  
	}

/*
//Hide play buttons

const btnplayElements = document.getElementsByClassName("button_play");
	
	for( const btnplayElement of btnplayElements){
		btnplayElement.style.display = "none";    
    	  
	}
*/
function enablePlaybtn(idValue){

	let showPlayButton = document.getElementById(idValue);
	showPlayButton.style.display ="block";
}


function hideAllBtnPlay(){

	const btnplayElements = document.getElementsByClassName("button_play");
	
	for( const btnplayElement of btnplayElements){
		btnplayElement.style.display = "none";    
    	  
	}

}
function showAllBtnPlay(){

	const btnplayElements = document.getElementsByClassName("button_play");
	
	for( const btnplayElement of btnplayElements){
		btnplayElement.style.display = "block";    
    	  
	}

}

function createAudio(stationValues){

  if (allowPlay){
  audio = document.createElement('audio');
  audio.src = stationValues.getAttribute("stream");
  audio.setAttribute('type',stationValues.getAttribute("streamtype"));
  audio.setAttribute('id', stationValues.getAttribute("id"));
  audio.volume = 0.8;
  console.log(stationValues.getAttribute("stream"));
  console.log(stationValues.getAttribute("streamtype"));
  allowPlay = false;
  playAudio();
  
 
 }

}

function playAudio(){
     audio.play();
 
}


function pauseAudio(){
    audio.pause();
    allowPlay = true;

}

function createVideo(stationValues){

  if (allowPlay){
  video = document.createElement('video');
  video.src = stationValues.getAttribute("stream");
  video.setAttribute('type',stationValues.getAttribute("streamtype"));
  video.setAttribute('id', stationValues.getAttribute("id"));
  video.volume = 1;
  console.log(stationValues.getAttribute("stream"));
  console.log(stationValues.getAttribute("streamtype"));
  allowPlay = false;
  playVideo();
  

 }

}
function playVideo(){
  video.play();

}

function pauseVideo(){
 video.pause();
 allowPlay = true;

}

function hideButtonPlay(idValue){
	idPlaybtn= idValue.getAttribute("id"); 
	let playbtnValue = document.getElementById(idPlaybtn);
	playbtnValue.style.display = "none";
	if (idPlaybtn == "audioNTPeru"){
		btnpauseNTPeru.style.display = "block";
	} else if (idPlaybtn == "audio3abn"){
		btnpause3abn.style.display = "block";
	} else if (idPlaybtn == "audio3abnEN"){
		btnpause3abnEN.style.display = "block";
	} else if (idPlaybtn == "audioRPP") {
		btnpauseRPP.style.display = "block";
	} else if (idPlaybtn == "audioExitosa") {
		btnpauseExitosa.style.display = "block";
	}
	hideAllBtnPlay();
}

function showButtonPlay(idValue){
	idPausebtn = idValue.getAttribute("id"); 
	let pausebtnValue = document.getElementById(idPausebtn);
	pausebtnValue.style.display = "none";
	let showPlayButton = document.getElementById(idPlaybtn);
	showPlayButton.style.display ="block";
	showAllBtnPlay();
}

function toggleItems(value){

	valueItem = value.getAttribute("data-idvalue");
	const element = document.getElementById(valueItem);
	if (element.className == "hideItem") {
		  element.className = "showItem";

	} else {
		  element.className = "hideItem";
	}

	
}

function loadVersionOS(){
//BrowserDetect.init();
//document.write('<p class="accent">You\'re using ' + BrowserDetect.browser + ' ' + BrowserDetect.version + ' on ' + BrowserDetect.OS + '! <img src="images/' + BrowserDetect.browser + '.gif"></p>');
let userAgent = navigator.userAgent;
let browVersion;
console.log(userAgent);
if (userAgent.includes('Firefox/')) {
  console.log(`Firefox v${userAgent.split('Firefox/')[1]}`)
  window.location.href = "newbrowradio.html";
} else if (userAgent.includes('Edg/')) {
  console.log(`Edg v${userAgent.split('Edg/')[1]}`)
  window.location.href = "newbrowradio.html";
  
} else if (userAgent.includes('Chrome/')) {
  console.log(`Chrome v${userAgent.split('Chrome/')[1]}`)
  window.location.href = "newbrowradio.html";
} else if (userAgent.includes('Safari/')) {
  // Safari
  browVersion = userAgent.split('Safari/')[1];
  console.log(browVersion);
  if (browVersion.includes("7.")){
    window.location.href = "oldbrowradio.html";
  }else{
    window.location.href = "newbrowradio.html";
  }

}

return false;
}

function redirectUrl() {
	window.location.href = "oldbrowradio.html";
}

// Choose Menu Style


function openNav() {

	/* Set the width of the side navigation to 250px */
	//document.getElementById("mySidenav").style.width = "250px";

	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
	//document.getElementById("mySidenav").style.width = "250px";
  	//document.getElementById("container").style.marginLeft = "250px";

	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

	document.getElementById("mySidenav").style.width = "250px";
  	document.getElementById("container").style.marginLeft = "250px";
  	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }
  
  
  function closeNav() {

	/* Set the width of the side navigation to 0 */
	//document.getElementById("mySidenav").style.width = "0";

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	//document.getElementById("mySidenav").style.width = "0";
	//document.getElementById("container").style.marginLeft = "0";

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */

	document.getElementById("mySidenav").style.width = "0";
  	document.getElementById("container").style.marginLeft = "0";
  	document.body.style.backgroundColor = "white";

  }
  