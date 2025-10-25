input.onPinReleased(TouchPin.P2, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    basic.showLeds(`
        . . # . #
        . # . . #
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    basic.showLeds(`
        . . # . #
        . # . . #
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.tab))
    basic.showLeds(`
        . # . . #
        . . # . #
        # # # # #
        . . # . #
        . # . . #
        `)
    basic.pause(200)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.tab))
    basic.showLeds(`
        . # . . #
        . . # . #
        # # # # #
        . . # . #
        . # . . #
        `)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    basic.showLeds(`
        . . # . #
        . # . . #
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
})
input.onPinReleased(TouchPin.P1, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.tab))
    basic.showLeds(`
        . # . . #
        . . # . #
        # # # # #
        . . # . #
        . # . . #
        `)
    basic.pause(200)
    basic.clearScreen()
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
