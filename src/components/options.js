import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteOption, addOption, editOption } from '../actions';

class Options extends Component {
    render() {
        return (
            <div>
                Editable Option List should show up here
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { options: state.options };
}

const mapDispatchToProps = (dispatch) => {
    return {
        options: (option) => {
            dispatch(addOption(option))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);