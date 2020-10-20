import React from 'react';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';

const Styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%',
    },
};

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
