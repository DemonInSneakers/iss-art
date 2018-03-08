import { connect } from 'react-redux'
import TableList from './ui/TableList'
import {moveItem, fetchPosts} from '../actions'

export const Tables = connect(
    state =>
        ({
            tables: state.tables,
            isFetching: state.isFetching
        }),
    dispatch =>
        ({
            moveItem(id, startTableName, startIndex, endTableName, endIndex) {
                dispatch(moveItem(id, startTableName, startIndex, endTableName, endIndex))
            },
            fetchPosts() {
              dispatch(fetchPosts())
            }

        })
)(TableList);