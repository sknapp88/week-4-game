var state;
var chosenHero, chosenFoe;
var championSelected = false;
var logan = {name: "Logan",	hp: 100, attack: 20, counter: 15};
var gambit = {name: "Gambit", hp: 100, attack: 15, counter: 5};
var magneto = {name: "Magneto",	hp: 100, attack: 20, counter: 10};
var daken = {name: "Daken",	hp: 100, attack: 15, counter: 10,};
var counter = 0;

	function setup(){
		$(".allChar").click(function(){
			if (championSelected === false);
		});
	}

	$(".allChar").on("click", function(){
		var imgSrc = $(this).find('img').attr("src");
	
		if($('.combatant').length){
			$('.combatant').attr('src',imgSrc);
		}else{
			var chosenHero = $("<img>");	
			$(chosenHero).addClass("combatant");
			$(chosenHero).attr("src", imgSrc);			
			$("#hero").append(chosenHero);
		}
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

