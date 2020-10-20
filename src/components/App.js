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

    const getColorSpectrum = ({ paletteId, colorId }) => {
        const { colors } = generatePalette(findPalette(paletteId));
        const levels = Object.keys(colors);
        return levels.reduce((acc, val) => {
            acc.push(colors[val].find(el => el.id === colorId));
            return acc;
        }, []);
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
                    render={props => (
                        <SingleColorPalette
                            shades={getColorSpectrum(props.match.params)}
                            {...props}
                        />
                    )}
                />
            </Switch>
        </div>
    );
};

export default app;
