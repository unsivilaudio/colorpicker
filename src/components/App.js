import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { generatePalette } from '../utils/chroma';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from '../seedColors';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import '../styles/App.css';

class App extends React.Component {
    state = { palettes: seedColors };

    findPalette = id => {
        try {
            const palette = this.state.palettes.find(el => el.id === id);
            if (!palette) throw new Error('Palette not found.');
            return palette;
        } catch (e) {
            window.location.assign('/');
        }
    };

    getColorSpectrum = (palette, colorId) => {
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

    savePalette = newPalette => {
        this.setState(prevState => ({
            ...prevState,
            palettes: prevState.palettes.concat(newPalette),
        }));
    };

    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route
                        exact
                        path='/palette/new'
                        render={props => (
                            <NewPaletteForm
                                {...props}
                                savePalette={this.savePalette}
                                palettes={this.state.palettes}
                            />
                        )}
                    />
                    <Route
                        path='/palette/:paletteId/:colorId'
                        render={props => {
                            const match = this.findPalette(
                                props.match.params.paletteId
                            );
                            const { emoji, paletteName } = match;
                            return (
                                <SingleColorPalette
                                    shades={this.getColorSpectrum(
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

                    <Route
                        exact
                        path='/palette/:id'
                        render={({ match }) => (
                            <Palette
                                palette={generatePalette(
                                    this.findPalette(match.params.id)
                                )}
                            />
                        )}
                    />
                    <Route
                        exact
                        path='/'
                        render={props => (
                            <PaletteList
                                palettes={this.state.palettes}
                                {...props}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
