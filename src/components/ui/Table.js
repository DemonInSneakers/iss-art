import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import Item from './Item'

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
});

const Table = ({ name = "", items = [] }) =>
    <Droppable droppableId={name}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
            >
                {items.map((item, index) => (
                    <Item key={item.id} {...item} index={index}/>
                ))}
                {provided.placeholder}
            </div>
        )}
    </Droppable>;

export default Table