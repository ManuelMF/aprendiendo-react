import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'todomvc-app-css/index.css'
import { FunctionsTodoProvider } from './context/FuctionsTodoContext.tsx'
import { TodoProvider } from './context/TodoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <FunctionsTodoProvider>
      <App />
    </FunctionsTodoProvider>
  </TodoProvider>
)
