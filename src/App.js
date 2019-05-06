import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Modal from './components/Modal';


function App() {
  return (
    <div>
      <Modal uncontrolled>Modal children</Modal>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));