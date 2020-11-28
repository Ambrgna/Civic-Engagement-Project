$(document).ready(function () { 
    load_news();


function load_news() {
//solution goes here
    
var data=news["news"];
var html="";
for(var i=0;i<data.length;i++)
    html+=make_news(data[i]);

$("#news").html(html);
}

function make_image(data){
    var html="";
    html+="<div class='photo'>";
    html+="<img src='"+data["path"]+"'>";
    html+="<div class='heading'>"+data["heading"]+"</div>";
    html+="<div class='Date'>"+data["Date"]+"</div>";
    html+="</div>";
    return html;
}
