import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const draggableColorList = ({ colors, removeColor }) => {
    return (
        <div style={{ height: '100%' }}>
            {colors.map((el, i) => {
                return (
                    <DraggableColorBox
                        index={i}
                        color={el.color}
                        name={el.name}
                        key={el.color}
                        handleClick={() => removeColor(el.name)}
                    />
                );
            })}
        </div>
    );
};

export default SortableContainer(draggableColorList);
