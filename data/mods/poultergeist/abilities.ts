export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onFaint(pokemon) {
			if (this.canSwitch(pokemon.side)) {
				this.add('-ability', pokemon, 'Chicken Out');
			}
		},
		rating: 5,
		num: -1001,
	},
};
