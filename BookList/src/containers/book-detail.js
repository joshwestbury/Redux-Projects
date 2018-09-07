import React, { Component } from 'react';
import { connect } from "react-redux";

class BookDetail extends Component {
    render() {
        return (
            <div>Book Detail!</div>
        )      
    }
}

function mapStateToProps(state) {

    return {
      books: state.activeBook
    };
  }
  
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectBook: selectBook }, dispatch)
// }
  
export default connect(mapStateToProps)(BookDetail);