$(document).ready(function(){
    $('.ExpandButton').click(function() {
                // Hitta målet (informationsdiven) baserat på knappens data-target attribut
        var targetId = $(this).data('target');
        var $infoDiv = $('#' + targetId);

                // Växla synlighet för informationsdiven
        $infoDiv.slideToggle(400); // 400 är animationstiden i millisekunder

                // Ändra knapptexten baserat på tillstånd
		if ($(this).text() === "Show Info") 
		{
			$(this).text("Hide Info");
		}
		else 
		{
			$(this).text("Show Info"); // Om den var synlig och nu är dold
		}
    });
});