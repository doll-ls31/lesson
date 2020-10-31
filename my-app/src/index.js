import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// class Square extends React.Component {

  // 状態を初期化するコンストラクタ－をクラスに追加
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   }
  // }
  // render() {
  //   return (
      // <button className="square" onClick={function() { alert('click');}}>

      // 矢印関数構文をしようする方法

      // 初期設定
      // <button className="square" onClick={() => alert('click')}>

      // クリックされたら「X」マークになるように設定を変える
      // <button className="square" onClick={() => this.setState({value: 'X'})}>
  //     <button
  //       className="square"
  //       onClick={() => this.setState  ({value: 'X'})}>
  //       {this.state.value}
  //     </button>
  //   );
  // }

  // render() {
    function Square(props) {
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
  // }

// }


// class Board extends React.Component {
  // ボードの初期状態を設定する
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }
  // 再び状態を持ち上げる
  class Board extends React.Component {
    // handleClick(i) {
    //   const squares = this.state.squares.slice();
    //   if (calculateWinner(squares) || squares[i]) {
    //     return;
    //   }
    //   squares[i] = this.state.xIsNext ? 'X' : 'O';
    //   this.setState({
    //     squares: squares,
    //     xIsNext: !this.state.xIsNext,
    //   });
    // }

    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }

    render() {
      // const winner = calculateWinner(this.state.squares);
      // let status;
      // if (winner) {
      //   status = 'Winner:' + winner;
      // } else {
      //   status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
      // }

      return (
        <div>
         // {/* <div className="status">{status}</div> */}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  

  // class Board extends React.Component {
  //   renderSquare(i) {
  //     return (
  //       <Square
  //       value={this.props.squares[i]}
  //       onClick={() => this.props.onClick(i)}
  //       />
  //     );
  //   }
  // render() {
  //   return (
  //     <div>
  //       <div className="board-row">
  //         {this.renderSquare(0)}
  //         {this.renderSquare(1)}
  //         {this.renderSquare(2)}
  //       </div>
  //       <div className="board-row"> 
  //         {this.renderSquare(3)}
  //         {this.renderSquare(4)}
  //         {this.renderSquare(5)}
  //       </div>
  //       <div className="board-row"> 
  //         {this.renderSquare(6)}
  //         {this.renderSquare(7)}
  //         {this.renderSquare(8)}
  //       </div>
  //     </div>
      
  //   );
  // }

  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
    // squares[i] = 'X';

    //交代での部分 「X」と「O」が交互に使用できるようになる
  //   squares[i] = this.state.xIsNext ? 'X' : 'O'; 
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }


  // renderSquare(i) {
    // return <Square value={i} />;
  //   return (
  //     <Square value={this.state.squares[i]}
  //     onClick={() => this.handleClick(i)}
  //      />
  //   );
  // }

  
// }

class Game extends React.Component {
  // 再び状態を持ち上げる
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
        squares: Array(9).fill(null),
      }
    ],
    stepNumber: 0,
      xIsNext: true,
    };
  }
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }
  handleClick(i) {
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    // const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// 勝者の宣言
// 勝者とリターンをチェックする
function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] =lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
      return squares[a];
    }
  }
  return null;
}
