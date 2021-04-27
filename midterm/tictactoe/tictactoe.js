var cellList = document.querySelectorAll("td")
var restart = document.querySelector("#restart_button")


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
})