const { useState } = React;
const { BrowserRouter, Routes, Route } = ReactRouterDOM;

// TypeScript-like interfaces using JSDoc
/** @typedef {{ id: string, name: string, type: string, data: any[] }} DataFile */

const App = () => {
  const [files, setFiles] = useState(/** @type {DataFile[]} */([]));
  const [selectedFile, setSelectedFile] = useState(/** @type {DataFile | null} */(null));

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-accent">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home files={files} setFiles={setFiles} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};