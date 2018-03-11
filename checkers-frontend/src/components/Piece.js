import React, {Component} from 'react';
import {PLAYER_W, PLAYER_B} from './Game'

function pieceEquals(orig, other) {
    return orig.id === other.id
        && orig.player === other.player
        && orig.king === other.king;
}

class Piece extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.player = this.props.player;
        this.king = this.props.king;
    }

    render() {
        let svgToUse;
        
        if (this.player === null || this.king === null) {
            return (null);
        } else if (this.player === PLAYER_W) {
            if (this.king === true)
                svgToUse = 'pWhiteKing.svg';
            else
                svgToUse = 'pWhite.svg';
        } else if (this.player === PLAYER_B) {
            if (this.king === true)
                svgToUse = 'pBlackKing.svg';
            else
                svgToUse = 'pBlack.svg';
        }

        return (<div className={"piece"}>
                    <img src={svgToUse} height="30" 
                    alt={'a ' + (this.player === PLAYER_W ? 'white ' : 'black ') + (this.king ? 'king' : 'piece')}/>
                </div>);
    }
}

export {pieceEquals};
export default Piece;