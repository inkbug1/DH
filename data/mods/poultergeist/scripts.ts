export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	pokemon: {
		damage(d: number, target: Pokemon | null = null, source: Pokemon | null = null, effect: Effect | null = null) {
			if (!this.hp || isNaN(d) || d <= 0) return 0;
			if (d < 1 && d > 0) d = 1;
			d = this.battle.trunc(d);
			this.hp -= d;
			if (this.hp <= 0) {
				d += this.hp;
				if (target.ability === 'chickenout' && !target.transformed && !target.headless && target.canSwitch(target.side)) {
					target.headless = true;
					this.runEvent('Faint', target, source, effect);
					target.cureStatus('[silent]');
					target.volatiles = {};
					target.illusion = null;
					target.isActive = false;
					target.isStarted = false;
					target.switchFlag = true;
					target.side.faintedThisTurn = target;
				} else {
					this.faint(source, effect);
				}
			}
			return d;
		}
	},
};
