import { useState } from 'react';
import Screen from './Screen';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);

    if (newData.next !== null) {
      setDisplayValue(newData.next);
    } else if (newData.total !== null) {
      setDisplayValue(newData.total);
    } else {
      setDisplayValue('0');
    }
  };

  return (
    <div className="wrapper">
      <Screen displayValue={displayValue} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}
