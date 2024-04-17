basic.forever(function () {
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # # . # #
        . . . . .
        # . # . #
        . . . . .
        # # . # #
        `)
})
