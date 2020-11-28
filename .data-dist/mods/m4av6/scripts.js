"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } const Scripts = {
	init: function () {
		this.modData('Learnsets', 'dragonite').learnset.playrough = ['7L1'];
		this.modData('Learnsets', 'goodra').learnset.gigadrain = ['7L1'];
		this.modData('Learnsets', 'goodra').learnset.drainpunch = ['7L1'];
		this.modData('Learnsets', 'dragapult').learnset.icebeam = ['8L1'];
		this.modData('Learnsets', 'orbeetle').learnset.focusblast = ['8L1'];
		this.modData('Learnsets', 'orbeetle').learnset.teleport = ['8L1'];
		this.modData('Learnsets', 'thievul').learnset.focusblast = ['8L1'];
		this.modData('Learnsets', 'thievul').learnset.aurasphere = ['8L1'];
		this.modData('Learnsets', 'thievul').learnset.hiddenpower = ['8L1'];
		this.modData('Learnsets', 'gumshoos').learnset.coil = ['7L1'];
		this.modData('Learnsets', 'gumshoos').learnset.bodyslam = ['7L1'];
		this.modData('Learnsets', 'vikavolt').learnset.leafblade = ['7L1'];
		this.modData('Learnsets', 'vikavolt').learnset.darkpulse = ['7L1'];
		this.modData('Learnsets', 'vikavolt').learnset.uturn = ['7L1'];
		this.modData('Learnsets', 'vikavolt').learnset.thundercage = ['7L1'];
		this.modData('Learnsets', 'lycanrocmidnight').learnset.headsmash = ['7L1'];
		this.modData('Learnsets', 'lycanroc').learnset.extremespeed = ['7L1'];
		this.modData('Learnsets', 'lycanroc').learnset.spikes = ['7L1'];
		this.modData('Learnsets', 'raichu').learnset.highjumpkick = ['7L1'];
		this.modData('Learnsets', 'clefable').learnset.hex = ['7L1'];
		this.modData('Learnsets', 'clefable').learnset.nastyplot = ['7L1'];
		this.modData('Learnsets', 'clefable').learnset.shadowsneak = ['7L1'];
		this.modData('Learnsets', 'clefable').learnset.willowisp = ['7L1'];
		this.modData('Learnsets', 'rillaboom').learnset.junglehealing = ['8L1'];
		this.modData('Learnsets', 'rillaboom').learnset.toxic = ['8L1'];
		this.modData('Learnsets', 'cinderace').learnset.energyball = ['8L1'];
		this.modData('Learnsets', 'inteleon').learnset.taunt = ['8L1'];
		this.modData('Learnsets', 'inteleon').learnset.firstimpression = ['8L1'];
		this.modData('Learnsets', 'inteleon').learnset.encore = ['8L1'];
		this.modData('Learnsets', 'inteleon').learnset.pursuit = ['8L1'];
		this.modData('Learnsets', 'klinklang').learnset.rapidspin = ['7L1'];
		this.modData('Learnsets', 'garbodor').learnset.stealthrock = ['7L1'];
		this.modData('Learnsets', 'garbodor').learnset.knockoff = ['7L1'];
		this.modData('Learnsets', 'jolteon').learnset.calmmind = ['7L1'];
		this.modData('Learnsets', 'flareon').learnset.burnup = ['7L1'];
		this.modData('Learnsets', 'flareon').learnset.morningsun = ['7L1'];
		this.modData('Learnsets', 'butterfree').learnset.taunt = ['7L1'];
		this.modData('Learnsets', 'butterfree').learnset.earthpower = ['7L1'];
		this.modData('Learnsets', 'chandelure').learnset.mindblown = ['7L1'];
		this.modData('Learnsets', 'gothitelle').learnset.wish = ['7L1'];
		this.modData('Learnsets', 'gothitelle').learnset.teleport = ['7L1'];
		this.modData('Learnsets', 'gothitelle').learnset.doomdesire = ['7L1'];
		this.modData('Learnsets', 'gothitelle').learnset.flashcannon = ['7L1'];
		this.modData('Learnsets', 'gigalith').learnset.skullbash = ['7L1'];
		this.modData('Learnsets', 'gigalith').learnset.sunnyday = ['7L1'];
		this.modData('Learnsets', 'gigalith').learnset.synthesis = ['7L1'];
		this.modData('Learnsets', 'reuniclus').learnset.photongeyser = ['7L1'];
		this.modData('Learnsets', 'reuniclus').learnset.psychoboost = ['7L1'];
		this.modData('Learnsets', 'boltund').learnset.pursuit = ['8L1'];
		this.modData('Learnsets', 'archeops').learnset.fireblast = ['7L1'];
		this.modData('Learnsets', 'archeops').learnset.dualwingbeat = ['7L1'];
		this.modData('Learnsets', 'archeops').learnset.bravebird = ['7L1'];
		this.modData('Learnsets', 'talonflame').learnset.scorchingsands = ['7L1'];
		this.modData('Learnsets', 'staraptor').learnset.roleplay = ['7L1'];
		this.modData('Learnsets', 'staraptor').learnset.superfang = ['7L1'];
		this.modData('Learnsets', 'bibarel').learnset.fly = ['7L1'];
		this.modData('Learnsets', 'kricketune').learnset.drainpunch = ['7L1'];
		this.modData('Learnsets', 'kricketune').learnset.dualwingbeat = ['7L1'];
		this.modData('Learnsets', 'kricketune').learnset.firstimpression = ['7L1'];
		this.modData('Learnsets', 'kricketune').learnset.powertrip = ['7L1'];
		this.modData('Learnsets', 'kricketune').learnset.tripleaxel = ['7L1'];
		this.modData('Learnsets', 'mismagius').learnset.sludgebomb = ['7L1'];
		this.modData('Learnsets', 'mismagius').learnset.sludgewave = ['7L1'];
		this.modData('Learnsets', 'mismagius').learnset.toxicspikes = ['7L1'];
		this.modData('Learnsets', 'mismagius').learnset.poisonfang = ['7L1'];
		this.modData('Learnsets', 'mismagius').learnset.partingshot = ['7L1'];
		this.modData('Learnsets', 'mismagius').learnset.fling = ['7L1'];
		this.modData('Learnsets', 'murkrow').learnset.partingshot = ['7L1'];
		this.modData('Learnsets', 'honchkrow').learnset.partingshot = ['7L1'];
		this.modData('Learnsets', 'honchkrow').learnset.dualwingbeat = ['7L1'];
		this.modData('Learnsets', 'spiritomb').learnset.partingshot = ['7L1'];
		this.modData('Learnsets', 'ariados').learnset.spikes = ['7L1'];
		this.modData('Learnsets', 'gourgeist').learnset.bodypress = ['7L1'];
		this.modData('Learnsets', 'gourgeist').learnset.encore = ['7L1'];
		this.modData('Learnsets', 'gourgeist').learnset.flareblitz = ['7L1'];
		this.modData('Learnsets', 'gourgeist').learnset.partingshot = ['7L1'];
		this.modData('Learnsets', 'gourgeist').learnset.strengthsap = ['7L1'];
		this.modData('Learnsets', 'mimikyu').learnset.firstimpression = ['7L1'];
		this.modData('Learnsets', 'mimikyu').learnset.strengthsap = ['7L1'];
		this.modData('Learnsets', 'mimikyu').learnset.uturn = ['7L1'];
		this.modData('Learnsets', 'nidoqueen').learnset.milkdrink = ['7L1'];
		this.modData('Learnsets', 'walrein').learnset.darkpulse = ['7L1'];
		this.modData('Learnsets', 'walrein').learnset.focusblast = ['7L1'];
		this.modData('Learnsets', 'walrein').learnset.freezedry = ['7L1'];
		this.modData('Learnsets', 'aurorus').learnset.rapidspin = ['7L1'];
		this.modData('Learnsets', 'aurorus').learnset.voltswitch = ['7L1'];
		this.modData('Learnsets', 'trevenant').learnset.floralhealing = ['7L1'];
		this.modData('Learnsets', 'trevenant').learnset.synthesis = ['7L1'];
		this.modData('Learnsets', 'eelektross').learnset.recover = ['7L1'];
		this.modData('Learnsets', 'eelektross').learnset.scald = ['7L1'];
		this.modData('Learnsets', 'trevenant').learnset.floralhealing = ['7L1'];
		this.modData('Learnsets', 'trevenant').learnset.synthesis = ['7L1'];
		this.modData('Learnsets', 'dragalge').learnset.acidspray = ['7L1'];
		this.modData('Learnsets', 'dragalge').learnset.gastroacid = ['7L1'];
		this.modData('Learnsets', 'dragalge').learnset.roost = ['7L1'];
		this.modData('Learnsets', 'dragalge').learnset.terrainpulse = ['7L1'];
		this.modData('Learnsets', 'dhelmise').learnset.flipturn = ['7L1'];
		this.modData('Learnsets', 'dhelmise').learnset.superpower = ['7L1'];
		this.modData('Learnsets', 'meganium').learnset.calmmind = ['7L1'];
		this.modData('Learnsets', 'meganium').learnset.solarblade = ['7L1'];
		this.modData('Learnsets', 'meganium').learnset.weatherball = ['7L1'];
		this.modData('Learnsets', 'typhlosion').learnset.explosion = ['7L1'];
		this.modData('Learnsets', 'typhlosion').learnset.headcharge = ['7L1'];
		this.modData('Learnsets', 'typhlosion').learnset.rapidspin = ['7L1'];
		this.modData('Learnsets', 'feraligatr').learnset.darkpulse = ['7L1'];
		this.modData('Learnsets', 'feraligatr').learnset.firefang = ['7L1'];
		this.modData('Learnsets', 'feraligatr').learnset.suckerpunch = ['7L1'];
		this.modData('Learnsets', 'feraligatr').learnset.thunderfang = ['7L1'];
	},
	canMegaEvo(pokemon) {
		const altForme = pokemon.baseSpecies.otherFormes && this.dex.getSpecies(pokemon.baseSpecies.otherFormes[0]);
		const item = pokemon.getItem();
		if (
			_optionalChain([altForme, 'optionalAccess', _ => _.isMega]) && _optionalChain([altForme, 'optionalAccess', _2 => _2.requiredMove]) &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove
		) {
			return altForme.name;
		}
		if (item.name === "Lycanite" && pokemon.baseSpecies.name === "Lycanroc-Midnight") {
			return "Lycanroc-Midnight-Mega";
		}
		if (item.name === "Lycanite" && pokemon.baseSpecies.name === "Lycanroc-Dusk") {
			return "Lycanroc-Dusk-Mega";
		}
		if (item.name === "Raichunite" && pokemon.baseSpecies.name === "Raichu-Alola") {
			return null;
		}
		if (item.name === "Slowbronite" && pokemon.baseSpecies.name === "Slowbro-Galar") {
			return null;
		}
		if (item.name === "Slowkinite" && pokemon.baseSpecies.name === "Slowking-Galar") {
			return null;
		}
		if (item.name === "Gourgeite" && pokemon.baseSpecies.name === "Gourgeist-Small") {
			return "Gourgeist-Small-Mega";
		}
		if (item.name === "Gourgeite" && pokemon.baseSpecies.name === "Gourgeist-Large") {
			return "Gourgeist-Large-Mega";
		}
		if (item.name === "Gourgeite" && pokemon.baseSpecies.name === "Gourgeist-Super") {
			return "Gourgeist-Super-Mega";
		}
		if (item.megaEvolves !== pokemon.baseSpecies.name || item.megaStone === pokemon.species.name) {
			return null;
		}
		return item.megaStone;
	},
}; exports.Scripts = Scripts;
