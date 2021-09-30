function Render (szám: number) {
    led.plot(2, 2)
    if (szám == 0) {
        led.plot(2, 0)
        led.plot(2, 1)
    } else if (szám == 1) {
        led.plot(3, 0)
        led.plot(2, 1)
    } else if (szám == 2) {
        led.plot(3, 0)
        led.plot(3, 1)
    } else if (szám == 3) {
        led.plot(4, 0)
        led.plot(3, 1)
    } else if (szám == 4) {
        led.plot(4, 1)
        led.plot(3, 1)
    } else if (szám == 5) {
        led.plot(4, 1)
        led.plot(3, 2)
    } else if (szám == 6) {
        led.plot(4, 2)
        led.plot(3, 2)
    } else if (szám == 7) {
        led.plot(4, 3)
        led.plot(3, 2)
    } else if (szám == 8) {
        led.plot(4, 3)
        led.plot(3, 3)
    } else if (szám == 9) {
        led.plot(4, 4)
        led.plot(3, 3)
    } else if (szám == 10) {
        led.plot(3, 4)
        led.plot(3, 3)
    } else if (szám == 11) {
        led.plot(3, 4)
        led.plot(2, 3)
    } else if (szám == 12) {
        led.plot(2, 4)
        led.plot(2, 3)
    } else if (szám == 13) {
        led.plot(1, 4)
        led.plot(2, 3)
    } else if (szám == 14) {
        led.plot(1, 4)
        led.plot(1, 3)
    } else if (szám == 15) {
        led.plot(0, 4)
        led.plot(1, 3)
    } else if (szám == 16) {
        led.plot(0, 3)
        led.plot(1, 3)
    } else if (szám == 17) {
        led.plot(0, 3)
        led.plot(1, 2)
    } else if (szám == 18) {
        led.plot(0, 2)
        led.plot(1, 2)
    } else if (szám == 19) {
        led.plot(0, 1)
        led.plot(1, 2)
    } else if (szám == 20) {
        led.plot(0, 1)
        led.plot(1, 1)
    } else if (szám == 21) {
        led.plot(0, 0)
        led.plot(1, 1)
    } else if (szám == 22) {
        led.plot(1, 0)
        led.plot(1, 1)
    } else if (szám == 23) {
        led.plot(1, 0)
        led.plot(2, 1)
    }
}
basic.forever(function () {
    basic.clearScreen()
    Render(Math.round(Math.map(input.compassHeading(), 360, 0, 0, 23)))
    basic.pause(50)
})
