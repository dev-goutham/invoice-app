import React, { PropsWithChildren } from 'react';
import Navbar from './components/Navbar';

const App: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
