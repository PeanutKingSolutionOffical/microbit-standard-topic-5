let ultrasound = 0
basic.forever(function () {
    ultrasound = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    while (ultrasound < 40) {
        basic.showIcon(IconNames.Heart)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 100)
        ultrasound = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
    }
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 150)
    basic.showIcon(IconNames.SmallHeart)
})
