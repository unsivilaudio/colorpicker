import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seedColors from '../seedColors';
import { generatePalette } from '../utils/chroma';
import '../styles/App.css';
import PaletteList from './PaletteList';

const app = props => {
    function findPalette(id) {
        return seedColors.find(el => el.id === id);
    }

    return (
        <div className='App'>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() => <PaletteList palettes={seedColors} />}
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
            </Switch>
        </div>
    );
};

export default app;
