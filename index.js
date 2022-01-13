function upDate(y){
    var src = y.getAttribute( "src" );
    var alt = y.getAttribute( "alt" );
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('image').innerHTML = alt;
}
 
function unDo(x){
    x = document.getElementById('image');
    x.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Show the image here.";
}

var msg = 'Welcome to my Webpage';

function name(){
    alert(msg);
}

