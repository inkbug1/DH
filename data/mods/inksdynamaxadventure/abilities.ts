export const Abilities: {[k: string]: ModdedAbilityData} = {
	
	quickdraw: {
		shortDesc: "Enables the Pokémon to move first on the first turn each time the user enters battle.",
		onFractionalPriorityPriority: -1,
		onFractionalPriority(priority, pokemon, target, move) {
			if (pokemon.activeMoveActions > 0) return;
			if (move.category !== "Status") {
				this.add('-activate', pokemon, 'ability: Quick Draw');
				return 0.1;
			}
		},
		name: "Quick Draw",
		rating: 3,
		num: 259,
	},
	
	scaryboost: {
		name: 'Scary Boost', 
		rating: 3.5, 
		num: 0.1, 
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				let activated = false;
				for (const target of pokemon.side.foe.active) {
					if (!target || !this.isAdjacent(target, pokemon)) continue;
					if (!activated) {
						this.add('-ability', pokemon, 'Intimidate', 'boost');
						activated = true;
					}
					if (target.volatiles['substitute']) {
						this.add('-immune', target);
					} else {
						this.boost({atk: -1}, target, pokemon, null, true);
					}
				}
			}
		},
		shortDesc: "Lowers adjacent opponents' Atk by 1 stage at the end of each turn.", 
	}, 
	moldprankster: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		onModifyMove(move) {
			if (move?.category === 'Status') {
				move.ignoreAbility = true;
			}
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		name: "Mold Prankster",
		rating: 4,
		num: 0.2,
		shortDesc: "Status moves have +1 priority & ignore defensive abilities. Fails against Dark-types.", 
	},
	
	
	flurrydown: {
		onDamagingHit(damage, target, source, move) {
			if (this.field.getWeather().id !== 'hail') {
				this.field.setWeather('hail');
			}
		},
		name: "Flurry Down",
		rating: 2,
		num: 1001,
		shortDesc: "When this Pokemon is hit, Hail begins.",
	},
	
	dryice: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.add('-activate', source, 'ability: Dry Ice');
				source.trySetStatus('brn', target);
			}
		},
		name: "Dry Ice",
		rating: 2,
		num: 1002,
		shortDesc: "Target is burned if the user lands a crit.", 
	},
	
	transistor: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Transistor');
			this.add('-message', "  [POKEMON] is radiating electricity!"); 
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Electric') return;
			if (!move.auraBooster) move.auraBooster = this.effectData.target;
			if (move.auraBooster !== this.effectData.target) return;
			return this.chainModify([move.hasAuraBreak ? 0x0C00 : 0x1547, 0x1000]);
		},
		isUnbreakable: true,
		name: "Transistor",
		rating: 3.5,
		num: 262,
		shortDesc: "While this Pokemon is active, an Electric move used by any Pokemon has 1.33x power.",
	},
	reinitialize: { //shouts out to hematite! :3
		onBeforeMovePriority: 0.5,
		onBeforeMove(attacker, defender, move) {
			if (move.type !== "Electric") {
				this.add('-activate', attacker, 'ability: Reinitialize'); 
				this.add('-clearallboost');
				for (const pokemon of this.getAllActive()) {
					pokemon.clearBoosts();
				}
			}
		},
		name: "Reinitialize", 
		rating: 2, 
		num: 1003, 
		shortDesc: "When using non-Electric move, resets all stat changes on the field.", 
	}, 
	dragonsmaw: {
		onModifyMove(move, pokemon) {
			if (move.type === 'Dragon') {
				move.recoil = [33, 100]; 
			}
		}, 
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		name: "Dragon's Maw",
		rating: 3.5,
		num: 263,
		shortDesc: "Dragon power 1.5x; Dragon moves gain 1/3 recoil.", 
	},
	dragonoverflow: {
		onSourceAfterFaint(length, target, source, effect) {
			this.add('-activate', source, 'ability: Dragon Overflow'); 
			source.heal(source.baseMaxhp / 3);
			if (!source.status) return;
			source.cureStatus();
		}
		name: "Dragon Overflow", 
		rating: 2, 
		num: 1004, 
		shortDesc: "Restores status condition and 1/3 HP after getting a KO.", 
	}, 
}; 