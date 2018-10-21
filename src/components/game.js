import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startGame } from '../actions';

class Game extends Component {
    render() {
        return (
            <div>
                <Link to="/options">Edit Options</Link>
                <div>
                Game should show up here
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        list: state.options.list,
        alive: state.options.alive,
        dead: state.options.dead
     };
}

const mapDispatchToProps = (dispatch) => {
    return {
        options: (option) => {
            dispatch(addOption(option))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);