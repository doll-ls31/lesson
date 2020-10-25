import React from 'react';
import ReactDOM from 'react-dom';
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


class Board extends React.Component {
  // ボードの初期状態を設定する
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    // squares[i] = 'X';

    //交代での部分 「X」と「O」が交互に使用できるようになる
    squares[i] = this.state.xIsNext ? 'X' : 'O'; 

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }


  renderSquare(i) {
    // return <Square value={i} />;
    return (
      <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
       />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
