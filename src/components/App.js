import React from 'react';

import Palette from './Palette';
import seedColors from '../seedColors';
import { generatePalette } from '../utils/chroma';

const app = props => {
    return (
        <div>
            <Palette palette={generatePalette(seedColors[4])} />
        </div>
    );
};

export default app;
