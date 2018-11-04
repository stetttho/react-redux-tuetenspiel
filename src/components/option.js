import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOption, editOption } from '../actions';

class Option extends Component {
    constructor(props) {
        super(props);
          
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }   
    
    render() {
        return (
        <div className="option">
            {this.props.title}
            <i key={this.props.id} className="fa fa-pencil" onClick={this.handleEdit}></i>
            <i className="fa fa-close" onClick={this.handleDelete}></i>
        </div>
        );
    }

    handleDelete() {
        this.props.deleteById(this.props.id);
    }

    handleEdit() {
        this.props.editById(this.props.id);
    }

}

function mapStateToProps(state) {
    return { list: state.options.list
              };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteById: (id) => {
            dispatch(deleteOption(id))
        },
        editById: (id) => {
            dispatch(editOption(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Option);