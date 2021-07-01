import { useState } from 'react';
import './App.css';
import {encryptPin} from './encryptPin'

function App() {
  const [pin, setPin] = useState('4252')
  const [encodedPin, setEncodedPin] = useState('')

  const encodeThePin = () => {
    async function setEncodedPinAsync() {
      setEncodedPin(await encryptPin(pin))
    }
    
    setEncodedPinAsync()
  }

  return (
    <div className="App" style={{ marginTop: '15px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
      <div>

      <input style={{ maxWidth: '100px'}} value={pin} onChange={(e) => { setPin(e.currentTarget.value)}}/>
      <button style={{ }} onClick={encodeThePin}>Encode</button>
      </div>
      <hr style={{marginTop: '15px'}}/>
      <code>{encodedPin}</code>
    </div>
  );
}

export default App;
