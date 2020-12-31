export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	checkFainted() {
		for (const side of this.sides) {
			for (const pokemon of side.active) {
				if (pokemon.fainted) {
					if (pokemon.ability === 'chickenout') {
						if (pokemon.transformed || (!this.canSwitch(pokemon.side))) {
							pokemon.status = 'fnt' as ID;
							pokemon.switchFlag = true;
						}
						pokemon.fainted = false;
						pokemon.switchFlag = true;
      		      pokemon.hp = 1;
	   		   	pokemon.formeChange('Poultergeist-Headless');
					} else {
						pokemon.status = 'fnt' as ID;
						pokemon.switchFlag = true;
					}
				}
			}
		}
	}
};
