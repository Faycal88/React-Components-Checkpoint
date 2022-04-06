import './App.css';
import Pic from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Addresse from './Component/Profile/Address';

function App() {
  return (
    
    <div className="App">
      <div className='profileInfo' >
      <Pic></Pic>
      <FullName></FullName>
      <Addresse></Addresse>
      </div>
    </div>
  );
}

export default App;
