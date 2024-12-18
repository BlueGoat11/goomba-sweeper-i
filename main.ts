function Turn_Right () {
    hummingbird.setRotationServo(FourPort.Two, 100)
    basic.pause(4000)
    hummingbird.setRotationServo(FourPort.Two, 0)
}
function Forward_MARCH () {
    hummingbird.setRotationServo(FourPort.One, -68)
    hummingbird.setRotationServo(FourPort.Two, 50)
}
function Turn_Left () {
    hummingbird.setRotationServo(FourPort.One, -100)
    basic.pause(3200)
    hummingbird.setRotationServo(FourPort.One, 0)
}
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
    basic.showIcon(IconNames.Asleep)
}
basic.showString("Cleaning")
Turn_Left()
while (hummingbird.getSensor(SensorType.Distance, ThreePort.One) > 20) {
    music.setVolume(200)
    music.play(music.stringPlayable("D C D D C G A C ", 200), music.PlaybackMode.InBackground)
    Forward_MARCH()
}
hummingbird.setRotationServo(FourPort.One, 0)
hummingbird.setRotationServo(FourPort.Two, 0)
while (true) {
    while (hummingbird.getSensor(SensorType.Distance, ThreePort.One) > 35) {
        music.setVolume(200)
        music.play(music.stringPlayable("D C D D C G A C ", 200), music.PlaybackMode.InBackground)
        Forward_MARCH()
    }
    Turn_Right()
    Turn_Right()
    while (hummingbird.getSensor(SensorType.Distance, ThreePort.One) > 35) {
        Forward_MARCH()
    }
    Turn_Left()
    Turn_Left()
}
