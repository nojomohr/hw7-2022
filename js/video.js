var video = document.querySelector("video")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

var volSlider = document.querySelector("#slider"); // good
var volume = document.querySelector("#volume"); // good
var muteButton = document.querySelector("#mute"); // good


if(document.querySelector("#play")){
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		volume.textContent = video.volume*100 + "%";
		console.log(video.volume);
	});
}

if(document.querySelector("#pause")){
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
}

if(document.querySelector("#slower")){
	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down Video");
		video.playbackRate = 0.9 * video.playbackRate
		video.play();
		console.log("speed is");
		console.log(video.playbackRate);
	});
}

if(document.querySelector("#faster")){
	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed Up Video");
		video.playbackRate = 1/0.9 * video.playbackRate;
		video.play();
		console.log("Speed Is");
		console.log(video.playbackRate);
	});
}

if(document.querySelector("#skip")){
	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip Ahead");
		video.currentTime = video.currentTime + 10;
		video.play();
		console.log("Video Current Time is");
		console.log(video.currentTime);
	});
}

if(muteButton){
	document.querySelector("#mute").addEventListener("click", function() {
		if(muteButton.textContent == "Mute"){
			video.muted = true;
			console.log("Mute");
			muteButton.textContent = "Unmute";
		}
		else if(muteButton.textContent == "Unmute"){
			video.muted = false;
			console.log("Unmute");
			muteButton.textContent = "Mute";
		}
	});
}

if(document.querySelector("#slider")){
	document.querySelector("#slider").addEventListener("click", function() {
		video.volume = volSlider.value/100;
		volume.textContent = video.volume*100 + "%";
		console.log("Change Volume");
		console.log(volSlider.value);
		console.log(video.volume);
	});
}

if(document.querySelector("#vintage")){
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("old school mode")
	});
}

if(document.querySelector("#orig")){
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("original mode")
	});
}










