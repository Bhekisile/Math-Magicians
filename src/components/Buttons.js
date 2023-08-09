import PropTypes from 'prop-types';

function Buttons({ onButtonClick }) {
  const handleClick = (e) => onButtonClick(e.target.name);

  return (
    <div className="button">
      <button type="button" className="btn" name="AC" onClick={handleClick}>AC</button>
      <button type="button" className="btn" name="+/-" onClick={handleClick}>+/-</button>
      <button type="button" className="btn" name="%" onClick={handleClick}>%</button>
      <button type="button" className="btn orange" name="÷" onClick={handleClick}>÷</button>
      <br />

      <button type="button" className="btn" name="7" onClick={handleClick}>7</button>
      <button type="button" className="btn" name="8" onClick={handleClick}>8</button>
      <button type="button" className="btn" name="9" onClick={handleClick}>9</button>
      <button type="button" className="btn orange" name="x" onClick={handleClick}>x</button>
      <br />

      <button type="button" className="btn" name="4" onClick={handleClick}>4</button>
      <button type="button" className="btn" name="5" onClick={handleClick}>5</button>
      <button type="button" className="btn" name="6" onClick={handleClick}>6</button>
      <button type="button" className="btn orange" name="-" onClick={handleClick}>-</button>
      <br />

      <button type="button" className="btn" name="1" onClick={handleClick}>1</button>
      <button type="button" className="btn" name="2" onClick={handleClick}>2</button>
      <button type="button" className="btn" name="3" onClick={handleClick}>3</button>
      <button type="button" className="btn orange" name="+" onClick={handleClick}>+</button>
      <br />

      <button type="button" className="zero" name="0" onClick={handleClick}>0</button>
      <button type="button" className="btn" name="." onClick={handleClick}>.</button>
      <button type="button" className="btn orange" name="=" onClick={handleClick}>=</button>
    </div>
  );
}

Buttons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
export default Buttons;
