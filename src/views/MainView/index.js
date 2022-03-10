import React from 'react'

import { Header, Info, FactsList } from '../../components'

export const MainView = () => {
  return (
    <main className="App">
        <Header />
        <div className="container">
          <Info />
          <FactsList />
        </div>
    </main>
  )
}
