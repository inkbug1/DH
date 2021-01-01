export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	chickenout: {
		shortDesc: "When its HP reaches 0, this Pokémon retreats to the party, and then...",
		name: "Chicken Out",
		onBeforeSwitchIn(pokemon) {
			if (pokemon.headless) {
				pokemon.setAbility('wonderguard');
				pokemon.baseAbility = 'wonderguard';
				pokemon.ability = 'wonderguard';
				pokemon.headless = false;
			}
		},
		onFaint(pokemon) {
			if (pokemon.headless === true) {
				if (pokemon.formeChange('Poultergeist-Headless', this.effect, true)) {
					this.add('-ability', pokemon, 'Chicken Out');
					this.add('-message', `${pokemon.name} ran off somewhere...`);
					pokemon.maxhp = 1;
					pokemon.hp = 1;
				}
			}
		},
		rating: 5,
		num: -1001,
	},
	wonderguard: {
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Wonder Guard');
				}
				return null;
			}
		},
		onDamage(damage, target, source, effect) {
			damage = 1;
			this.add('faint', target);
			target.side.pokemonLeft--;
			this.runEvent('Faint', target, source, effect);
			this.singleEvent('End', target.getAbility(), target.abilityData, target);
			target.clearVolatile(false);
			target.fainted = true;
			target.illusion = null;
			target.isActive = false;
			target.isStarted = false;
			target.side.faintedThisTurn = true;
			target.status = 'fnt' as ID;
			target.switchFlag = true;
		},
		name: "Wonder Guard",
		rating: 5,
		num: 25,
	},
};
