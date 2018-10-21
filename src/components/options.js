import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteOption, addOption, editOption } from '../actions';

class Options extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
          
            <div>
                <div>
                    <Link to="/">Back to Game</Link>
                </div>
                List of Options:
                <ul>
            {this.props.list.map( (option, idx) => {
                return (
                   <li key={idx}>{option}</li>
                )
              })
            }
          </ul>
  
            </div>
           
        );
    }
}

function mapStateToProps(state) {
    return { list: state.options.list };
}

const mapDispatchToProps = (dispatch) => {
    return {
        options: (option) => {
            dispatch(addOption(option))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);