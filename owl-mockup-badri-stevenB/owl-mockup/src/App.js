import React from 'react';
import participants from './participant-list.js';
import chatLog from './chatLog.js';
import Participants from './Participants.js';
import Chat from './Chat.js';
import Stage from './Stage.js';

function App() {
  return (
    <main className='App'>
      <Participants xyz={participants} />
      <Chat log={chatLog} />
      <Stage abc={participants} />
      
    </main>
  );
}

export default App;