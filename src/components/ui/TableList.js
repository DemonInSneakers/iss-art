import React, { Component } from 'react';
import './TableList.css'
import { DragDropContext } from 'react-beautiful-dnd';
import Table from './Table'

class TableList extends Component {
    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        console.log(result);

        const startTable =

        this.props.moveItem(
            result.draggableId,
            result.source.droppableId,
            result.source.index,
            result.destination.droppableId,
            result.destination.index
        );
    }

    render() {
        const {tables} = this.props;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='TableList'>
                    {tables.map((table, index) => <Table key={index} name={table.name} items={table.items}/>)}
                </div>
            </DragDropContext>
        );
    }
}

export default TableList;
