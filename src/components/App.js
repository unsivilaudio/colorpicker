import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { generatePalette } from '../utils/chroma';
import seedColors from '../seedColors';

import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';

class App extends React.Component {
    state = { palettes: [] };

    componentDidMount() {
        const savedPalettes =
            JSON.parse(localStorage.getItem('palettes')) || seedColors;
        if (savedPalettes.length > 0) {
            this.setState({ palettes: savedPalettes });
        }
    }

    syncLocalStorage = palettes => {
        localStorage.setItem('palettes', JSON.stringify(palettes));
    };

    findPalette = id => {
        try {
            const palette = this.state.palettes.find(el => el.id === id);
            if (!palette) throw new Error('Palette not found.');
            return palette;
        } catch (e) {
            console.log('ERROR: ', e.message);
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
        const updatedPalettes = this.state.palettes.concat(newPalette);
        this.setState({ palettes: updatedPalettes });
        this.syncLocalStorage(updatedPalettes);
    };

    deletePalette = id => {
        const palettes = this.state.palettes.filter(el => el.id !== id);
        this.setState({ palettes });
        this.syncLocalStorage(palettes);
    };

    render() {
        return (
            <div className='App'>
                <Route
                    render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                classNames='page'
                                timeout={500}>
                                <Switch location={location}>
                                    <Route
                                        exact
                                        path='/palette/new'
                                        render={props => (
                                            <Page>
                                                <NewPaletteForm
                                                    {...props}
                                                    savePalette={
                                                        this.savePalette
                                                    }
                                                    palettes={
                                                        this.state.palettes
                                                    }
                                                />
                                            </Page>
                                        )}
                                    />
                                    <Route
                                        path='/palette/:paletteId/:colorId'
                                        render={props => {
                                            try {
                                                const match = this.findPalette(
                                                    props.match.params.paletteId
                                                );
                                                const {
                                                    emoji,
                                                    paletteName,
                                                } = match;
                                                return (
                                                    <Page>
                                                        <SingleColorPalette
                                                            shades={this.getColorSpectrum(
                                                                match,
                                                                props.match
                                                                    .params
                                                                    .colorId
                                                            )}
                                                            emoji={emoji}
                                                            paletteId={
                                                                props.match
                                                                    .params
                                                                    .paletteId
                                                            }
                                                            paletteName={
                                                                paletteName
                                                            }
                                                            {...props}
                                                        />
                                                    </Page>
                                                );
                                            } catch (e) {
                                                return <Redirect to='/' />;
                                            }
                                        }}
                                    />

                                    <Route
                                        exact
                                        path='/palette/:id'
                                        render={props => {
                                            try {
                                                const palette = this.findPalette(
                                                    props.match.params.id
                                                );
                                                if (!palette)
                                                    throw new Error(
                                                        'Palette not found.'
                                                    );
                                                return (
                                                    <Page>
                                                        <Palette
                                                            {...props}
                                                            palette={generatePalette(
                                                                palette
                                                            )}
                                                        />
                                                    </Page>
                                                );
                                            } catch (e) {
                                                return <Redirect to='/' />;
                                            }
                                        }}
                                    />
                                    <Route
                                        exact
                                        path='/'
                                        render={props => (
                                            <Page>
                                                <PaletteList
                                                    palettes={
                                                        this.state.palettes
                                                    }
                                                    removePalette={
                                                        this.deletePalette
                                                    }
                                                    {...props}
                                                />
                                            </Page>
                                        )}
                                    />
                                    <Route
                                        render={props => (
                                            <Page>
                                                <PaletteList
                                                    palettes={
                                                        this.state.palettes
                                                    }
                                                    removePalette={
                                                        this.deletePalette
                                                    }
                                                    {...props}
                                                />
                                            </Page>
                                        )}
                                    />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                />
            </div>
        );
    }
}

export default App;
