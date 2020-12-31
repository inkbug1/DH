export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onSwitchOut(pokemon) {
			if (pokemon.headless === true) {
				pokemon.headless = false;
            pokemon.hp = 1;
	      	pokemon.formeChange('Poultergeist-Headless');
			}
		},
		rating: 5,
		num: -1001,
	},
};
