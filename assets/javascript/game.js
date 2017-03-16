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
	var charName1 = $("#hero-hp").attr("name");
	var charName2 = $("#foe-hp").attr("name");
	characters[charName1].hp -= characters[charName2].attack;
	characters[charName2].hp -= characters[charName1].attack;
	$("#foe-hp").find("h3").text(characters[charName2].hp);
	$("#hero-hp").find("h3").text(characters[charName1].hp);
	characters[charName1].attack += characters[charName1].attack;
	if (characters[charName1].hp <= 0) {
		alert("you have succumbed to your wounds!");
	}
	else if (characters[charName2].hp <= 0){		 
		$(".combatant2").css("display", "none");
		alert("please select another opponent");
		nemesisSelected = false;
	}
})
$(document).ready(function(){
	$("#reset-btn").on("click", function() {
		window.location.reload(true);
	});
})



// setup();

