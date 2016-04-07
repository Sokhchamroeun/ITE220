(function(){ // on load event
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;		
	},
	resize: function(){
		window.addEventListener("resize", this.render);
	},
	devinfo: function(){
		var btnDev = document.getElementById("dev-info");
		btnDev.addEventListener("click", function(){
		var devInfo = "<br>" + "Sokhchamroeun" + "<br>" + "Faculty of Science and Technology" + "<br>" + "<a href='https://github.com/Sokhchamroeun'>https://github.com/Sokhchamroeun</a>";
		var devInformation = document.getElementById("dev-info-container");
		devInformation.innerHTML = devInfo;

	});
	}
}
task1.render();
task1.resize();
task1.devinfo();
})(); // end on load events
