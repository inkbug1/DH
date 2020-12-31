export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onBeforeFaint(pokemon) {
			if (!pokemon.transformed && this.canSwitch(pokemon.side)) {
				if (pokemon.formeChange('Poultergeist-Headless', this.effect, true)) {
					this.add('-ability', pokemon, 'Chicken Out');
					this.add('-message', `${pokemon.name} ran off somewhere...`);
					pokemon.maxhp = 1;
					pokemon.hp = 1;
					pokemon.cureStatus('[silent]');
					pokemon.volatiles = {};
					pokemon.illusion = null;
					pokemon.isActive = false;
					pokemon.isStarted = false;
					pokemon.switchFlag = true;
					pokemon.side.faintedThisTurn = pokemon;
					return false;
				}
			}
		},
		rating: 5,
		num: -1001,
	},
};
