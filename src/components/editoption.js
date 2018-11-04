import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOption } from '../actions';

class EditOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.title,
            id: this.props.id
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {  
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit() {
        this.props.updateById(this.state);
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} type="text" /><button onClick={this.handleSubmit}>save</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { list: state.options.list
              };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateById: (id) => {
            dispatch(updateOption(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditOption);