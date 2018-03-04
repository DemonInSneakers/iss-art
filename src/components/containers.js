import { connect } from 'react-redux'
import TableList from './ui/TableList'
import {moveItem} from '../actions'

export const Tables = connect(
    state =>
        ({
            tables: state.tables
        }),
    dispatch =>
        ({
            moveItem(id, startTableName, startIndex, endTableName, endIndex) {
                dispatch(moveItem(id, startTableName, startIndex, endTableName, endIndex))
            }

        })
)(TableList);