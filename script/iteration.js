$(document).ready(function () { 
    load_images();
});


function load_images(){
    
var data=images["images"];
var html="";
for(var i=0;i<data.length;i++)
    html+=make_image(data[i]);
//alert(html);

$("#photos").html(html);
}

/* this function reads one row of a JSON table, and returns html code 
 * that shows the image information (e.g. picture, description)*/

function make_image(data){
    var html="";
    html+="<div class='photo'>";
    html+="<img src='"+data["path"]+"'>";
    html+="<div class='description'>"+data["description"]+"</div>";
    html+="<div class='Date'>"+data["Date"]+"</div>";
    html+="</div>";
	alert(data["description"]);
    return html;
}





