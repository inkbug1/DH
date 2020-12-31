export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onDamagePriority: -100,
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp && target.ability === 'chickenout' && !target.transformed && !target.headless && this.canSwitch(target.side)) {
				target.headless = true;
				this.runEvent('Faint', target, source, effect);
				target.cureStatus('[silent]');
				target.volatiles = {};
				target.illusion = null;
				target.isActive = false;
				target.isStarted = false;
				target.switchFlag = true;
				target.side.faintedThisTurn = target;
				return target.hp - 1;
			}
		},
		onSwitchOut(pokemon) {
			if (pokemon.headless) {
				if (pokemon.formeChange('Poultergeist-Headless', this.effect, true)) {
					this.add('-ability', pokemon, 'Chicken Out');
					this.add('-message', `${pokemon.name} ran off somewhere...`);
					pokemon.maxhp = 1;
					pokemon.hp = 1;
					delete pokemon.headless;
				}
			}
		},
		rating: 5,
		num: -1001,
	},
};
