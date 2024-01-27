const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGamebtn=document.querySelector(".btn");
const sign=document.querySelector(".tic-tac-toe");
let currentPlayer;
let gameGrid;
const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// const para=document.createElement("p");
// para.innerText("this is truying");
// document.body.appendChild(para);
console.log("helo");
function initGame()
{
    newGamebtn.classList.remove("active");
    sign.classList.remove("tied");
    sign.classList.remove("win1");
    gameInfo.classList.remove("tied");
    gameInfo.classList.remove("win1")
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box,index) => {
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        // initialise box with previous css properties
        box.classList=`box box${index+1}`;
    })
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
    
}
initGame();
function swapTurn()
{
    if(currentPlayer === "X")
    currentPlayer=0;
    else
    currentPlayer="X";
    // UI Update
    gameInfo.innerText=`Current player - ${currentPlayer}`;
}
function checkGameOver()
{
    let answer="";

    winningPositions.forEach((position) =>{
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="") &&(gameGrid[position[1]]===gameGrid[position[0]]) && (gameGrid[position[1]]===gameGrid[position[2]]) )
        {
            if(gameGrid[position[0]]==="X")
                answer="X";
            else
                answer="0";
    // agar jeet gya , to pointe click rok do
    boxes.forEach((box) =>{
        box.style.pointerEvents="none";
    })
   
        boxes[position[0]].innerText="W";
        boxes[position[1]].innerText="W";
        boxes[position[2]].innerText="W";
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
        }
    });
    if(answer!=="")
    {
        sign.classList.add("win1");
        gameInfo.classList.add("win1");
        gameInfo.innerText=`Winner is - ${answer}`;
        newGamebtn.classList.add("active");
        return;
    }
   
    // when there is no winner
    let fillCount=0;
    gameGrid.forEach((box) =>{
        if(box!=="")
        fillCount++;
    });
    if(fillCount===9)
    {
        gameInfo.innerText="Game tied ";
        sign.classList.add("tied");
        gameInfo.classList.add("tied");
        newGamebtn.classList.add("active");

    }
}
function handleClick(index)
{
   
    if(gameGrid[index] === "")
    {
    //    console.log("hlo");
        boxes[index].innerHTML=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameOver();
    }
}

boxes.forEach((box,index) => {
   
    box.addEventListener("click", ()=> {
        handleClick(index);
    })
   
});
newGamebtn.addEventListener("click",initGame);
