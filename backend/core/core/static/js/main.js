"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState;
var _ReactRouterDOM = ReactRouterDOM,
  BrowserRouter = _ReactRouterDOM.BrowserRouter,
  Routes = _ReactRouterDOM.Routes,
  Route = _ReactRouterDOM.Route;

// TypeScript interfaces (using JSDoc for TypeScript-like type safety in Babel)
/** @typedef {{ id: string, name: string, type: string, data: any[] }} DataFile */

// Main App Component
var App = function App() {
  var _useState = useState(/** @type {DataFile[]} */[]),
    _useState2 = _slicedToArray(_useState, 2),
    files = _useState2[0],
    setFiles = _useState2[1];
  var _useState3 = useState(/** @type {DataFile | null} */null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedFile = _useState4[0],
    setSelectedFile = _useState4[1];
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-accent"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, {
      files: files,
      setFiles: setFiles,
      selectedFile: selectedFile,
      setSelectedFile: setSelectedFile
    })
  }))));
};

// Header Component
var Header = function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-primary text-white p-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Analycian"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Data-Driven Decisions for Small Businesses"));
};

// Home Component (Main Page with Upload and Dashboard)
var Home = function Home(_ref) {
  var files = _ref.files,
    setFiles = _ref.setFiles,
    selectedFile = _ref.selectedFile,
    setSelectedFile = _ref.setSelectedFile;
  // Handle file upload
  var handleFileUpload = function handleFileUpload(event) {
    var _event$target$files;
    var file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    if (file && (file.type === 'text/csv' || file.name.endsWith('.xlsx'))) {
      var newFile = {
        id: Math.random().toString(36).substring(2),
        name: file.name,
        type: file.type,
        data: [] // Placeholder for processed data
      };
      setFiles([].concat(_toConsumableArray(files), [newFile]));
      setSelectedFile(newFile);
    }
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "container mx-auto p-4"
  }, /*#__PURE__*/React.createElement(UploadWizard, {
    onFileUpload: handleFileUpload
  }), /*#__PURE__*/React.createElement(Dashboard, {
    files: files,
    selectedFile: selectedFile,
    setSelectedFile: setSelectedFile
  }));
};

// Upload Wizard Component
var UploadWizard = function UploadWizard(_ref2) {
  var onFileUpload = _ref2.onFileUpload;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-md mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-4 text-text"
  }, "Upload Data File"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".csv,.xlsx",
    onChange: onFileUpload,
    className: "block w-full text-sm text-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-blue-700"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm text-text"
  }, "Supported formats: .csv, .xlsx"));
};

// Dashboard Component
var Dashboard = function Dashboard(_ref3) {
  var files = _ref3.files,
    selectedFile = _ref3.selectedFile,
    setSelectedFile = _ref3.setSelectedFile;
  return /*#__PURE__*/React.createElement("div", {
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
  }, "Showing data for: ", selectedFile.name), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 h-64 bg-accent flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "Graph visualization placeholder"))) : /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "Select a file to view insights.")));
};

// Render the app
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));