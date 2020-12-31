export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onFaint(pokemon) {
			if (this.canSwitch(pokemon.side)) {
				pokemon.hp = 1;
				pokemon.formeChange('Poultergeist-Headless');
				this.add('-message', `${pokemon.name} ran off somewhere...`);
			}
		},
		rating: 5,
		num: -1001,
	},
};
