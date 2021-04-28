$("#searchbutton").on('click',function(){
    var gameName = $("#gameText").val();
    console.log(gameName);
    location.href =gameName+"/"+gameName+".html";
})