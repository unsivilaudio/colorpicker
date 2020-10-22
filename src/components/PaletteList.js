import React from 'react';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import Styles from '../styles/PaletteListStyle';
import { Link } from 'react-router-dom';

class PaletteList extends React.Component {
    goToPalette = id => {
        this.props.history.push(`/palette/${id}`);
    };

    render() {
        const { classes, palettes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(el => {
                            return (
                                <MiniPalette
                                    key={el.id}
                                    handleClick={() => this.goToPalette(el.id)}
                                    {...el}
                                />
                            );
                        })}
                    </div>
                    <div style={{ height: '2rem' }} />
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(PaletteList);
