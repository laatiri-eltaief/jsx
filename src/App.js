import logo from './logo.svg';
import './App.css';
import { FullName } from './component/profile/Full Name';
import { Profilephoto } from './component/profile/Profile photo';
import { Address } from './component/profile/Adress';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Profilephoto/>
     <Address/>
    </div>
  );
}

export default App;
