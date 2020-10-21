import React from 'react';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import Styles from '../styles/PaletteListStyle';

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
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(PaletteList);
