export default function Calculator() {
  return (
    <div className="wrapper">
      <Screen />
      <Buttons />
    </div>
  );
}

function Screen() {
  return (
    <div className="screen">
      <p>0</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="button">
      <button type="submit" className="btn" name="AC">AC</button>
      <button type="submit" className="btn" name="+/-">+/-</button>
      <button type="submit" className="btn" name="%">%</button>
      <button type="submit" className="btn orange" name="/">÷</button>
      <br />

      <button type="submit" className="btn" name="7">7</button>
      <button type="submit" className="btn" name="8">8</button>
      <button type="submit" className="btn" name="9">9</button>
      <button type="submit" className="btn orange" name="x">x</button>
      <br />

      <button type="submit" className="btn" name="4">4</button>
      <button type="submit" className="btn" name="5">5</button>
      <button type="submit" className="btn" name="6">6</button>
      <button type="submit" className="btn orange" name="-">-</button>
      <br />

      <button type="submit" className="btn" name="1">1</button>
      <button type="submit" className="btn" name="2">2</button>
      <button type="submit" className="btn" name="3">3</button>
      <button type="submit" className="btn orange" name="+">+</button>
      <br />

      <button type="submit" className="zero" name="0">0</button>
      <button type="submit" className="btn" name=".">.</button>
      <button type="submit" className="btn orange" name="=">=</button>
    </div>
  );
}
