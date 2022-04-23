import './App.css';
import { Header, Balance, IncomeExpense, TranscationList, AddTranscation } from './components/index'
import { GlboalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlboalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <TranscationList/>
        <AddTranscation/>
      </div>
    </GlboalProvider>
  );
}

export default App;
