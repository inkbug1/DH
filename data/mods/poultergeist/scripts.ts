export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	checkFainted() {
		for (const side of this.sides) {
			for (const pokemon of side.active) {
				if (pokemon.fainted) {
          if (pokemon.ability === 'chickenout') {
	      		if (pokemon.species.baseSpecies !== 'Poultergeist' || pokemon.transformed) {
              pokemon.status = 'fnt' as ID;
              pokemon.switchFlag = true;
            }
            pokemon.headless = true;
	  				pokemon.fainted = false;
            pokemon.switchFlag = true;
          } else {
  					pokemon.status = 'fnt' as ID;
	  				pokemon.switchFlag = true;
          }
				}
			}
		}
	}
};
