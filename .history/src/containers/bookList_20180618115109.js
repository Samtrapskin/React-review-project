import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                {book.title}</li>
            );
        });
    }

    render () {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as props//
    return {
        books: state.books
    }
}
//Aything returned from this function will end up as props
//on the bookList container.
function mapDispatchtoProps (dispatch) {
    //whenever select book is called,the result should be passed to all reducers.//
    return bindActionCreators ({
        select:book
    },
    dispatch

    )
}
//
export default connect(mapStateToProps, mapDispatchtoProps)(BookList);
