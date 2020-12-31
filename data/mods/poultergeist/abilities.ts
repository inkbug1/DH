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
				if (target.formeChange('Poultergeist-Headless', this.effect, true)) {
					this.add('-ability', target, 'Chicken Out');
					this.add('-message', `${target.name} ran off somewhere...`);
					target.maxhp = 1;
					target.hp = 1;
				}
				return;
			}
		},
		rating: 5,
		num: -1001,
	},
};
