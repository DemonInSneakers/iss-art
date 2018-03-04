import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const Item = ({id, summary, email, data, index}) => {
    return(
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div>
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )}
                    >
                        <div>
                            <div>{summary}</div>
                            <div>{email}</div>
                            <div>{data}</div>
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>

    )
};

export default Item