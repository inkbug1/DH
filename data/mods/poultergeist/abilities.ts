export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onFaint(pokemon) {
			if (pokemon.headless === true) {
				if (pokemon.formeChange('Poultergeist-Headless', this.effect, true)) {
					this.add('-message', `${pokemon.name} ran off somewhere...`);
					pokemon.heal(pokemon.baseMaxhp);
				}
			}
		},
		rating: 5,
		num: -1001,
	},
};
