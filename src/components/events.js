import React from 'react';
import calculate from './logic/calculator';

const Calculator = () => {
  const datas = [{ label: 'AC'}, { label: '+/-'}, { label: '/'}, { label: '%'}, { label: '7'}, { label: '8'}, { label: '9'}, { label: 'x' }, { label: '4'}, { label: '5' }, { label: '6'}, { label: '-'}, { label: '1'}, { label: '2'}, { label: '3'}, { label: '+' }, { label: '0' }, { label: '.' }, { label: '=' }];

  const [operate, setState] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleChanger = (event) => {
    const value = event.target.textContent;
    const object = calculate(operate, value);
    const { total, next} = object;
    setState({ operate: object });
    const answer = document.querySelector('.console');
    if (next !== null) (answer.innerHTML = next);
    else if (total !== null) (answer.innerHTML = total);
    else (answer.innerHTML = 0);
  };

  return (
    <div className="wrapper">
      <div className="console">0</div>
      {datas.map((data) => (
        <button type="button" key={data.label} onClick={handleChanger} className="container">
          {data.label}
        </button>

      ))}
    </div>
  );
};

export default Calculator;
