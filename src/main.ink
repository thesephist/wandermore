` app main `

` game constants `
G := ~36
FPS := 60
FrictionCoeff := 300
Launch := 100000
Force := 1500

MinSize := 32
MaxSize := 256

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
		px: 0
		py: 0
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
		0 -> S.player.py := S.player.py - Launch / FPS
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
controls := () => (
	E.UpPressed :: {
		true -> S.player.size := min([S.player.size * 1.02, MaxSize])
	}
	E.DownPressed :: {
		true -> S.player.size := max([S.player.size / 1.02, MinSize])
	}
	E.LeftPressed :: {
		true -> S.player.px := S.player.px - Force / FPS
	}
	E.RightPressed :: {
		true -> S.player.px := S.player.px + Force / FPS
	}
)

physics := obj => (
	mass := obj.size * obj.size / 10000

	dx := obj.px / mass / FPS
	dy := obj.py / mass / FPS

	obj.x := obj.x + dx
	obj.y := obj.y + dy

	` friction `
	frictiondPx := ~sign(obj.px) * FrictionCoeff * mass / FPS
	abs(obj.px) > abs(frictiondPx) :: {
		true -> obj.px := obj.px + frictiondPx
		_ -> obj.px := 0
	}

	obj.y < 2 :: {
		true -> abs(obj.py / mass) < 30 :: {
			true -> (
				obj.y := 0
				obj.py := 0
			)
			false -> (
				obj.y := 0
				obj.py := ~0.3 * obj.py
			)
		}
		_ -> obj.py := obj.py + G * mass
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
	controls()
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

