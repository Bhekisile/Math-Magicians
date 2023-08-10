import CalculatorParts from './CalculatorParts';
import DisplayQuote from './DisplayQuote';
import NavBar from './NavBar';

export default function Calculator() {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="content">
        <DisplayQuote />
        <CalculatorParts />
      </main>
    </div>
  );
}
