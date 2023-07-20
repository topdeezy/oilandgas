import React from 'react'
import Layout from './components/layout/layout'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
   <main>
    <Layout>
      <AppRoutes/>
    </Layout>
   </main>
  )
}

export default App