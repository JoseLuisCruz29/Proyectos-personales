const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')

const $sprite = document.querySelector('#sprite')
const $bricks = document.querySelector('#bricks')
canvas.width = 448
canvas.height = 400

/*Variables de los Bricks */
const brickRowCount = 5;
const brickColumnCount = 13;
const brickWidth = 30;
const brickHeight = 10;
const brickPadding = 2;
const brickOffsetTop = 20;
const brickOffsetLeft = 16;
const bricks = [];

const BRICK_STATUD = {
    ACTIVE: 1,
    DESTROID: 0
}


for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [] //Inicia con Array Vacio
    for (let r = 0; r < brickColumnCount; r++) {
        //Se carcula la posicion del ladrillo con la pantalla
        const brickX = c * (brickWidth + brickPadding) +
            brickOffsetLeft
        const brickY = r * (brickHeight + brickPadding) +
            brickOffsetTop
        //Asignar color aleatorio al ladrillo
        const random = Math.floor(Math.random() * 8)
        //Se guarda la informacion del ladrillo
        bricks[c][r] = {
            x: brickX,
            y: brickY,
            status: BRICK_STATUD.ACTIVE,
            color: random
        }
    }
}
/*Variables de la pelota */
const ballRadius = 7;

/*Posicion de la pelota */
let x = canvas.width / 2
let y = canvas.height - 30

/*Velocidad de la pelota */
let dx = -2
let dy = -2

/* Variable de la Paleta */
const paddleHeight = 8;
const paddleWidth = 80;

let paddleX = (canvas.width - paddleWidth) / 2
let paddleY = canvas.height - paddleHeight - 10

let rigthPressed = false
let leftPressed = false

const PADDLE_SENSIBILITY = 3

function drawBall() {
    ctx.beginPath() // Inicia el trazado
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = '#fff'
    ctx.fill()
    ctx.closePath() // Terminar el trazado
}

function drawPaddle() {
    ctx.fillRect(
        paddleX, //Cordenada X
        paddleY, // Cordenada Y
        paddleWidth, //El ancho del dibujo
        paddleHeight // el alto del dibujo
    )
    ctx.drawImage(
        $sprite,
        7,
        174,
        paddleWidth,
        paddleHeight,
        paddleX,
        paddleY,
        90,
        10
    )
}
function drawBrick() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickColumnCount; r++) {
            const currentBrick = bricks[c][r]
            if (currentBrick.status == BRICK_STATUD.DESTROID) continue;

            const clipX = currentBrick.color * 15
            ctx.drawImage(
                $bricks,
                clipX,
                0,
                1,
                6,
                currentBrick.x,
                currentBrick.y,
                brickWidth,
                brickHeight,
            )
        }
    }
}

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickColumnCount; r++) {
            const currentBrick = bricks[c][r]
            if (currentBrick.status == BRICK_STATUD.DESTROID) continue;
            const isBallSmaXAsBrick =
                x > currentBrick.x &&
                x < currentBrick.x + brickWidth

            const isBallSmaYAsBrick =
                y > currentBrick.y &&
                y < currentBrick.y + brickHeight

            if (isBallSmaXAsBrick && isBallSmaYAsBrick) {
                dy = -dy
                currentBrick.status = BRICK_STATUD.DESTROID
            }
        }
    }
}
function ballMovement() {
    if (
        x + dx > canvas.width - ballRadius || //La Pared derecha
        x + dx < ballRadius // La pared Izquierda
    ) {
        dx = -dx
    }
    if (y + dy < ballRadius) {
        dy = -dy
    }
    //rebotar en la pala
    const isBallSmaXAsPaddle =
        x > paddleX &&
        x < paddleX + paddleWidth

    const isBallTouchingPaddle =
        y + dy > paddleY
    console.log(isBallSmaXAsPaddle)
    if (isBallSmaXAsPaddle && isBallTouchingPaddle) {
        dy = -dy
    }
    else if ( //rebotar en el suelo
        y + dy > canvas.height - ballRadius

    ) {
        console.log('Game Over')
        document.location.reload()
    }


    //Mueve la pelota
    x += dx
    y += dy
}
function paddleMovement() {
    if (rigthPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += PADDLE_SENSIBILITY
    } else if (leftPressed && paddleX > 0) {
        paddleX -= PADDLE_SENSIBILITY
    }
}
console.log(rigthPressed);
function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function initEvents() {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    function keyDownHandler(event) {
        const { key } = event
        if (key == 'Right' || key == 'ArrowRight') {
            rigthPressed = true
        } else if (key == 'Left' || key == 'ArrowLeft') {
            leftPressed = true
        }
    }
    function keyUpHandler(event) {
        const { key } = event
        if (key == 'Right' || key == 'ArrowRight') {
            rigthPressed = false
        } else if (key == 'Left' || key == 'ArrowLeft') {
            leftPressed = false
        }
    }
}

function draw() {
    console.log(rigthPressed, leftPressed)
    cleanCanvas()
    drawBall()
    drawPaddle()
    drawBrick()

    collisionDetection()
    ballMovement()
    paddleMovement()

    window.requestAnimationFrame(draw)
}
draw()
initEvents()