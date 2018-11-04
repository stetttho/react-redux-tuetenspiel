import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOption } from '../actions';
import Option from './option';
import EditOption from './editoption';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
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
        this.props.addNewOption(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (       
            <div>
                <div>
                    <Link to="/">Back to Game</Link>
                </div>
                List of Options:
                <ul>
            {this.props.list.map( (option) => {
                return (        
                   <li key={option.id}>
                    {option.editing ? <EditOption title={option.title} id={option.id} /> :
                            <Option id={option.id} title={option.title} />}      
                   </li>
                )
              })
            }
                <li><input value={this.state.input} onChange={this.handleChange} type="text" /><button onClick={this.handleSubmit}>add</button></li>
                </ul>
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
        addNewOption: (newOption) => {
            dispatch(addOption(newOption))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);