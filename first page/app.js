 "use strict"
 var resultList = $("#resultList");
 resultList.text("Injected bt jquery");
 var toggle=$("#togglehide");
 toggle.on("click", function(){
     console.log("button clicked");
     resultList.toggle(500);
     if(toggle.text() === "hide"){
         toggle.text("Show");
     }
     else{
         toggle.text("Hide");
     }
 })