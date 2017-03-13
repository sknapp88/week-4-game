var state = "iCanHazHero";
var chosenHero = null;
var chosenFoe = null;
var champion = false;
var characters = {
	zoey: {
		name: "Logan",
		hp: 100,
		attack: 20,
		counter: 15,
	},
	marie: {
		name: "Gambit",
		hp: 100,
		attack: 15,
		counter: 5,
	},
	sistermary: {
		name: "Magneto",
		hp: 100,
		attack: 20,
		counter: 10,
	},
	skids: {
		name: "Daken",
		hp: 100,
		attack: 15,
		counter: 10,
	}
};

$(".allChar").click(function() {
	if (champion === true) {
		return
	}
	else {
		function selectHero(heroDiv) {
			var heroContainer = $(heroDiv);
			heroContainer.appendTo('#hero');
			heroContainer.removeClass('allChar');
			heroContainer.addClass('hero-img good');
			chosenHero = characters[heroDiv.id]
			$('#hero-hp').html(chosenHero.hp);
			console.log("Selected hero: " + JSON.stringify(chosenHero));
		}
	}

})

