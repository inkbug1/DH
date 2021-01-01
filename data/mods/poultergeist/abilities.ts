export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onFaint(pokemon) {
			if (pokemon.headless === true && pokemon.species === 'Poultergeist') {
				if (pokemon.formeChange('Poultergeist-Headless', this.effect, true)) {
					pokemon.maxhp = 1;
					this.heal(pokemon.maxhp);
					pokemon.setAbility('wonderguard');
					pokemon.baseAbility = 'wonderguard';
					pokemon.ability = 'wonderguard';
				}
			}
		},
		rating: 5,
		num: -1001,
	},
};
