"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }'use strict';

 const Conditions = {
	acidicterrain: {
		name: 'Acidic Terrain',
		effectType: 'Terrain',
		duration: 5,
		durationCallback(source, effect) {
			if (_optionalChain([source, 'optionalAccess', _ => _.hasItem, 'call', _2 => _2('terrainextender')])) {
				return 8;
			}
			return 5;
		},
		onBasePowerPriority: 6,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Poison' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
				for (const target of this.getAllActive()) {
					if (target.hasAbility('downtoearth')) {
						this.add('-message', `${target.name} suppresses the effects of the terrain!`);
						return;
					}
				}
				this.debug('acidic terrain boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		onModifyMovePriority: -5,
		onModifyMove(move, source, target) {
			if (move.type === 'Poison' && target.isGrounded() && !target.isSemiInvulnerable() && target.hasType('Steel')) {
				for (const target of this.getAllActive()) {
					if (target.hasAbility('downtoearth')) {
						this.add('-message', `${target.name} suppresses the effects of the terrain!`);
						return;
					}
				}
				if (!move.ignoreImmunity) move.ignoreImmunity = {};
				if (move.ignoreImmunity !== true) {
					move.ignoreImmunity['Poison'] = true;
				}
			}
		},
		onStart(battle, source, effect) {
			if (_optionalChain([effect, 'optionalAccess', _3 => _3.effectType]) === 'Ability') {
				this.add('-fieldstart', 'move: Acidic Terrain', '[from] ability: ' + effect, '[of] ' + source);
				this.add('-message', "Poison-type moves used by grounded Pokémon will have their power increased.");
				this.add('-message', "Grounded Steel-type Pokémon will also lose their immunity to Poison-type moves.");
			} else {
				this.add('-fieldstart', 'move: Acidic Terrain');
			}
		},
		onResidualOrder: 21,
		onResidualSubOrder: 2,
		onEnd() {
			this.add('-fieldend', 'move: Acidic Terrain');
		},
  },

}; exports.Conditions = Conditions;
