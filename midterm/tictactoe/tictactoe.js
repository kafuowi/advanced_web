var cellList = document.querySelectorAll("td")
var restart = document.querySelector("#restart_button")
/*

for( var i=0;i<9;i++){
    
    cellList[i].addEventListener("click",function(){
        this.textContent="O"
    })
    cellList[i].addEventListener("dblclick",function(){
        this.textContent="X"
    })
}

restart.addEventListener("click",function(){
    for(var i=0;i<9;i++){
        cellList[i].textContent=""
    }
})*/
var currentPlayer =1;

var table = $('table tr');

function returnText(rowIndex, colIndex){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').text();
}
function checksame(one, two, three){
    if(one === two&&one===three&&(one==='X'||one==='O'))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function checkrow(){
    for(var i =0;i<3;i++){
        if(checksame(returnText(i,0),returnText(i,1),returnText(i,2)))
        {
            return true;
        }
    }
}
function checkcol(){
    for(var i =0;i<3;i++){
        if(checksame(returnText(0,i),returnText(1,i),returnText(2,i)))
        {
            return true;
        }
    }
}
function checkdiag(){
    if(checksame(returnText(0,0),returnText(1,1),returnText(2,2))||checksame(returnText(0,2),returnText(1,1),returnText(2,0)))
    {
        return true;
    }
}

$('.tictac button').on('click', function(){

    var col = $(this).closest('td').index();
    console.log($(this).text());
    if($(this).text()==="O"||$(this).text()==="X")
    {

    }
    else{

        if(currentPlayer === 1){
            $(this).text("O");
        }else{
            $(this).text("X");
        }
        
        
    }
    if(checkcol()||checkrow()||checkdiag()){
        var playerNum;
        if(currentPlayer === 1){
            playerNum =1;
        }
        else{
            playerNum=2;
        }
        $('h1').text('Player'+playerNum + ' Wins');
    }
    currentPlayer = currentPlayer * -1;

    
})
$('#restart_button').on('click',function(){
    for(var col = 0; col<3;col++){
        for(var row=0; row<3;row++){
            table.eq(row).find('td').eq(col).find('button').text('');
        }
    }
    $('h1').text('Tic Tac Toe Game');
})