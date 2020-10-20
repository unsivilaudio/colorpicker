import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { generatePalette } from '../utils/chroma';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from '../seedColors';
import PaletteList from './PaletteList';
import '../styles/App.css';

const app = props => {
    function findPalette(id) {
        return seedColors.find(el => el.id === id);
    }

    const getColorSpectrum = (palette, colorId) => {
        const { colors } = generatePalette(palette);
        const levels = Object.keys(colors);
        return levels
            .reduce((acc, val) => {
                acc.push(colors[val].find(el => el.id === colorId));
                return acc;
            }, [])
            .splice(1)
            .reverse();
    };

    return (
        <div className='App'>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={props => (
                        <PaletteList palettes={seedColors} {...props} />
                    )}
                />
                <Route
                    exact
                    path='/palette/:id'
                    render={({ match }) => (
                        <Palette
                            palette={generatePalette(
                                findPalette(match.params.id)
                            )}
                        />
                    )}
                />
                <Route
                    path='/palette/:paletteId/:colorId'
                    render={props => {
                        const match = findPalette(props.match.params.paletteId);
                        const { emoji, paletteName } = match;
                        return (
                            <SingleColorPalette
                                shades={getColorSpectrum(
                                    match,
                                    props.match.params.colorId
                                )}
                                emoji={emoji}
                                paletteId={props.match.params.paletteId}
                                paletteName={paletteName}
                                {...props}
                            />
                        );
                    }}
                />
            </Switch>
        </div>
    );
};

export default app;
