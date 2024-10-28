import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Theme } from "@radix-ui/themes";

import { Dashboard } from './pages'
import './App.css'

import "@radix-ui/themes/styles.css";

const queryClient = new QueryClient()

function App() {

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </Theme>
  )
}

export default App
