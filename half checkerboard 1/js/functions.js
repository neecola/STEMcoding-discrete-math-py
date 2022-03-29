if (location.hostname !== "") {
    window.addEventListener("error", function (e) {
        createP('<p style="color:red">' + e.message + '</p>');
    });
}

function ceil(_val) {
    return Math.ceil(_val);
}

function floor(_val) {
    return Math.floor(_val);
}

function random(_min, _max) {
    if (typeof _max === 'undefined' & _min instanceof Array) {
        return _min[Math.floor(Math.random() * _min.length)]
    } else if (typeof _min !== 'undefined' & typeof _max !== 'undefined') {
        return (_max - _min) * Math.random() + _min;
    } else if (typeof _min === 'undefined' & typeof _max === 'undefined') {
        return Math.random();
    } else if (typeof _min !== 'undefined' & typeof _max === 'undefined') {
        return _min * Math.random();
    }

}

function print(_arg) {
    console.log(_arg);
}

function clearscreen(_r, _g, _b) {
    background(_r, _g, _b);
    removeElements();
}

// prevent warnings from my creative redefinition of random()
p5.disableFriendlyErrors = true;

var showaxes;
var shownewaxes;

function setup() {
    mycanvas = createCanvas(400, 800);
    //mycanvas.elt.style = 'width: 300px; height: 600px;';
    if (location.hostname !== "") { // lms
        var iPad = navigator.maxTouchPoints == 5;
        if (iPad) { // is an iPad
            mycanvas.elt.style = 'width:' + displayHeight / 6 + 'px; height:' + displayHeight / 3 + 'px;';
        } else { // not an iPad
            mycanvas.elt.style = 'width:' + displayHeight / 4 + 'px; height:' + displayHeight / 2 + 'px;';
        }

    } else {   // editor.p5js.org
        mycanvas.elt.style = 'width:' + displayHeight / 6 + 'px; height:' + displayHeight / 3 + 'px;';
    }

    frameRate(5);
    this.focus();
}

exiting = false;

function exit() {

    if (exiting) {
        noLoop();
    }
    exiting = true;
}

// 1 is true, 0 is false, -1 is ?
doesxychecker1exist = -1;
doesxychecker2exist = -1;
doesxychecker3exist = -1;
doesxychecker4exist = -1;

checker1canmove = -1;
checker2canmove = -1;
checker3canmove = -1;
checker4canmove = -1;

var ychecker1old;
var ychecker2old;
var ychecker3old;
var ychecker4old;

var keyWasPressed;
var keyWas;

checker1stopsatbottom = -1;
checker2stopsatbottom = -1;
checker3stopsatbottom = -1;
checker4stopsatbottom = -1;

checkermovedtoofarwarning = false;

// Draw the ship and other stuff
function display() {

    //    removeElements();

    if (showaxes === true) {
        createP('<b>OBJECTIVE:</b> Show the coordinate axes <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ');
    } else if (showaxes === false) {
        //	createP('<b>OBJECTIVE:</b> Show the coordinate axes <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ');
        createP('<b>OBJECTIVE:</b> Show the coordinate axes <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ');
    } else if (typeof showaxes == 'undefined') {
        createP('<b>OBJECTIVE:</b> Show the coordinate axes <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ');
    }


    if (typeof xchecker1 !== 'undefined' & typeof ychecker1 !== 'undefined') {
        doesxychecker1exist = 1;
    }

    if (typeof xchecker1 == 'undefined' & typeof ychecker1 == 'undefined') {
        doesxychecker1exist = 0;
    }

    if (typeof xchecker1 == 'undefined' & typeof ychecker1 !== 'undefined') {
        doesxychecker1exist = -1;
    }

    if (typeof xchecker1 !== 'undefined' & typeof ychecker1 == 'undefined') {
        doesxychecker1exist = -1;
    }

    if (typeof xchecker2 !== 'undefined' & typeof ychecker2 !== 'undefined') {
        doesxychecker2exist = 1;
    }

    if (typeof xchecker2 == 'undefined' & typeof ychecker2 == 'undefined') {
        doesxychecker2exist = 0;
    }

    if (typeof xchecker2 == 'undefined' & typeof ychecker2 !== 'undefined') {
        doesxychecker2exist = -1;
    }

    if (typeof xchecker2 !== 'undefined' & typeof ychecker2 == 'undefined') {
        doesxychecker2exist = -1;
    }

    /*
       if (doesxychecker2exist == 1) {
    createP('<b>OBJECTIVE:</b> Add variables for checker 2 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ');
    } else if (doesxychecker2exist == 0) {
    createP('<b>OBJECTIVE:</b> Add variables for checker 2 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ');
    } else if (doesxychecker2exist == -1){
    createP('<b>OBJECTIVE:</b> Add variables for checker 2 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ');
    } */

    if (typeof xchecker3 !== 'undefined' & typeof ychecker3 !== 'undefined') {
        doesxychecker3exist = 1;
    }

    if (typeof xchecker3 == 'undefined' & typeof ychecker3 == 'undefined') {
        doesxychecker3exist = 0;
    }

    if (typeof xchecker3 == 'undefined' & typeof ychecker3 !== 'undefined') {
        doesxychecker3exist = -1;
    }

    if (typeof xchecker3 !== 'undefined' & typeof ychecker3 == 'undefined') {
        doesxychecker3exist = -1;
    }

    /*
       if (doesxychecker3exist == 1) {
    createP('<b>OBJECTIVE:</b> Add variables for checker 3 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ');
    } else if (doesxychecker3exist == 0) {
    createP('<b>OBJECTIVE:</b> Add variables for checker 3 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ');
    } else if (doesxychecker3exist == -1){
    createP('<b>OBJECTIVE:</b> Add variables for checker 3 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ');
    }*/

    if (typeof xchecker4 !== 'undefined' & typeof ychecker4 !== 'undefined') {
        doesxychecker4exist = 1;
    }

    if (typeof xchecker4 == 'undefined' & typeof ychecker4 == 'undefined') {
        doesxychecker4exist = 0;
    }

    if (typeof xchecker4 == 'undefined' & typeof ychecker4 !== 'undefined') {
        doesxychecker4exist = -1;
    }

    if (typeof xchecker4 !== 'undefined' & typeof ychecker4 == 'undefined') {
        doesxychecker4exist = -1;
    }
    /*    
           if (doesxychecker4exist == 1) {
        createP('<b>OBJECTIVE:</b> Add variables for checker 4 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ');
        } else if (doesxychecker4exist == 0) {
        createP('<b>OBJECTIVE:</b> Add variables for checker 4 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ');
        } else if (doesxychecker4exist == -1){
        createP('<b>OBJECTIVE:</b> Add variables for checker 4 <b>STATUS:</b>  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ');
        }    */

    var checkerstring = '';

    if (doesxychecker1exist == 1) {
        checkerstring += ' checker 1  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (doesxychecker1exist == 0) {
        checkerstring += ' checker 1  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (doesxychecker1exist == -1) {
        checkerstring += ' checker 1  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (doesxychecker2exist == 1) {
        checkerstring += ' checker 2  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (doesxychecker2exist == 0) {
        checkerstring += ' checker 2  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (doesxychecker2exist == -1) {
        checkerstring += ' checker 2  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (doesxychecker3exist == 1) {
        checkerstring += ' checker 3  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (doesxychecker3exist == 0) {
        checkerstring += ' checker 3  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (doesxychecker3exist == -1) {
        checkerstring += ' checker 3  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (doesxychecker4exist == 1) {
        checkerstring += ' checker 4  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (doesxychecker4exist == 0) {
        checkerstring += ' checker 4  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (doesxychecker4exist == -1) {
        checkerstring += ' checker 4  <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    createP('<b>OBJECTIVE:</b> Add variables for all four checkers <b>STATUS:</b>' + checkerstring);



    if (typeof ychecker1 !== 'undefined') {
        if (keyWas == 1 & keyWasPressed & ychecker1old < 775 & ychecker1old > 725 & ychecker1 < 775 & ychecker1 > 725) checker1stopsatbottom = 1;
    }

    if (typeof ychecker2 !== 'undefined') {
        if (keyWas == 2 & keyWasPressed & ychecker2old < 775 & ychecker2old > 725 & ychecker2 < 775 & ychecker2 > 725) checker2stopsatbottom = 1;
    }
    if (typeof ychecker3 !== 'undefined') {
        if (keyWas == 3 & keyWasPressed & ychecker3old < 775 & ychecker3old > 725 & ychecker3 < 775 & ychecker3 > 725) checker3stopsatbottom = 1;
    }
    if (typeof ychecker4 !== 'undefined') {
        if (keyWas == 4 & keyWasPressed & ychecker4old < 775 & ychecker4old > 725 & ychecker4 < 775 & ychecker4 > 725) checker4stopsatbottom = 1;
    }


    if (keyWasPressed === true & keyIsPressed === false) {

        if (typeof ychecker1 !== 'undefined') {
            if (keyWas == 1 & ychecker1 > ychecker1old) checker1canmove = 1;
            if (keyWas == 1 & ychecker1 == ychecker1old & checker1stopsatbottom !== 1) checker1canmove = 0;
        }
        if (typeof ychecker2 !== 'undefined') {
            if (keyWas == 2 & ychecker2 > ychecker2old) checker2canmove = 1;
            if (keyWas == 2 & ychecker2 == ychecker2old & checker2stopsatbottom !== 1) checker2canmove = 0;
        }
        if (typeof ychecker3 !== 'undefined') {
            if (keyWas == 3 & ychecker3 > ychecker3old) checker3canmove = 1;
            if (keyWas == 3 & ychecker3 == ychecker3old & checker3stopsatbottom !== 1) checker3canmove = 0;
        }
        if (typeof ychecker4 !== 'undefined') {
            if (keyWas == 4 & ychecker4 > ychecker4old) checker4canmove = 1;
            if (keyWas == 4 & ychecker4 == ychecker4old & checker4stopsatbottom !== 1) checker4canmove = 1;
        }
    } // end if (keyWasPressed === true & keyIsPressed === false )

    var checkerstring = '';

    if (checker1canmove == 1) {
        checkerstring += ' checker 1 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker1canmove == 0) {
        checkerstring += ' checker 1 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker1canmove == -1) {
        checkerstring += ' checker 1 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (checker2canmove == 1) {
        checkerstring += ' checker 2 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker2canmove == 0) {
        checkerstring += ' checker 2 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker2canmove == -1) {
        checkerstring += ' checker 2 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (checker3canmove == 1) {
        checkerstring += ' checker 3 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker3canmove == 0) {
        checkerstring += ' checker 3 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker3canmove == -1) {
        checkerstring += ' checker 3 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (checker4canmove == 1) {
        checkerstring += ' checker 4 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker4canmove == 0) {
        checkerstring += ' checker 4 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker4canmove == -1) {
        checkerstring += ' checker 4 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    createP('<b>OBJECTIVE:</b> Make sure all the checkers can move <b>STATUS:</b>' + checkerstring);


    if (typeof ychecker1 !== 'undefined') {
        if (ychecker1 > ychecker1old + 115) checkermovedtoofarwarning = true;
    }
    if (typeof ychecker2 !== 'undefined') {
        if (ychecker2 > ychecker2old + 115) checkermovedtoofarwarning = true;
    }
    if (typeof ychecker3 !== 'undefined') {
        if (ychecker3 > ychecker3old + 115) checkermovedtoofarwarning = true;
    }
    if (typeof ychecker4 !== 'undefined') {
        if (ychecker4 > ychecker4old + 115) checkermovedtoofarwarning = true;
    }

    if (checkermovedtoofarwarning) {
        createP('<span style="color:red">One or more checkers moved too far in one step!</span>');
    }



    if (typeof ychecker1 !== 'undefined') {
        if (ychecker1 > 775) checker1stopsatbottom = 0;
    }
    if (typeof ychecker2 !== 'undefined') {
        if (ychecker2 > 775) checker2stopsatbottom = 0;
    }
    if (typeof ychecker3 !== 'undefined') {
        if (ychecker3 > 775) checker3stopsatbottom = 0;
    }
    if (typeof ychecker4 !== 'undefined') {
        if (ychecker4 > 775) checker4stopsatbottom = 0;
    }


    numcheckersstopatbottom = 0;
    if (checker1stopsatbottom == 1) numcheckersstopatbottom += 1;
    if (checker2stopsatbottom == 1) numcheckersstopatbottom += 1;
    if (checker3stopsatbottom == 1) numcheckersstopatbottom += 1;
    if (checker4stopsatbottom == 1) numcheckersstopatbottom += 1;

    if (typeof ychecker1 !== 'undefined' & typeof ychecker2 !== 'undefined' & typeof ychecker3 !== 'undefined' & typeof ychecker4 !== 'undefined') {
        if (ychecker1 > 725 & ychecker1 < 775 & ychecker2 > 725 & ychecker2 < 775 & ychecker3 > 725 & ychecker3 < 775 & ychecker4 > 725 & ychecker4 < 775 & exiting == true) {
            if (numcheckersstopatbottom == 3) {
                checker1stopsatbottom = 1;
                checker2stopsatbottom = 1;
                checker3stopsatbottom = 1;
                checker4stopsatbottom = 1;
            }
        }
    }




    checkerstring = '';

    if (checker1stopsatbottom == 1) {
        checkerstring += ' checker 1 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker1stopsatbottom == 0) {
        checkerstring += ' checker 1 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker1stopsatbottom == -1) {
        checkerstring += ' checker 1 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (checker2stopsatbottom == 1) {
        checkerstring += ' checker 2 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker2stopsatbottom == 0) {
        checkerstring += ' checker 2 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker2stopsatbottom == -1) {
        checkerstring += ' checker 2 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (checker3stopsatbottom == 1) {
        checkerstring += ' checker 3 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker3stopsatbottom == 0) {
        checkerstring += ' checker 3 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker3stopsatbottom == -1) {
        checkerstring += ' checker 3 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    if (checker4stopsatbottom == 1) {
        checkerstring += ' checker 4 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png"> ';
    }
    if (checker4stopsatbottom == 0) {
        checkerstring += ' checker 4 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png"> ';
    }
    if (checker4stopsatbottom == -1) {
        checkerstring += ' checker 4 <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png"> ';
    }

    createP('<b>OBJECTIVE:</b> Make sure the checkers stop at the bottom <b>STATUS:</b>' + checkerstring);


    checkerstring = '';

    if (typeof ychecker1 !== 'undefined' & typeof ychecker2 !== 'undefined' & typeof ychecker3 !== 'undefined' & typeof ychecker4 !== 'undefined') {
        if (ychecker1 > 725 & ychecker1 < 775 & ychecker2 > 725 & ychecker2 < 775 & ychecker3 > 725 & ychecker3 < 775 & ychecker4 > 725 & ychecker4 < 775 & exiting & checkermovedtoofarwarning == false) {
            checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">';
        } else {
            checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">';
        }
    } else {
        checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">';
    }

    createP('<b>OBJECTIVE:</b> End the game when all four checkers are at the bottom <b>STATUS:</b>' + checkerstring);

    textSize(12);
    textStyle(NORMAL);

    for (y = 100; y <= 700; y += 200) {
        drawQuad(0, y, 100, y, 100, y + 100, 0, y + 100);
    }
    for (y = 0; y <= 700; y += 200) {
        drawQuad(100, y, 200, y, 200, y + 100, 100, y + 100);
    }

    for (y = 100; y <= 700; y += 200) {
        drawQuad(200, y, 300, y, 300, y + 100, 200, y + 100);
    }


    for (y = 0; y <= 700; y += 200) {
        drawQuad(300, y, 400, y, 400, y + 100, 300, y + 100);
    }

    textSize(25);
    strokeWeight(1);
    stroke(0);
    fill(0);
    text('1', 75, 85);
    text('2', 175, 85);
    text('3', 275, 85);
    text('4', 375, 85);
    //  strokeWeight(1);
    //noFill();

    line(400, 800, 400, 0);
    line(0, 800, 0, 0);
    line(0, 0, 400, 0);
    line(100, 800, 100, 0);
    line(200, 800, 200, 0);
    line(300, 800, 300, 0);
    line(0, 800, 400, 800);
    line(0, 700, 400, 700);
    line(0, 600, 400, 600);
    line(0, 500, 400, 500);
    line(0, 400, 400, 400);
    line(0, 300, 400, 300);
    line(0, 200, 400, 200);
    line(0, 100, 400, 100);

    if (showaxes) {
        strokeWeight(1);
        var tri_width = 7;
        var x_line = 5;
        var y_line = 5;
        var line_len = 100;
        line(x_line, y_line, x_line, y_line + line_len);
        line(x_line, y_line, x_line + line_len, y_line);

        triangle(x_line - tri_width / 2, y_line + line_len, x_line + tri_width / 2, y_line + line_len, x_line, y_line + line_len + 10);
        triangle(x_line + line_len, y_line - tri_width / 2, x_line + line_len, y_line + tri_width / 2, x_line + line_len + 10, y_line);
        strokeWeight(0);
        textSize(18);
        text("+x", x_line + line_len, y_line + 20);
        text("+y", x_line, y_line + line_len + 25);

        strokeWeight(15);
        point(0, 0);
        point(400, 0);
        point(0, 400);
        point(400, 400);
        point(400, 800);
        point(0, 800);

        strokeWeight(0);
        textSize(20);
        text("(0,0)", 7, 25);
        text("(400,0)", 325, 20);
        text("(0,400)", 0, 390);
        text("(400,400)", 300, 390);
        text("(400,800)", 300, 790);
        text("(0,800)", 0, 790);
    }


    if (shownewaxes) {
        fill(0);
        strokeWeight(15);
        point(50, 50);
        point(50, 150);
        point(50, 250);
        point(50, 350);
        point(50, 450);
        point(50, 550);
        point(50, 650);
        point(50, 750);
        point(150, 50);
        point(150, 150);
        point(150, 250);
        point(150, 350);
        point(150, 450);
        point(150, 550);
        point(150, 650);
        point(150, 750);
        point(150, 50);
        point(150, 150);
        point(150, 250);
        point(150, 350);
        point(150, 450);
        point(150, 550);
        point(150, 650);
        point(150, 750);
        point(250, 50);
        point(250, 150);
        point(250, 250);
        point(250, 350);
        point(250, 450);
        point(250, 550);
        point(250, 650);
        point(250, 750);
        point(350, 50);
        point(350, 150);
        point(350, 250);
        point(350, 350);
        point(350, 450);
        point(350, 550);
        point(350, 650);
        point(350, 750);

        strokeWeight(0);
        textSize(20);
        text("(0,0)", 25, 90);
        text("(0,1)", 25, 190);
        text("(0,2)", 25, 290);
        text("(0,3)", 25, 390);
        text("(0,4)", 25, 490);
        text("(0,5)", 25, 590);
        text("(0,6)", 25, 690);
        text("(0,7)", 25, 790);


        text("(1,0)", 125, 90);
        text("(1,1)", 125, 190);
        text("(1,2)", 125, 290);
        text("(1,3)", 125, 390);
        text("(1,4)", 125, 490);
        text("(1,5)", 125, 590);
        text("(1,6)", 125, 690);
        text("(1,7)", 125, 790);



        text("(2,0)", 225, 90);
        text("(2,1)", 225, 190);
        text("(2,2)", 225, 290);
        text("(2,3)", 225, 390);
        text("(2,4)", 225, 490);
        text("(2,5)", 225, 590);
        text("(2,6)", 225, 690);
        text("(2,7)", 225, 790);


        text("(3,0)", 325, 90);
        text("(3,1)", 325, 190);
        text("(3,2)", 325, 290);
        text("(3,3)", 325, 390);
        text("(3,4)", 325, 490);
        text("(3,5)", 325, 590);
        text("(3,6)", 325, 690);
        text("(3,7)", 325, 790);

        strokeWeight(1);
        tri_width = 7;
        x_line = 50;
        y_line = 50;
        line_len = 70;
        line(x_line, y_line, x_line, y_line + line_len);
        line(x_line, y_line, x_line + line_len, y_line);

        triangle(x_line - tri_width / 2, y_line + line_len, x_line + tri_width / 2, y_line + line_len, x_line, y_line + line_len + 10);
        triangle(x_line + line_len, y_line - tri_width / 2, x_line + line_len, y_line + tri_width / 2, x_line + line_len + 10, y_line);
        strokeWeight(0);
        textSize(22);
        text("+i", x_line + line_len, y_line + 20);
        text("+j", x_line, y_line + line_len + 25);
    }



    //    fill(0,0,0); //If more text is written elsewhere make sure the default is black
    //    stroke(0,0,0); // If more lines are drawn elsewhere make sure the default is black
    //    strokeWeight(0);
    noFill();
    noStroke();
    // strokeWeight(1);
    //    drawText("Press the arrow keys to move the blob!",0.25*width,0.75*height);

    if (typeof ychecker1 !== 'undefined') {
        ychecker1old = ychecker1;
    }
    if (typeof ychecker2 !== 'undefined') {
        ychecker2old = ychecker2;
    }
    if (typeof ychecker3 !== 'undefined') {
        ychecker3old = ychecker3;
    }
    if (typeof ychecker4 !== 'undefined') {
        ychecker4old = ychecker4;
    }

    if (keyIsPressed) {
        keyWasPressed = true;
        keyWas = key;
    } else {
        keyWasPressed = false;
    }
}


function drawFlag(_x, _y) {
    fill(170);
    strokeWeight(5);
    ellipse(_x, height - _y, 50, 50);
    noFill();
}


function drawChecker(_x, _y) {
    fill(0);
    strokeWeight(5);
    ellipse(_x, height - _y, 50, 50);
    noFill();
}

function drawEllipse(_x, _y, _w, _h) {
    ellipse(_x, height - _y, _w, _h);
}

function drawLine(_x1, _y1, _x2, _y2) {
    strokeWeight(1);
    line(_x1, height - _y1, _x2, height - _y2);
    //  strokeWeight(0);
}

function drawPoint(_x, _y) {
    strokeWeight(2);
    stroke(0);
    point(_x, height - _y);
    strokeWeight(0);
    drawpointhasrun = true;
}

function drawQuad(_x1, _y1, _x2, _y2, _x3, _y3, _x4, _y4) {
    fill(170);
    noStroke();
    quad(_x1, height - _y1, _x2, height - _y2, _x3, height - _y3, _x4, height - _y4);
}

function drawRect(_x, _y, _w, _h) {
    rect(_x, height - _y, _w, _h);
}

function drawRect(_x, _y, _w, _h, _r) {
    rect(_x, height - _y, _w, _h, _r);
}

function drawRect(_x, _y, _w, _h, _tl, _tr, _br, _bl) {
    rect(_x, height - _y, _w, _h, _tl, _tr, _br, _bl);
}

function drawTriangle(_x1, _y1, _x2, _y2, _x3, _y3) {
    triangle(_x1, height - _y1, _x2, height - _y2, _x3, height - _y3);
}

function drawText(_str, _x, _y) {
    if (isNumeric(_str)) {
        _str = _str.toFixed(2);
        //        _str = round(100*_str)/100;
    }
    textSize(25);
    strokeWeight(1);
    stroke(0);
    fill(0);
    text(_str, _x, _y);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
