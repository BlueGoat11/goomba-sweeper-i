input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    activate = 1
})
let activate = 0
hummingbird.startHummingbird()
basic.showLeds(`
    . . . . .
    # # # # #
    . # . # .
    # # # # #
    . . . . .
    `)
while (activate == 0) {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
}
basic.showString("Cleaning")
while (true) {
    basic.showString("" + (randint(0, 10)))
    basic.pause(100)
}
