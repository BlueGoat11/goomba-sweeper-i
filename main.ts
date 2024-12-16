function Turn_Right () {
    hummingbird.setRotationServo(FourPort.Two, 100)
    basic.pause(2900)
    hummingbird.setRotationServo(FourPort.Two, 0)
}
function Forward_MARCH () {
    hummingbird.setRotationServo(FourPort.One, -68)
    hummingbird.setRotationServo(FourPort.Two, 50)
}
input.onButtonPressed(Button.A, function () {
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
})
function Turn_Left () {
    hummingbird.setRotationServo(FourPort.One, -100)
    basic.pause(2900)
    hummingbird.setRotationServo(FourPort.One, 0)
}
input.onButtonPressed(Button.B, function () {
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    activate = 1
})
let activate = 0
basic.showLeds(`
    . . . . .
    # # # # #
    . # . # .
    # # # # #
    . . . . .
    `)
hummingbird.startHummingbird()
hummingbird.setRotationServo(FourPort.One, 0)
hummingbird.setRotationServo(FourPort.Two, 0)
while (activate == 0) {
    music.setVolume(40)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
}
basic.showString("Cleaning")
while (true) {
    Turn_Left()
    while (hummingbird.getSensor(SensorType.Distance, ThreePort.One) > 30) {
        Forward_MARCH()
    }
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
    Turn_Right()
    break;
}
