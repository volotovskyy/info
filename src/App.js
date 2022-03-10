import React from 'react'
import { MainView } from './views'
import { useFingerprintInit } from './hooks'
import { FingerprintContext } from './utils'

function App() {
  const fingerprint = useFingerprintInit()
  console.log("APP fingerprint", fingerprint)
  if (!fingerprint) {
    return null
  }

  return (
    <FingerprintContext.Provider value={fingerprint}>
      <MainView />
    </FingerprintContext.Provider>
  );
}

export default App;
