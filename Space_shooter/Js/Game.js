class Game {
	constructor () {
		this.bg = {
			x: 0,
			y: 0,
			w: 1920,
			h: 600,
		}

	}

	animate (Callback) {
		window.requestAnimationFrame (Callback);
	}

	run () {
		this.genarate();
		this.start();
	}

	genarate () {}

	start  () {
		this.animate ( () => this.start () );

		pen.clearRect (0, 0, cw, ch);

		this.draw();
		this.update();
	}

	draw () {
		this.drawBackground();
		pen.drawImage(media.plane, 10, ch/2 - 25, 50, 50);
	}
		drawBackground(){
			this.bg.x -= 5;
			if (this.bg.x + this.bg.w <= cw){
				this.bg.x = 0;
			}
			pen.drawImage(
				media.bg,
				this.bg.x,
				this.bg.y,
				this.bg.w,
				this.bg.h
				);
		}

	update () {}
}