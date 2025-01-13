showGrid(50)
setSpeed(50)
color("blue")
width(5)


function square(size,x,y){
    penup()
    goto(x,y)
    pendown()
    
    forward(size)
    right(90)
    forward(size)
    right(90)
    forward(size)
    right(90)
    forward(size)
    right(90)
}

function triangle(size,x,y){
    penup()
    goto(x,y)
    pendown()
     
    forward(size)
    right(120)
    forward(size)
    right(120)
    forward(size)
    right(120)
}

function circle(r,x,y){
    penup()
    goto(x,y)
    pendown()

    for(let i=0 i < 360 i++){
        forward(0.1)
        right(1)
    }
}


square(100,0,0)
square(200,-100,-100)
square(50)

triangle(100,50,50)

circle(10,0,0)
