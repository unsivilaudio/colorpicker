import React from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends React.Component {
    render() {
        return (
            <div>
                <h1>React Colors</h1>
                {this.props.palettes.map(el => {
                    return (
                        <Link to={`/palette/${el.id}`}>
                            <p>{el.paletteName}</p>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default PaletteList;
