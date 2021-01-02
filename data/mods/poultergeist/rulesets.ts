export const Formats: {[k: string]: FormatData} = {
	antiinvulnerabilitymod: {
		effectType: 'Rule',
		name: 'Anti-Invulnerability Mod',
		desc: 'If a Pokémon has become invulnerable by being revived improperly, this allows it to take damage and faint normally.',
		onDamagePriority: -100,
		onDamage(damage, target, source, effect) {
			if (damage > target.hp) {
				return target.hp;
			}
		},
		onUpdate(pokemon) {
			if (pokemon.maxhp = 1 && pokemon.hp < 1) {
				this.add('faint', pokemon);
				pokemon.side.pokemonLeft--;
				this.runEvent('Faint', pokemon);
				this.singleEvent('End', pokemon.getAbility(), pokemon.abilityData, pokemon);
				pokemon.clearVolatile(false);
				pokemon.fainted = true;
				pokemon.illusion = null;
				pokemon.isActive = false;
				pokemon.isStarted = false;
				pokemon.side.faintedThisTurn = true;
			}
		},
	},
};
