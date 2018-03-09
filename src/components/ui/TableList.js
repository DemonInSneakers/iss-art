import React, { Component } from 'react';
import './TableList.css'
import { DragDropContext } from 'react-beautiful-dnd';
import Table from './Table'

class TableList extends Component {
    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        const {fetchPosts} = this.props;
        fetchPosts()
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        this.props.moveItem(
            result.draggableId,
            result.source.droppableId,
            result.source.index,
            result.destination.droppableId,
            result.destination.index
        );
    }

    render() {
        const {tables, isFetching} = this.props;
        /*if(isFetching) {
            return <div>Loading...</div>
        }*/
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='TableList'>
                    {tables.map((table, index) => <Table key={index} name={table.name} items={table.items} isFetching={isFetching}/>)}
                </div>
            </DragDropContext>
        );
    }
}

TableList.defaultProps = {
    tables: [],
    isFetching: false,
    moveItem: f=>f,
    fetchPosts: f=>f
};

export default TableList;
