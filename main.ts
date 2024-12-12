input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    activate = 1
})
let activate = 0
while (activate == 0) {
    music.setVolume(20)
    music.play(music.stringPlayable("C5 A B G A F G E ", 70), music.PlaybackMode.UntilDone)
}
basic.showString("Starting Cleaning")
basic.showString("This will last 5 minutes.")
basic.forever(function () {
	
})
