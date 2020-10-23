import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = starterPallete => {
    if (!starterPallete) return false;
    let newPalette = {
        paletteName: starterPallete.paletteName,
        id: starterPallete.id,
        emoji: starterPallete.emoji,
        colors: {},
    };

    levels.forEach(lvl => {
        newPalette.colors[lvl] = [];
    });

    starterPallete.colors.forEach(el => {
        let scale = getScale(el.color, 10).reverse();
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${el.name} ${levels[i]}`,
                id: el.name.toLowerCase().replace(' ', '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                    .css()
                    .replace('rgb', 'rgba')
                    .replace(')', ',1.0)'),
            });
        }
    });

    return newPalette;
};

const getRange = hex => {
    const end = '#fff';
    return [chroma(hex).darken(1.4).hex(), hex, end];
};

const getScale = (hex, nColors) => {
    return chroma.scale(getRange(hex)).mode('lab').colors(nColors);
};

export { generatePalette };
