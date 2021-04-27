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

$('.tictac button').on('click', function(){

    var col = $(this).closest('td').index();
    console.log($(this).text());
    if($(this).text()==="O"||$(this).text()==="X")
    {

    }
    else{
        currentPlayer = currentPlayer * -1;

        if(currentPlayer === 1){
            $(this).text("O");
        }else{
            $(this).text("X");
        }
    }
    

    
})

var table = $('table tr');
$('#restart_button').on('click',function(){
    for(var col = 0; col<3;col++){
        for(var row=0; row<3;row++){
            table.eq(row).find('td').eq(col).find('button').text('');
        }
    }
})