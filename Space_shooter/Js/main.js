window.onload = init();
function init(){

		setCanvas ();
		setMedia();

		game = new Game ();
		game.run();

			}

	function setCanvas (){


	canvas = document.getElementById('canvas');
	cw = canvas.width = 960;
	ch = canvas.height = 600;
				
	pen = canvas.getContext('2d');
	console.log(pen);
			}
function setMedia(){
	media = {};

	media.plane = new Image ();
	media.plane.src = 'source/PNG/plane.png';

	media.bg = new Image ();
	media.bg.src = 'source/PNG/background.png';	
}