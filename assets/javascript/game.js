var state;
var chosenHero, chosenFoe;
var championSelected = false;
var nemesisSelected = false;
var characters = {
	logan: {name: "logan",	hp: 100, attack: 20, counter: 15},
	gambit: {name: "gambit", hp: 100, attack: 15, counter: 5},
	magneto: {name: "magneto",	hp: 100, attack: 20, counter: 10},
	daken: {name: "daken",	hp: 100, attack: 15, counter: 10,}
}

function setup(){

}

$(".allChar").on("click", function(){
	var imgSrc = $(this).find('img').attr("src");
	var charName = $(this).attr("id");
	var hide = $(this)

	
	if (championSelected === false) {
		var chosenHero = $("<img>");	
		$(chosenHero).addClass("combatant1");
		$(chosenHero).attr("src", imgSrc);			
		$("#hero").append(chosenHero);
		championSelected = true;
		$(hide).css("display", "none");
		$("#hero-hp").attr("name", characters[charName].name);
		$("#hero-hp").html("<h3>" + characters[charName].hp + "</h3>");
	}
	else { //(championSelected === true) {
		if (nemesisSelected === false) {
			var chosenFoe = $("<img>");	
			$(chosenFoe).addClass("combatant2");
			$(chosenFoe).attr("src", imgSrc);			
			$("#foe").append(chosenFoe);
			nemesisSelected = true;
			$(hide).css("display", "none");
			$("#foe-hp").attr("name", characters[charName].name);
			$("#foe-hp").html("<h3>" + characters[charName].hp + "</h3>");
		}
		else{
			return;
		}	
	}
})

$("#attack-btn").on("click", function(){
	// if (charName1 >= 0 && charName2 >= 0){
	var charName1 = $("#hero-hp").attr("name");
	var charName2 = $("#foe-hp").attr("name");
	$(characters[charName1]).attr("hp", )
	// $("#foe-hp").find("h3").text(health2 - characters[charName1].attack);
	// $("#hero-hp").find("h3").text(health1 - characters[charName2].attack);
	// }
})


	// $(".allChar").on("click", function(){
	// 	var chosenFoe = $("<div>");
	// 	$(chosenFoe).addClass("combatant");
	// 	console.log(chosenFoe);
	// 	$(chosenFoe).html("<img " + $(this).attr("src") + " />");
	// 	$("#foe").append(chosenFoe);
	// })

// function setup(){
// 	$('.allChar').click(function(e) {
// 		console.log("champion = " + $(this).name);
// 		switch(state) {
// 		    case "iCanHazHero":
// 		    	console.log(this.id);
// 				selectHero(this);
// 				state = "iCanHazFoe";
// 		        break;
// 		    case "iCanHazFoe":
// 		        selectFoe(this);
// 		        state = "timeToFight";
// 		        break;
// 		} 
// 	});
// }

// $(".allChar").click(function() {
// 	if (champion === true) {
// 		return
// 	}
// 	else {
// 		function selectHero(heroDiv) {
// 			var heroContainer = $(heroDiv);
// 			heroContainer.appendTo('#hero');
// 			heroContainer.removeClass('allChar');
// 			heroContainer.addClass('hero-img good');
// 			chosenHero = characters[heroDiv.id];
// 			$('#hero-hp').html(chosenHero.hp);
// 			console.log();
// 		}
// 	}

// });

setup();

