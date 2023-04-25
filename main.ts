basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.No)
    }
})
