export const Formats: {[k: string]: ModdedFormatData} = {
	tacticsvalidator: {
		effectType: 'ValidatorRule', 
		name: "Tactics Validator", 
		onValidateSet(set) {
			const species = this.dex.getSpecies(set.species);
			if (this.modData('Learnsets', species).tactics) {
				const tactics = this.modData('Learnsets', species).tactics; 
				const activeTactics = [];
			}
			
		}, 
	}, 
	tactics: {
		effectType: 'Rule', 
		name: "Tactics", 
		onSwitchIn(pokemon) {
			if (this.modData('Learnsets', species).tactics) {
				const tactics = this.modData('Learnsets', species).tactics; 
				const ab = pokemon.ability; 
				const activeTactics = [];
				
				if (ab.includes("-S") && tactics.S) {
					activeTactics.push(tactics.S); 
				}
				else {
					if (tactics.R) {
						activeTactics.push(tactics.R); 
					}
					if (ab.includes("-0") && tactics.0) {
						activeTactics.push(tactics.0); 
					}
					if (ab.includes("-1") && tactics.1) {
						activeTactics.push(tactics.1); 
					}
					if (ab.includes("-H") && tactics.H) {
						activeTactics.push(tactics.H); 
					}
				}
				console.log(pokemon + "'s Tactics: " + tactics); 
				console.log('Selected Tactics: ' + activeTactics); 
			}
		},
	},
}; 