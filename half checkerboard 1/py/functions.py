import math

# global vars 
left = False
right = False
up = False
down = False

MAX_LENGTH = 12
xHistory = list()
yHistory = list()
count = 0

showarrows = True

checker1moves = -1
checker2moves = -1
checker3moves = -1
checker4moves = -1

exiting = False

# creates canvas for checkerboard
def setup():
    canvas = createCanvas(400, 800)
    canvas.elt.style = 'width:'+ str(displayHeight/4) +'px; height:'+ str(displayHeight/2) +'px;';
    frameRate(2)



def exit():
    global exiting
    if exiting:
        noLoop()
    exiting = True


def ceil(_val):
    return math.ceil(_val)


def floor(_val):
    return math.floor(_val)


def random(_min, _max):
    return (_max - _min) * math.random() + _min
    




def clearscreen(r, g, b):
    background(r, g, b)
    removeElements()


def keyIsDown(thestring):
    if thestring == 'UP_ARROW':
      return up
    if thestring == 'DOWN_ARROW':
      return down
    if thestring == 'LEFT_ARROW':
      return left
    if thestring == 'RIGHT_ARROW':
      return right

def keyPressed(keyCode):
    global left, right, up, down
    if keyCode == 'LEFT_ARROW':
            left = True
    elif keyCode == 'RIGHT_ARROW':
            right = True
    if keyCode == 'UP_ARROW':
            up = True
    elif keyCode == 'DOWN_ARROW':
            down = True
   
def keyReleased(keyCode):
    global left, right, up, down
    if keyCode == 'LEFT_ARROW':
            left = False
    elif keyCode == 'RIGHT_ARROW':
            right = False
    if keyCode == 'UP_ARROW':
            up = False
    elif keyCode == 'DOWN_ARROW':
            down = False
    

def drawLine(x1, y1, x2, y2):
    line(x1, height-y1, x2, height-y2)


def drawText(str, x, y):
    textSize(20)
    strokeWeight(1)
    text(str, x, height-y)


# variables only used by display
# need to be global
# 1 is true, 0 is false, -1 is ?


if 'showaxes' not in globals():
    shownewaxes = False

if 'shownewaxes' not in globals():
    shownewaxes = False


# doesxychecker1exist = -1
# doesxychecker2exist = -1
# doesxychecker3exist = -1
# doesxychecker4exist = -1

# checker1canmove = -1
# checker2canmove = -1
# checker3canmove = -1
# checker4canmove = -1

ychecker1old = -1
ychecker2old = -1
ychecker3old = -1
ychecker4old = -1

keyWasPressed = False
keyWas = None

checker1stopsatbottom = -1
checker2stopsatbottom = -1
checker3stopsatbottom = -1
checker4stopsatbottom = -1

movedtoofar_warning = False



def display():

    global showaxes
    
    global ychecker1old
    global ychecker2old
    global ychecker3old
    global ychecker4old
    
    global checker1stopsatbottom
    global checker2stopsatbottom
    global checker3stopsatbottom
    global checker4stopsatbottom
    
    global ychecker1
    global ychecker2
    global ychecker3
    global ychecker4
    
    global keyWas
    global keyWasPressed
    
    global checker1moves
    global checker2moves
    global checker3moves
    global checker4moves 
    
    global movedtoofar_warning

    # symbols used in interface
    check_mark = '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">'
    red_x = '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png">'
    question_mark = '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">'


    
    
   
    # show axes
    showaxes_string = '<b>OBJECTIVE:</b> Show the coordinate axes <b>STATUS:</b> '
    if showaxes is True:
        showaxes_string += check_mark
    else:
        showaxes_string += red_x




    # check and print if the checkers' coordinates are defined

    checkers_definition_string = '<b>OBJECTIVE:</b> Add variables for all four checkers <b>STATUS:</b>'

    # first checker
    checkers_definition_string += ' checker 1 '
    if 'xchecker1' in globals() and 'ychecker1' in globals():
        checkers_definition_string += check_mark
    elif 'xchecker1' in globals() or 'ychecker1' in globals():
        checkers_definition_string += question_mark
    else:
        checkers_definition_string += red_x
    
    # second checker
    checkers_definition_string += ' checker 2 '
    if 'xchecker2' in globals() and 'ychecker2' in globals():
        checkers_definition_string += check_mark
    elif 'xchecker2' in globals() or 'ychecker2' in globals():
        checkers_definition_string += question_mark
    else:
        checkers_definition_string += red_x

    # third checker
    checkers_definition_string += ' checker 3 '
    if 'xchecker3' in globals() and 'ychecker3' in globals():
        checkers_definition_string += check_mark
    elif 'xchecker3' in globals() or 'ychecker3' in globals():
        checkers_definition_string += question_mark
    else:
        checkers_definition_string += red_x

    # fourth checker
    checkers_definition_string += ' checker 4'
    if 'xchecker4' in globals() and 'ychecker4' in globals():
        checkers_definition_string += check_mark
    elif 'xchecker4' in globals() or 'ychecker4' in globals():
        checkers_definition_string += question_mark
    else:
        checkers_definition_string += red_x

    




    ## checks if the checkers stop at bottom
    stopatbott_string = '<b>OBJECTIVE:</b> Make sure the checkers stop at the bottom <b>STATUS:</b>'
    
    #checker 1
    stopatbott_string += ' checker 1'
    if 'ychecker1' in globals():
        if (keyIsPressed and key == '1' and ychecker1 == 750 and ychecker1old == 750) or checker1stopsatbottom == 1:
            stopatbott_string += check_mark
            checker1stopsatbottom = 1
        elif ychecker1 > 750:
            stopatbott_string += red_x
        else:
            stopatbott_string += question_mark
        
    
    #checker 2
    stopatbott_string += ' checker 2'
    if 'ychecker2' in globals():
        if (keyIsPressed and key == '2' and ychecker2 == 750 and ychecker2old == 750) or checker2stopsatbottom == 1:
            stopatbott_string += check_mark
            checker2stopsatbottom = 1
        elif ychecker2 > 750:
            stopatbott_string += red_x
        else:
            stopatbott_string += question_mark

    
    #checker 3
    stopatbott_string += ' checker 3'
    if 'ychecker3' in globals():
        if (keyIsPressed and key == '3' and ychecker3 == 750 and ychecker3old == 750) or checker3stopsatbottom == 1:
            stopatbott_string += check_mark
            checker3stopsatbottom = 1
        elif ychecker3 > 750:
            stopatbott_string += red_x
        else:
            stopatbott_string += question_mark

    
    #checker 4
    stopatbott_string += ' checker 4'
    if 'ychecker4' in globals():
        if (keyIsPressed and key == '4' and ychecker4 == 750 and ychecker4old == 750) or checker4stopsatbottom == 1:
            stopatbott_string += check_mark
            checker4stopsatbottom = 1
        elif ychecker4 > 750:
            stopatbott_string += red_x
        else:
            stopatbott_string += question_mark

    end_string ='<b>OBJECTIVE:</b> End the game when all four checkers are at the bottom <b>STATUS:</b>'
    if 'ychecker1' in globals() and 'ychecker2' in globals() and 'ychecker3' in globals() and 'ychecker4' in globals():
        if ychecker1 == 750 and ychecker2 == 750 and ychecker3 == 750 and ychecker4 == 750 and exiting and movedtoofar_warning == False:
            end_string += check_mark
        else: end_string += question_mark
    else: end_string += question_mark


    

    
    
    
    
    
    
    
    
    
    # numcheckersstopatbottom = 0
    # if (checker1stopsatbottom == 1): numcheckersstopatbottom += 1
    # if (checker2stopsatbottom == 1): numcheckersstopatbottom += 1
    # if (checker3stopsatbottom == 1): numcheckersstopatbottom += 1
    # if (checker4stopsatbottom == 1): numcheckersstopatbottom += 1

    # if 'ychecker1' in globals() and 'ychecker2' in globals() and 'ychecker3' in globals() and 'ychecker4' in globals():
    #     if ychecker1 > 725 and ychecker1 < 775 and ychecker2 > 725 and ychecker2 < 775 and ychecker3 > 725 and ychecker3 < 775 and ychecker4 > 725 and ychecker4 < 775 and exiting:
    #         if numcheckersstopatbottom == 3:
    #             checker1stopsatbottom = 1
    #             checker2stopsatbottom = 1
    #             checker3stopsatbottom = 1
    #             checker4stopsatbottom = 1
            
        
    
    
        
        
    ## checks if the checkers can move
    canmove_string = '<b>OBJECTIVE:</b> Make sure all the checkers can move <b>STATUS:</b> '
    
    canmove_string += ' checker 1'
    if 'ychecker1' in globals() and keyIsPressed and key == '1':
        if ychecker1 > ychecker1old or ychecker1 == 750:
            checker1moves = 1
        else:
            checker1moves = 0
        
        
    if checker1moves == 1: canmove_string += check_mark
    if checker1moves == 0: canmove_string += red_x
    if checker1moves == -1: canmove_string += question_mark
        
        
    canmove_string += ' checker 2'
    if 'ychecker2' in globals() and keyIsPressed and key == '2':
        if ychecker2 > ychecker2old or ychecker2 == 750:
            checker2moves = 1
        else:
            checker2moves = 0
        
    if checker2moves == 1: canmove_string += check_mark
    if checker2moves == 0: canmove_string += red_x
    if checker2moves == -1: canmove_string += question_mark
        
        
    
    canmove_string += ' checker 3'
    if 'ychecker3' in globals() and keyIsPressed and key == '3':
        if ychecker3 > ychecker3old or ychecker3 == 750:
            checker3moves = 1
        else:
            checker3moves = 0
        
    if checker3moves == 1: canmove_string += check_mark
    if checker3moves == 0: canmove_string += red_x
    if checker3moves == -1: canmove_string += question_mark
        
    
    canmove_string += ' checker 4'
    if 'ychecker4' in globals() and keyIsPressed and key == '4':
        if ychecker4 > ychecker4old or ychecker4 == 750:
            checker4moves = 1
        else:
            checker4moves = 0
        
    if checker4moves == 1: canmove_string += check_mark
    if checker4moves == 0: canmove_string += red_x
    if checker4moves == -1: canmove_string += question_mark

    
    if 'ychecker1' in globals():
        if ychecker1 - ychecker1old > 100 and ychecker1old != -1: movedtoofar_warning = True

    if 'ychecker2' in globals():
        if ychecker2 - ychecker2old > 100 and ychecker2old != -1: movedtoofar_warning = True

    if 'ychecker3' in globals():
        if ychecker3 - ychecker3old > 100 and ychecker3old != -1: movedtoofar_warning = True
        

    if 'ychecker4' in globals():
        if ychecker4 - ychecker4old > 100 and ychecker4old != -1: movedtoofar_warning = True

    
    



        # if ychecker2 in globals():
        # if ychecker3 in globals():
        # if ychecker4 in globals():
     

    # if (checkermovedtoofarwarning) {
    #     createP('<span style="color:red">One or more checkers moved too far in one step!</span>');
    # }
     
    
    
    
    
    
    
    createP(showaxes_string)
    createP(checkers_definition_string)
    if movedtoofar_warning: createP('<span style="color:red">One or more checkers moved too far in one step!</span>')
    createP(canmove_string)
    createP(stopatbott_string)
    createP(end_string)
    
    
    
    ## DRAWS CHECKERBOARD ##
    
    textSize(12)
    textStyle(NORMAL)
    noStroke()
    fill(170)
    
    for y in range(0, 701, 200):
        quad(100, y, 200, y, 200, y + 100, 100, y + 100)
        quad(300, y, 400, y, 400, y + 100, 300, y + 100)
    
    for y in range(100, 701, 200):
        quad(0, y, 100, y, 100, y + 100, 0, y + 100)
        quad(200, y, 300, y, 300, y + 100, 200, y + 100)
    
   
    textSize(25)
    strokeWeight(1)
    stroke(0)
    fill(0)
    
    
    
    for i, x in enumerate(range(0, 401, 100)):
        line(x, 800, x, 0)
    
    text('1', 75, 85)
    text('2', 175, 85)
    text('3', 275, 85)
    text('4', 375, 85)
    
    for i in range(0, 801, 100):
        line(0, i, 400, i)
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    if(showaxes):
        strokeWeight(1)
        tri_width = 7
        x_line = 5
        y_line = 5
        line_len = 100
        line(x_line, y_line, x_line, y_line + line_len)
        line(x_line, y_line, x_line + line_len, y_line)
        triangle(x_line - tri_width / 2, y_line + line_len, x_line + tri_width / 2, y_line + line_len, x_line, y_line + line_len + 10)
        triangle(x_line + line_len, y_line - tri_width / 2, x_line + line_len, y_line + tri_width / 2, x_line + line_len + 10, y_line)
        
        strokeWeight(0)
        textSize(18)
        text("+x", x_line + line_len, y_line + 20)
        text("+y", x_line, y_line + line_len + 25)
        
        strokeWeight(15)
        
        point(400, 0)
        point(400, 400)
        point(400, 800)
        
        point(0, 0)
        point(0, 400)
        point(0, 800)

        strokeWeight(0)
        textSize(20)
        text("(0,0)", 7, 25)
        text("(400,0)", 325, 20)
        text("(0,400)", 0, 390)
        text("(400,400)", 300, 390)
        text("(400,800)", 300, 790)
        text("(0,800)", 0, 790)
    
    
    if shownewaxes:
        
        fill(0)
        textSize(20)

        for i, x in enumerate(range(50, 351, 100)):
            for j, y in enumerate(range(50, 751, 100)):
                
                strokeWeight(15)
                point(x, y)
                
                strokeWeight(0)
                text(f'({i}, {j})', x-50, y+40)
                
    
        
    # updates old ycheckers if they exist
    if 'ychecker1' in globals():
        ychecker1old = ychecker1
    if 'ychecker2' in globals():
        ychecker2old = ychecker2
    if 'ychecker3' in globals():
        ychecker3old = ychecker3
    if 'ychecker4' in globals():
        ychecker4old = ychecker4
    
    # updates pressed key
    if keyIsPressed:
        keyWasPressed = True
        keyWas = key
    else:
        keyWasPressed = False
        keyWas = None
        
    
