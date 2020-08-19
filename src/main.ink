` app main `

` game constants `
PlayerHeight := 100
G := ~2000
FPS := 60
FRICTION := 5

` Canvas setup `
Width := window.innerWidth
Height := window.innerHeight
Canvas.width := Width
Canvas.height := Height
setLineWidth(2)

` game state `
S := {
	ground: Height * 0.8
	` relative to ground `
	player: {
		x: Width / 2
		y: 0
		vx: 0
		vy: 0
	}
}

` events `
on(window, 'keydown', evt => evt.key :: {
	' ' -> S.player.vy := S.player.vy + 800
	'ArrowLeft' -> S.player.vx := S.player.vx - 500
	'ArrowRight' -> S.player.vx := S.player.vx + 500
	_ -> log(evt.key)
})

` loop logic `
physics := obj => (
	obj.x := obj.x + (obj.vx / FPS)
	obj.y := obj.y + (obj.vy / FPS)
	obj.vx := obj.vx - (obj.vx * FRICTION / FPS)
	obj.vy := obj.vy + (G / FPS)

	obj.y < 2 :: {
		true -> abs(obj.vy) < 30 :: {
			true -> (
				obj.y := 0
				obj.vy := 0
			)
			false -> (
				obj.y := 0
				obj.vy := ~(obj.vy * 0.5)
			)
		}
	}
)

renderGround := () => drawLine([0, S.ground], [Width, S.ground])
renderPlayer := () => (
	strokeCircle(
		S.player.x
		S.ground - S.player.y - PlayerHeight / 2
		PlayerHeight / 2
	)
)

` per-frame main `
main := () => (
	physics(S.player)

	renderGround()
	renderPlayer()
)

` game loop `
loop := () => (
	clearRect(0, 0, Width, Height)
	main()
	requestAnimationFrame(loop)
)

loop()

log('hello from the Ink side')

