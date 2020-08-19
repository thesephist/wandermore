` app main `

` game constants `
G := ~20
FPS := 60
FRICTION := 3
FORCE := 2000

MINSIZE := 16
MAXSIZE := 512

` Canvas setup `
Width := window.innerWidth
Height := window.innerHeight
Canvas.width := Width
Canvas.height := Height
setLineWidth(2)

` game state `
S := {
	points: 0
	ground: Height * 0.8
	` relative to ground `
	player: {
		size: 100
		x: Width / 2
		y: 0
		vx: 0
		vy: 0
	}
}

` event state `
E := {
	UpPressed: false
	DownPressed: false
	LeftPressed: false
	RightPressed: false
}

` events `
on(window, 'keydown', evt => evt.key :: {
	' ' -> S.player.y :: {
		0 -> S.player.vy := S.player.vy + 800
	}
	'ArrowUp' -> E.UpPressed := true
	'ArrowDown' -> E.DownPressed := true
	'ArrowLeft' -> E.LeftPressed := true
	'ArrowRight' -> E.RightPressed := true
	_ -> log(evt.key)
})
on(window, 'keyup', evt => evt.key :: {
	'ArrowUp' -> E.UpPressed := false
	'ArrowDown' -> E.DownPressed := false
	'ArrowLeft' -> E.LeftPressed := false
	'ArrowRight' -> E.RightPressed := false
	_ -> log(evt.key)
})

` loop logic `
physics := obj => (
	E.UpPressed :: {
		true -> S.player.size := min([S.player.size * 1.02, MAXSIZE])
	}
	E.DownPressed :: {
		true -> S.player.size := max([S.player.size / 1.02, MINSIZE])
	}

	` accel = force / mass `
	accel :=
		E.LeftPressed :: {
		true -> S.player.vx := S.player.vx - FORCE / S.player.size
	}
	E.RightPressed :: {
		true -> S.player.vx := S.player.vx + FORCE / S.player.size
	}

	obj.x := obj.x + (obj.vx / FPS)
	obj.y := obj.y + (obj.vy / FPS)
	obj.vx := obj.vx - (obj.vx * FRICTION / FPS)
	obj.vy := obj.vy + (G * S.player.size / FPS)

	obj.y < 2 :: {
		true -> abs(obj.vy) < 30 :: {
			true -> (
				obj.y := 0
				obj.vy := 0
			)
			false -> (
				obj.y := 0
				obj.vy := ~(obj.vy * 0.3)
			)
		}
	}
)

renderGround := () => drawLine([0, S.ground], [Width, S.ground])
renderPlayer := () => (
	strokeCircle(
		S.player.x
		S.ground - S.player.y - S.player.size / 2
		S.player.size / 2
	)
)

` per-frame main `
main := () => (
	physics(S.player)

	renderGround()
	renderPlayer()

	writeText(30, 50, string(S.points))
)

` game loop `
loop := () => (
	clearRect(0, 0, Width, Height)
	main()
	requestAnimationFrame(loop)
)

setFont('32px sans-serif')
loop()

log('hello from the Ink side')

