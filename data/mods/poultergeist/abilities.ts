export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onFaint(pokemon) {
			if (pokemon.headless === true && pokemon.species === 'Poultergeist') {
				if (pokemon.formeChange('Poultergeist-Headless', this.effect, true)) {
					this.add('-ability', pokemon, 'Chicken Out');
					this.add('-message', `${pokemon.name} ran off somewhere...`);
					pokemon.maxhp = 1;
					pokemon.hp = 1;
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
