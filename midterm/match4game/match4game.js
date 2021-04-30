var cellList = $("#cells");
var alerttext ="Enter Your Name, you will be"

var player1 = prompt("Player One: "+alerttext+" Blue");
var player1color = 'rgb(86,151,255)';

var player2 = prompt("Player Two: "+alerttext+" Red");
var player2color = 'rgb(237,45,73)';


var game_on = true;
var table = $('table tr');

var backColor = 'rgb(228, 148, 1)'

for(var col = 0; col<7;col++){
    for(var row=0; row<7;row++){
        changeColor(row, col,backColor);
    }
}// 기본색으로 모두 초기화

function reportWin(rowNum, colNum){
    console.log(" You won starting at this row, col");
    console.log(rowNum);
    console.log(colNum);
}// 승리 메세지

function changeColor(rowIndex, colIndex,color){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returnColor(rowIndex, colIndex){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
    var colorReport = returnColor(5, colIndex);
    for(var row = 5; row>-1;row--){
        colorReport = returnColor(row,colIndex);
        if(colorReport === backColor){
            return row
        }
    }
}// 비어있는 맨 밑의 행 반환

function colorMatchCheck(one,two,three,four){
    return (one === two && one === three && one === four && one!=backColor && one!==undefined)
}// 색 4개가 배경색이 아니면서 똑같은지 아닌지 확인

function horizontalWinCheck(){
    for(var row=0; row<6;row++){
        for(var col = 0; col<4;col++){
            if(colorMatchCheck(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))){
                console.log(returnColor(row,col));
                console.log('horiz');
                reportWin(row,col);
                return true;
            }
            else{
                continue;
            }
        }
    }
}
function verticalWinCheck(){
    for(var col = 0; col<7;col++){
        for(var row=0; row<3;row++){
            if(colorMatchCheck(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3,col))){
                console.log('vertical');
                reportWin(row,col);
                return true;
            }
            else{
                continue;
            }
        }
    }
}

function diagonalWinCheck(){
    for(var col = 0; col<5;col++){
        for(var row=0; row<7;row++){
            if(colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2), returnColor(row+3,col+3))){
                console.log('diag');
                reportWin(row,col);
                return true;
            }else if(colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2,col+2), returnColor(row-3,col+3))){
                console.log('diag');
                reportWin(row,col);
                return true;
            }
            else{
                continue;
            }
        }
    }
}

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1color;

$('h3').text(player1+" it is your turn, pick a column to drop in!")

$('.board button').on('click', function(){

    var col = $(this).closest('td').index();
    console.log(col);
    var bottomAvail = checkBottom(col);

    changeColor(bottomAvail,col,currentColor);

    if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
        $('h1').text(currentName + "You have won!")
        $('h2').fadeOut('fast');
        $('h3').fadeOut('fast');
    }

    currentPlayer = currentPlayer * -1;

    if(currentPlayer === 1){
        currentName = player1;
        $('h3').text(currentName+", it is your turn.");
        currentColor = player1color;
    }else{
        currentName = player2;
        $('h3').text(currentName+", it is your turn.");
        currentColor = player2color;
    }

})

$('#reset').on('click', function(){
    
    for(var col = 0; col<7;col++){
        for(var row=0; row<7;row++){
            changeColor(row, col,backColor);
        }
    }
    $('h1').text("Welcome to Connect Four!")
    $('h2').fadeIn('fast');
    $('h3').fadeIn('fast');
})

$('#return').on('click', function(){
    location.href= '../';
})
