import React from 'react'
import Papa from 'papaparse'
import * as XLSX from 'xlsx'
import { Chart } from 'chart.js/auto'

type DataRow = Record<string, unknown>

type DataFile = {
  id: string
  name: string
  type: string
  data: DataRow[]
}

type Props = {
  files: DataFile[]
  setFiles: React.Dispatch<React.SetStateAction<DataFile[]>>
  selectedFile: DataFile | null
  setSelectedFile: React.Dispatch<React.SetStateAction<DataFile | null>>
}

const Home: React.FC<Props> = ({ files, setFiles, selectedFile, setSelectedFile }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const isCSV = file.type === 'text/csv' || file.name.toLowerCase().endsWith('.csv')
    const isXLSX = file.name.toLowerCase().endsWith('.xlsx') || file.name.toLowerCase().endsWith('.xls')
    if (!isCSV && !isXLSX) return

    const newFile: DataFile = {
      id: Math.random().toString(36).slice(2),
      name: file.name,
      type: file.type,
      data: [],
    }

    if (isCSV) {
      Papa.parse<DataRow>(file, {
        complete: (result) => {
          newFile.data = (result.data as DataRow[]) ?? []
          setFiles((prev) => [...prev, newFile])
          setSelectedFile(newFile)
        },
        header: true,
        skipEmptyLines: true,
      })
    } else if (isXLSX) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = new Uint8Array(e.target!.result as ArrayBuffer)
        const workbook = XLSX.read(data, { type: 'array' })
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        newFile.data = (XLSX.utils.sheet_to_json(sheet) as DataRow[]) ?? []
        setFiles((prev) => [...prev, newFile])
        setSelectedFile(newFile)
      }
      reader.readAsArrayBuffer(file)
    }
  }

  // simple mapping: expects columns "label" and "value" if present
  const getChartData = (data: DataRow[]) =>
    data.map((row, i) => ({
      label: (row['label'] as string) ?? `Row ${i + 1}`,
      value: Number(row['value']) || 0,
    }))

  const DataChart: React.FC<{ data: DataRow[] }> = ({ data }) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
    const chartRef = React.useRef<Chart | null>(null)

    React.useEffect(() => {
      if (!canvasRef.current || data.length === 0) {
        chartRef.current?.destroy()
        chartRef.current = null
        return
      }
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return

      const chartData = getChartData(data)
      chartRef.current?.destroy()
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.map((d) => d.label),
          datasets: [
            {
              label: 'Data Values',
              data: chartData.map((d) => d.value),
            },
          ],
        },
        options: {
          scales: { y: { beginAtZero: true } },
          plugins: { legend: { display: true } },
        },
      })

      return () => {
        chartRef.current?.destroy()
        chartRef.current = null
      }
    }, [data])

    return <canvas ref={canvasRef} className="w-full h-64" />
  }

  return (
    <main className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-text">Upload Data File</h2>
        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={handleFileUpload}
          className="block w-full text-sm text-text
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-secondary file:text-white
            hover:file:bg-blue-700"
        />
        <p className="mt-2 text-sm text-text">Supported formats: .csv, .xlsx</p>
      </div>

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
            selectedFile.data.length > 0 ? (
              <DataChart data={selectedFile.data} />
            ) : (
              <div className="mt-4 h-64 bg-accent flex items-center justify-center">
                <p className="text-text">No data available for visualization</p>
              </div>
            )
          ) : (
            <p className="text-text">Select a file to view insights.</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default Home
