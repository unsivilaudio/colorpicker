import React from 'react';

import Palette from './Palette';
import seedColors from '../seedColors';

const app = props => {
    return (
        <div>
            <Palette {...seedColors[3]} />
        </div>
    );
};

export default app;
