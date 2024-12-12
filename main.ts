input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (activate == 0) {
        activate = 1
    } else {
        thingyisset = 1
    }
})
let minutes = 0
let thingyisset = 0
let activate = 0
while (activate == 0) {
    music.setVolume(20)
    music.play(music.stringPlayable("C5 A B G A F G E ", 70), music.PlaybackMode.UntilDone)
}
while (thingyisset == 0) {
    minutes = 1
    basic.showString("" + (minutes))
    if (input.buttonIsPressed(Button.A)) {
        minutes += -1
        if (minutes < 1) {
            minutes = 1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        minutes += 1
    }
}
basic.showString("yay")
basic.forever(function () {
	
})
