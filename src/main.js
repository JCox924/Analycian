const { useState } = React;
const { BrowserRouter, Routes, Route } = ReactRouterDOM;

// TypeScript interfaces (using JSDoc for TypeScript-like type safety in Babel)
/** @typedef {{ id: string, name: string, type: string, data: any[] }} DataFile */

// Main App Component
const App = () => {
  const [files, setFiles] = useState(/** @type {DataFile[]} */([]));
  const [selectedFile, setSelectedFile] = useState(/** @type {DataFile | null} */(null));

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-accent">
        <Header />
        <Routes>
          <Route path="/" element={<Home files={files} setFiles={setFiles} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Header Component
const Header = () => (
  <header className="bg-primary text-white p-4">
    <h1 className="text-2xl font-bold">Analycian</h1>
    <p className="text-sm">Data-Driven Decisions for Small Businesses</p>
  </header>
);

// Home Component (Main Page with Upload and Dashboard)
const Home = ({ files, setFiles, selectedFile, setSelectedFile }) => {
  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'text/csv' || file.name.endsWith('.xlsx'))) {
      const newFile = {
        id: Math.random().toString(36).substring(2),
        name: file.name,
        type: file.type,
        data: [], // Placeholder for processed data
      };
      setFiles([...files, newFile]);
      setSelectedFile(newFile);
    }
  };

  return (
    <main className="container mx-auto p-4">
      <UploadWizard onFileUpload={handleFileUpload} />
      <Dashboard files={files} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
    </main>
  );
};

// Upload Wizard Component
const UploadWizard = ({ onFileUpload }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4 text-text">Upload Data File</h2>
    <input
      type="file"
      accept=".csv,.xlsx"
      onChange={onFileUpload}
      className="block w-full text-sm text-text
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-secondary file:text-white
        hover:file:bg-blue-700"
    />
    <p className="mt-2 text-sm text-text">Supported formats: .csv, .xlsx</p>
  </div>
);

// Dashboard Component
const Dashboard = ({ files, selectedFile, setSelectedFile }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-text">Uploaded Files</h2>
      {files.length === 0 ? (
        <p className="text-text">No files uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {files.map((file) => (
            <li
              key={file.id}
              className={`p-2 rounded cursor-pointer ${
                selectedFile?.id === file.id ? 'bg-secondary text-white' : 'hover:bg-accent'
              }`}
              onClick={() => setSelectedFile(file)}
            >
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-text">Data Insights</h2>
      {selectedFile ? (
        <div>
          <p className="text-text">Showing data for: {selectedFile.name}</p>
          <div className="mt-4 h-64 bg-accent flex items-center justify-center">
            <p className="text-text">Graph visualization placeholder</p>
          </div>
        </div>
      ) : (
        <p className="text-text">Select a file to view insights.</p>
      )}
    </div>
  </div>
);

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);