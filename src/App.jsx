import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import ZakatForm from '../components/ZakatForm'
import ResultCard from '../components/ResultCard'

function App() {
  const [zakat, setZakat] = useState(null);

  const calculateZakat = (values) => {
    const goldValue = parseFloat(values.gold) || 0;
    const silverValue = parseFloat(values.silver) || 0;
    const cashValue = parseFloat(values.cash) || 0;
    const assetsValue = parseFloat(values.assets) || 0;
    const liabilitiesValue = parseFloat(values.liabilities) || 0;

    const totalWealth = goldValue + silverValue + cashValue + assetsValue - liabilitiesValue;
    const zakatAmount = totalWealth >= 59250 ? totalWealth * 0.025 : 0;  // Nisab (Gold) ~ 85g * ₹69750 (current rate)

    setZakat(zakatAmount.toFixed(2));
  };

  return (
    <div>
      <Navbar />
      <ZakatForm calculateZakat={calculateZakat} />
      <ResultCard zakatAmount={zakat} />
    </div>
  );
}

export default App;