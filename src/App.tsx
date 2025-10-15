import React, { useState } from 'react';
import Header from './components/Header';
import RequestsGenerator from './components/RequestsGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 overflow-auto">
          <RequestsGenerator />
        </main>
      </div>
    </div>
  );
}

export default App;