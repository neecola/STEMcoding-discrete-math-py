from processing import *


def setup():
    strokeWeight(2)
    background(240)
    frameRate(60)
    size(400, 800)  # nice and big


def clearscreen(r, g, b):
    background(r, g, b)


left = False
right = False
up = False
down = False
MAX_LENGTH = 12
xHistory = list()
yHistory = list()
count = 0


def keyIsDown(thestring):
    if thestring == 'UP_ARROW':
        return up
    if thestring == 'DOWN_ARROW':
        return down
    if thestring == 'LEFT_ARROW':
        return left
    if thestring == 'RIGHT_ARROW':
        return right


def keyPressed():
    global left, right, up, down
    if keyCode == LEFT:
        left = True
    elif keyCode == RIGHT:
        right = True
    if keyCode == UP:
        up = True
    elif keyCode == DOWN:
        down = True


def keyReleased():
    global left, right, up, down
    if keyCode == LEFT:
        left = False
    elif keyCode == RIGHT:
        right = False
    if keyCode == UP:
        up = False
    elif keyCode == DOWN:
        down = False


def drawLine(x1, y1, x2, y2):
    line(x1, height-y1, x2, height-y2)


def drawPoint(x, y):
    fill(0)
    ellipse(x, y, 3, 3)


def drawTriangle(x1, y1, x2, y2, x3, y3):
    triangle(x1, height - y1, x2, height - y2, x3, height - y3)


def drawText(str, x, y):
    textSize(20)
    strokeWeight(1)
    text(str, x, height-y)


showarrows = True


def display(x, y, vx, vy, deltaVx, deltaVy, theta, mass):
    background(245)
    stroke(0)
    fill(0)
    tri_width = 7
    if (frameCount % 3 == 0):
        if (len(xHistory) > MAX_LENGTH):
            xHistory.pop(0)
        if (len(yHistory) > MAX_LENGTH):
            yHistory.pop(0)
        xHistory.append(x)
        yHistory.append(y)
    for i in range(len(xHistory)):
        drawPoint(xHistory[i], height - yHistory[i])
    if showarrows:
        x_line = 10
        y_line = 10
        line_len = 100
        drawLine(x_line, y_line, x_line, y_line+line_len)
        drawLine(x_line, y_line, x_line+line_len, y_line)
        drawTriangle(x_line-tri_width/2, y_line+line_len, x_line +
                     tri_width/2, y_line+line_len, x_line, y_line+line_len+10)
        drawTriangle(x_line+line_len, y_line-tri_width/2, x_line +
                     line_len, y_line+tri_width/2, x_line+line_len+10, y_line)
        drawText("+x", x_line+line_len+10, y_line)
        drawText("+y", x_line, y_line+line_len+15)
        fill(255, 0, 0)
        drawText("Velocity", 0.8*width, 25)
        fill(0, 0, 255)
        drawText("Force", 0.8*width, 50)
        fill(204, 0, 204)
        drawText("Acceleration", 0.8*width, 75)
    r = 12
    translate(x, height-y)
    rotate(-theta+PI/2)
    fill(175)
    strokeWeight(2)
    beginShape()
    vertex(-r, r)
    vertex(0, -1.5*r)
    vertex(r, r)
    vertex(-r, r)
    endShape()
    if ((deltaVx != 0) | (deltaVy != 0)):
        length = 50*(deltaVx*deltaVx + deltaVy*deltaVy) * \
            mass*mass/(30.0*30.0*0.1*0.1)
        stroke(0, 0, 255)
        strokeWeight(5)
        line(0, 0, 0, -length)
        triangle(0, -length-tri_width, tri_width /
                 2, -length, -tri_width/2, -length)
        accel_len = 200*(deltaVx*deltaVx + deltaVy*deltaVy)/(30.0*30.0*0.1*0.1)
        stroke(204, 0, 204)
        strokeWeight(5)
        line(0, 0, 0, -accel_len)
        triangle(0, -accel_len-tri_width, tri_width /
                 2, -accel_len, -tri_width/2, -accel_len)
    rotate(theta - PI/2)
    translate(-x, -(height-y))
    vel_angle = -atan2(vy, vx)
    if (vx*vx + vy*vy > 0):
        stroke(255, 0, 0)
        strokeWeight(5)
        v_scaling = 1.0
        drawLine(x, y, x + v_scaling*vx, y + v_scaling*vy)
        drawTriangle(x+v_scaling*vx+sin(vel_angle)*tri_width/2, y+v_scaling*vy+cos(vel_angle)*tri_width/2, x+v_scaling*vx-sin(vel_angle)
                     * tri_width/2, y+v_scaling*vy-cos(vel_angle)*tri_width/2, x+v_scaling*vx+cos(vel_angle)*10, y+v_scaling*vy-sin(vel_angle)*10)
        stroke(0)
        strokeWeight(2)
