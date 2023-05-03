import './App.css';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Bottom from './components/bottom/Bottom';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <div className='top'>
          <LeftBar />
          <RightBar />
        </div>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
