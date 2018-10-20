import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Game extends Component {
    render() {
        return (
            <div>
                Game should show up here
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);