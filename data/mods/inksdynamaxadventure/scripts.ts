const CHOOSABLE_TARGETS = new Set(['normal', 'any', 'adjacentAlly', 'adjacentAllyOrSelf', 'adjacentFoe']);

export const Scripts: BattleScriptsData = {
	init: function() {
		//universal moves: 
		for (const id in this.dataCache.Pokedex) {
			const universalMoves = ['toxic', 'hiddenpower', 'hyperbeam', 'protect', 
				'frustration', 'return', 'doubleteam', 'return', 'facade', 'rest', 'round', 
				'gigaimpact', 'swagger', 'sleeptalk', 'substitute', 'confide', 'snore'];
			const dexEntry = this.dataCache.Pokedex[this.toID(name)];
			if (dexEntry.gender !== "N") {
				universalMoves.push('attract');
			}
			if (!this.dataCache.Learnsets[id]) this.dataCache.Learnsets[id] = { learnset: {}};
			for (const moveid in universalMoves) {
				if (!this.modData('Learnsets', id).learnset.moveid) {
					this.modData('Learnsets', id).learnset.moveid = ["8L1"]; 
				}
			}
			
			const fusionEntry = this.dataCache.Pokedex[id];
			if (fusionEntry.fusion) {//if the pokedex entry has a fusion field, it's a fusion
				const learnsetFusionList = [];//list of pokemon whose learnsets need to be fused
				for (let name of fusionEntry.fusion) {
					let prevo = true;
					while (prevo) {//make sure prevos of both fused pokemon are added to the list
						learnsetFusionList.push(name);
						const dexEntry = this.dataCache.Pokedex[this.toID(name)];
						if (dexEntry.prevo) name = dexEntry.prevo;
						else prevo = false;
					}
				}
				if (!this.dataCache.Learnsets[id]) this.dataCache.Learnsets[id] = { learnset: {}};//create a blank learnset entry so we don't need a learnsets file
				for (let name of learnsetFusionList) {					
					const learnset = this.dataCache.Learnsets[this.toID(name)].learnset;//get the learnset of each pokemon in the list
					for (const moveid in learnset) {
						this.modData('Learnsets', id).learnset[moveid] = ['8L1'];//all moves are compatible with the fusion's only ability, so just set it to 8L1
					}
				}
			}
		}

		
		this.modData('Learnsets', 'glastrier').learnset.falsesurrender = ['8L1'];
		this.modData('Learnsets', 'glastrier').learnset.fellstinger = ['8L1'];
		this.modData('Learnsets', 'glastrier').learnset.vinewhip = ['8L1'];
		this.modData('Learnsets', 'glastrier').learnset.powerwhip = ['8L1'];
		this.modData('Learnsets', 'glastrier').learnset.trickroom = ['8L1'];
		this.modData('Learnsets', 'glastrier').learnset.spectralthief = ['8L1'];
		this.modData('Learnsets', 'glastrier').learnset.glaciallance = ['8L1'];
		
		this.modData('Learnsets', 'spectrier').learnset.falsesurrender = ['8L1'];
		this.modData('Learnsets', 'spectrier').learnset.fellstinger = ['8L1'];
		this.modData('Learnsets', 'spectrier').learnset.spectralthief = ['8L1'];
		this.modData('Learnsets', 'spectrier').learnset.highhorsepower = ['8L1'];
		this.modData('Learnsets', 'spectrier').learnset.wonderroom = ['8L1'];
		this.modData('Learnsets', 'spectrier').learnset.astralbarrage = ['8L1'];
		this.modData('Learnsets', 'spectrier').learnset.vinewhip = ['8L1'];
		this.modData('Learnsets', 'spectrier').learnset.powerwhip = ['8L1'];
		
		this.modData('Learnsets', 'regieleki').learnset.charge = ['8L1'];
		this.modData('Learnsets', 'regieleki').learnset.magneticflux = ['8L1'];
		this.modData('Learnsets', 'regieleki').learnset.gearup = ['8L1'];
	},
	

	
	getMaxMove(move, pokemon) {
		if (typeof move === 'string') move = this.dex.getMove(move);
		if (move.name === 'Struggle') return move;
		if (pokemon.canGigantamax && move.category !== 'Status') {
			const gMaxSpecies = this.dex.getSpecies(pokemon.canGigantamax);
			const gMaxMove = this.dex.getMove(gMaxSpecies.isGigantamax);
			if (gMaxMove.exists && gMaxMove.type === move.type) return gMaxMove;
		}
		const maxMove = this.dex.getMove(this.maxMoveTable[move.category === 'Status' ? move.category : move.type]);
		if (maxMove.exists) return maxMove;
	},

	getActiveMaxMove(move, pokemon) {
		if (typeof move === 'string') move = this.dex.getActiveMove(move);
		if (move.name === 'Struggle') return this.dex.getActiveMove(move);
		let maxMove = this.dex.getActiveMove(this.maxMoveTable[move.category === 'Status' ? move.category : move.type]);
		if (move.category !== 'Status') {
			
			if (pokemon.canGigantamax) {
				const gMaxSpecies = this.dex.getSpecies(pokemon.canGigantamax);
				const gMaxMove = this.dex.getActiveMove(gMaxSpecies.isGigantamax ? gMaxSpecies.isGigantamax : '');
				if (gMaxMove.exists && gMaxMove.type === move.type) maxMove = gMaxMove;
			}
			if (!move.maxMove?.basePower) throw new Error(`${move.name} doesn't have a maxMove basePower`);
			maxMove.basePower = move.maxMove.basePower;
			if (['gmaxdrumsolo', 'gmaxfireball', 'gmaxhydrosnipe'].includes(maxMove.id)) maxMove.basePower = 160;
			maxMove.category = move.category;
		}
		maxMove.baseMove = move.id;
		// copy the priority for Psychic Terrain, Quick Guard
		maxMove.priority = move.priority;
		maxMove.isZOrMaxPowered = true;
		return maxMove;
	},
	
	
	hitStepStealBoosts(targets, pokemon, move) {
		const target = targets[0]; // hardcoded
		if (move.stealsBoosts) {
			const boosts: SparseBoostsTable = {};
			let stolen = false;
			let statName: BoostName;
			for (statName in target.boosts) {
				const stage = target.boosts[statName];
				if (stage > 0) {
					boosts[statName] = stage;
					stolen = true;
				}
			}
			if (stolen) {
				this.attrLastMove('[still]');
				this.add('-clearpositiveboost', target, pokemon, 'move: ' + move.name);
				this.boost(boosts, pokemon, pokemon);

				let statName2: BoostName;
				for (statName2 in boosts) {
					boosts[statName2] = 0;
				}
				target.setBoost(boosts);
				this.addMove('-anim', pokemon, "Spectral Thief", target);
			}
		}

		if (move.swapsBoosts) {
			const boosts: SparseBoostsTable = {};
			let swapped = false;
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			let i: BoostName;
			for (i in target.boosts) {
				targetBoosts[i] = target.boosts[i];
				sourceBoosts[i] = source.boosts[i];
			}

			if (swapped) {
				this.attrLastMove('[still]');
				this.add('-swapboost', source, target, '[from] move: Spectral Trick');
				
				target.setBoost(sourceBoosts);
				source.setBoost(targetBoosts);
				
				this.addMove('-anim', pokemon, "Spectral Thief", target);
			}
		}
		return undefined;
	},
};