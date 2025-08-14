import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layout.tsx";
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import SignUp from './pages/signup'

export default function App() {
  const [files, setFiles] = React.useState<any[]>([])
  const [selectedFile, setSelectedFile] = React.useState<any | null>(null)

  React.useEffect(() => {
    fetch('/api/ping/')
      .then(res => res.json())
      .then(data => console.log('Ping:', data))
      .catch(console.error)
  }, [])

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              files={files}
              setFiles={setFiles}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  )
}