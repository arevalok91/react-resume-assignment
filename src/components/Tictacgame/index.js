import React from 'react';
import Tictacboard from '../Tictacboard';


class TicTacGame extends React.Component {


    render() {
      return (
        <div className="game">
          <div className="game-board">
            <h2>Tic Tac Toe , 3 In Row!</h2>
            <Tictacboard/>
          
          </div>
          <div className="game-info">
            
         
          </div>
        </div>
      );
    }
  }

  export default TicTacGame;