$(document).ready(function(){
$("#datepicker").datepicker({changeMonth: true, changeYear:true,stepMonths: 2,beforeShowDay: $.datepicker.noWeekends, appendText: "date in formate dd-mm-yyyy"});

$( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();

var spinner = $("#spinner").spinner();

$("#disable").click(function(){
if(spinner.spinner("option","disabled")){
spinner.spinner("enable");}
else{
spinner.spinner("disable");
}
});

});//end doc ready