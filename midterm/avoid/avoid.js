var $bulletPrefab = $('#bulletPrefab').clone();
$bulletPrefab.attr('id','bullet');
/*
$('.bulletgroup').append($bulletPrefab.clone());
$('.bulletgroup').append($bulletPrefab.clone());
$('.bulletgroup').append($bulletPrefab.clone());
var bularr =$('.bulletgroup #bullet').get();
for(var i=0;i<=bularr.length;i++){
    console.log(bularr[i])
    bularr[i].style.top=Math.floor(Math.random() * 481)+"px";
}*/
var spawncount= 0;
for(var i=0;i<=10;i++){
    console.log(i);
    if(spawncount%10===0){
        var clone = $bulletPrefab.clone().get(0);
        console.log(clone);
        clone.style.top=(Math.floor(Math.random() * 481)+"px");
        $('.bulletgroup').append(clone);
    }
    spawncount++;
    sleep(1000);
}
Math.floor(Math.random() * 481);

function sleep(ms) {
    const wakeUpTime = Date.now() + ms
    while (Date.now() < wakeUpTime) {}
}