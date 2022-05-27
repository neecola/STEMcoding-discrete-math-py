// TEST independent python files
// const fs = require('fs')
// sketchCode = ''
// fs.readFile('main.py', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     sketchCode = data
// });



// let sketchCode = `

// rect_base_size = 30
// positions = []
// rect_size = None
// def setup():
//     global rect_size
//     createP("Hi! This is an example of how to use p5.dom.js with pyp5js")
//     # creates a container div
//     slider_div = createDiv()
//     slider_div.style("display", "block")
//     # creates the slider
//     rect_size = createSlider(0, 600, 100)
//     rect_size.style('width', '50%')
//     # adds the slider to the container div
//     slider_div.child(rect_size)
//     createCanvas(600, 600)
//     for x in range(-rect_base_size, width + rect_base_size, rect_base_size):
//         for y in range(-rect_base_size, height + rect_base_size, rect_base_size):
//             positions.append((x, y))
//     noFill()
//     strokeWeight(2)
//     rectMode(CENTER)
// def draw():
//     background(255)
//     size = rect_size.value()
//     #testfcn()
//     for x, y in positions:
//         rect(x, y, size, size)

// `



let sketchCode = `

import time
xchecker1 = 50
ychecker1 = 50

xchecker2 = 150
ychecker2 = 50


xchecker3 = 250
ychecker3 = 50

xchecker4 = 350
ychecker4 = 50




showaxes = True


def draw():
    global xchecker1,ychecker1, xchecker1, ychecker2, xchecker3, ychecker3, xchecker4, ychecker4
    clearscreen(255, 255, 255)
    
    
    if ychecker1 < 750:
      if keyIsPressed and key == '1':
        ychecker1 = ychecker1 + 100
      
    if ychecker2 < 750:
      if keyIsPressed and key == '2':
        ychecker2 = ychecker2 + 100

    if ychecker3 < 750:
      if keyIsPressed and key == '3':
        ychecker3 = ychecker3 + 100
    
    if ychecker4 < 750:
      if keyIsPressed and key == '4':
        ychecker4 = ychecker4 + 100
    

    
    
    display()
    fill(0)

    ellipse(xchecker1,ychecker1,50,50)
    ellipse(xchecker2,ychecker2,50,50)
    ellipse(xchecker3,ychecker3,50,50)
    ellipse(xchecker4,ychecker4,50,50)

    if ychecker1 == 750 and ychecker2 == 750 and ychecker3 == 750 and ychecker4 == 750:
      fill(0,0,0) # rgb 0,0,0 means black
      drawText('Game Over!',135,350)
      exit()


`;
