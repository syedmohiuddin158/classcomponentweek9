import React from 'react';
import ReactDOM from 'react-dom/client';  // <-- note the /client
import './index.css';
import FacebookEmojiCounter from './Facebookemoji';
import ToggleMode from './ToggleModeComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <FacebookEmojiCounter type="happy" />
    <ToggleMode />
  </React.StrictMode>
);

