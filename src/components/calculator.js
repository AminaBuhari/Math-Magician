import React from 'react';
import calculate from './logic/Calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [{ label: 'AC', id: 1, className: 'block' }, { label: '+/-', id: 2, className: 'block' }, { label: '/', id: 3, className: 'block' }, { label: '%', id: 4, className: 'bg-orange' }, { label: 7, id: 5, className: 'block' }, { label: 8, id: 6, className: 'block' }, { label: 9, id: 7, className: 'block' }, { label: 'x', id: 8, className: 'bg-orange' }, { label: 4, id: 9, className: 'block' }, { label: 5, id: 10, className: 'block' }, { label: 6, id: 11, className: 'block' }, { label: '-', id: 12, className: 'bg-orange' }, { label: 1, id: 13, className: 'block' }, { label: 2, id: 14, className: 'block' }, { label: 3, id: 15, className: 'block' }, { label: '+', id: 16, className: 'bg-orange' }, { label: 0, id: 17, className: 'block' }, { label: '.', id: 18, className: 'block' }, { label: '=', id: 19, className: 'bg-orange' }],
      operate: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleChanger = this.handleChanger.bind(this);
  }

  handleChanger = (event) => {
    const { operate } = this.state;
    const value = event.target.textContent;
    const object = calculate(operate, value);
    const { total, next } = object;
    this.setState({ operate: object });
    const answer = document.querySelector('.console');
    if (next !== null) (answer.innerHTML = next);
    else if (total !== null) (answer.innerHTML = total);
    else (answer.innerHTML = 0);
  }

  render() {
    const e = this.state;
    return (
      <div className="wrapper">
        <div className="console">0</div>
        {e.datas.map((data) => (
          <button type="button" key={data.id} onClick={this.handleChanger} className="container">
            {data.label}
          </button>

        ))}
      </div>
    );
  }
}

export default Calculator;
