import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


createRoot(document.getElementById('root')).render(
    <App />
)

{/* <StrictMode>
<App />
</StrictMode>, isso aqui atrapalha pq renderiza duas vezes*/}