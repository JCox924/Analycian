"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var Home = function Home(_ref) {
  var files = _ref.files,
    setFiles = _ref.setFiles,
    selectedFile = _ref.selectedFile,
    setSelectedFile = _ref.setSelectedFile;
  var handleFileUpload = function handleFileUpload(event) {
    var _event$target$files;
    var file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    if (file && (file.type === 'text/csv' || file.name.endsWith('.xlsx'))) {
      var newFile = {
        id: Math.random().toString(36).substring(2),
        name: file.name,
        type: file.type,
        data: []
      };
      if (file.type === 'text/csv') {
        Papa.parse(file, {
          complete: function complete(result) {
            newFile.data = result.data; // Store parsed CSV data
            setFiles([].concat(_toConsumableArray(files), [newFile]));
            setSelectedFile(newFile);
          },
          header: true,
          skipEmptyLines: true // Clean data by skipping empty lines
        });
      } else if (file.name.endsWith('.xlsx')) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var data = new Uint8Array(e.target.result);
          var workbook = XLSX.read(data, {
            type: 'array'
          });
          var sheet = workbook.Sheets[workbook.SheetNames[0]];
          newFile.data = XLSX.utils.sheet_to_json(sheet); // Store parsed Excel data
          setFiles([].concat(_toConsumableArray(files), [newFile]));
          setSelectedFile(newFile);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  // Simple data processing to extract a numeric column for visualization
  var getChartData = function getChartData(data) {
    // Assume data has a numeric column (e.g., 'value'); adjust based on your data structure
    return data.map(function (row, index) {
      return {
        label: row.label || "Row ".concat(index + 1),
        value: Number(row.value) || 0 // Replace 'value' with actual column name
      };
    });
  };

  // Chart component for visualization
  var DataChart = function DataChart(_ref2) {
    var data = _ref2.data;
    var canvasRef = React.useRef(null);
    React.useEffect(function () {
      if (data.length > 0) {
        var chartData = getChartData(data);
        var ctx = canvasRef.current.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: chartData.map(function (item) {
              return item.label;
            }),
            datasets: [{
              label: 'Data Values',
              data: chartData.map(function (item) {
                return item.value;
              }),
              backgroundColor: '#3B82F6',
              borderColor: '#1F2937',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: true
              }
            }
          }
        });
      }
    }, [data]);
    return /*#__PURE__*/React.createElement("canvas", {
      ref: canvasRef,
      className: "w-full h-64"
    });
  };

  // Single parent element (<main>) to satisfy JSX requirement
  return /*#__PURE__*/React.createElement("main", {
    className: "container mx-auto p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-md mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-4 text-text"
  }, "Upload Data File"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".csv,.xlsx",
    onChange: handleFileUpload,
    className: "block w-full text-sm text-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-blue-700"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm text-text"
  }, "Supported formats: .csv, .xlsx")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-md"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-4 text-text"
  }, "Uploaded Files"), files.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "No files uploaded yet.") : /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, files.map(function (file) {
    return /*#__PURE__*/React.createElement("li", {
      key: file.id,
      className: "p-2 rounded cursor-pointer ".concat((selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id) === file.id ? 'bg-secondary text-white' : 'hover:bg-accent'),
      onClick: function onClick() {
        return setSelectedFile(file);
      }
    }, file.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-md"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-4 text-text"
  }, "Data Insights"), selectedFile ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "Showing data for: ", selectedFile.name), selectedFile.data.length > 0 ? /*#__PURE__*/React.createElement(DataChart, {
    data: selectedFile.data
  }) : /*#__PURE__*/React.createElement("div", {
    className: "mt-4 h-64 bg-accent flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "No data available for visualization"))) : /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "Select a file to view insights."))));
};