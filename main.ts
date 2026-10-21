radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    radio.sendString(serial.readString())
})
radio.setGroup(255)
radio.setTransmitPower(7)
