import Header from './components/Header';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div git init>
     <Header />
     <div className='panel'>
      <LeftPanel />
      <RightPanel />
     </div>
    </div>
  );
}

export default App;
