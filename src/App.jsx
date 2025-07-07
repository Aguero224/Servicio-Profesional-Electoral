import { useState } from 'react'
import { FaReact } from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <FaReact className="text-5xl text-blue-500 animate-spin-slow" />
          <h1 className="text-4xl font-bold text-gray-800">Proyecto Estático React</h1>
        </div>
        <p className="text-lg text-gray-600 text-center">
          Un proyecto creado con Vite + React + TailwindCSS
        </p>
      </header>
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Contador: {count}
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Edita <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">src/App.jsx</code> y guarda para probar la recarga en caliente (HMR)
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600">
              Aprende más sobre las tecnologías utilizadas:
            </p>
            <ul className="mt-2 space-y-1 text-blue-500">
              <li>
                <a href="https://vitejs.dev/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  React
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  TailwindCSS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
