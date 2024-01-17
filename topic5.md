# Topic 5

## Checkpoint - motors

Adjust your input so that the car can turn RIGHT, turn LEFT or moving BACKWARD.

```blocks

basic.forever(function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 70)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 70)
})

```

## Checkpoint - ultrasound sensors

Print the data of ultrasonic sensor in Serial monitor. 

```blocks

let ultrasound = 0
basic.forever(function () {
    ultrasound = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    serial.writeValue("x", ultrasound)
})

```

## Checkpoint - measuring distance

Using the ultrasonic sensor to measure distances. Based on these distance measurements, the micro:bit should display different icons on its LED display. There are three scenarios to implement: <br/>
Scenario 1: Near Object (< 5 cm) <br/>
Display a "Sad" face icon. <br/>
Scenario 2: Medium Distance (> 5cm and <15cm) <br/>
Display a "Confused" face icon. <br/>
Scenario 3: Far Object (<15 cm). <br/>
Display a "Happy" face icon.

```blocks

let ultrasound = 0
basic.forever(function () {
    ultrasound = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (ultrasound < 5) {
        basic.showIcon(IconNames.Sad)
    } else if (ultrasound > 5 && ultrasound < 15) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})

```

## Assessment - doging robot

Create a dodging robot using a micro:bit and an ultrasonic sensor. The robot should be able to move forward, detect obstacles in its path using the ultrasonic sensor, and autonomously move backward to avoid collisions.

```blocks

let ultrasound = 0
basic.forever(function () {
    ultrasound = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (ultrasound < 20) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 70)
    } else if (ultrasound > 30) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 70)
    } else {
        motor.motorStopAll()
    }
})

```

## Assessment - hard-coding

This example is demonstrating hard-coding.

```blocks

let ultrasound = 0
basic.forever(function () {
    ultrasound = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (ultrasound < 20) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 70)
        basic.pause(1000)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 70)
        basic.pause(5000)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 70)
    } else if (ultrasound > 30) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 70)
    } else {
        motor.motorStopAll()
    }
})

```

## Assessment - escape

Create a micro:bit-controlled robot that can escape a room with only one exit by using an ultrasonic sensor to detect obstacles and navigate towards the exit. 

```blocks

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

```