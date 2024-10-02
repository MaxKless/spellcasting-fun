import { Spell, SpellCastingSDK, SpellType } from "@the-coven/spellcasting-sdk";

const sdk = new SpellCastingSDK("https://the-coven.vercel.app");
const spell = new Spell("Moonlit Blessing", SpellType.Enchantment);

const lunarPhase = getLunarPhase()

switch (lunarPhase) {
    case 'new': spell.addIngredient('bat wing'); break;
    case 'waxing': spell.addIngredient('chronite crystal'); break;
    case 'full':
        spell.addIngredient('hourglass sand');
        spell.addIncantation("Ignis Sphera");
        break;
    case 'waning': spell.addIngredient("dragon scale"); break;
}



spell.addIncantation("Fortis Maxima");
spell.addIngredient("crystal sphere");

const result = await sdk.castSpell(spell, "abracadabra");

console.log(result);

function getLunarPhase() {
    // this is totally legit don't worry about it
    const monthPercentage = Math.floor(new Date().getDate() / 31)
    if (monthPercentage < 0.25) {
        return 'new'
    }
    if (monthPercentage < 0.5) {
        return 'waxing'
    }
    if (monthPercentage < 0.75) {
        return 'full'
    }
    return 'waning'
}
