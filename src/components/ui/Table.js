import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import Item from './Item'
import PropTypes from 'prop-types'

import './Table.css'

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#7893ff' : '#8fa6ff',
    padding: grid,
});

const Table = ({ name = "", items = [], isFetching }) =>
    <div className='Table'>
        <div className='Table-name'>{name.toUpperCase()}</div>
        <div className='Table-columns'>
            <div>Summary</div>
            <div>From email</div>
            <div>Date</div>
        </div>
        <Droppable droppableId={name}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    className='Table-items'
                >
                    {(isFetching) && <div className='Table-preloader'>Loading...</div>}
                    {items.map((item, index) => (
                        <Item key={item.id} {...item} index={index}/>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>;


    Table.propTypes = {
        name: PropTypes.string,
        items: PropTypes.array
    };

export default Table