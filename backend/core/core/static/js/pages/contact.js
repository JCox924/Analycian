"use strict";

var Contact = function Contact() {
  return /*#__PURE__*/React.createElement("main", {
    className: "container mx-auto p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-md"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-4 text-text"
  }, "Contact Us"), /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "Reach out to the Analycian team for support or inquiries."), /*#__PURE__*/React.createElement("form", {
    className: "mt-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-text"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "mt-1 p-2 w-full border rounded-md"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-text"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: "mt-1 p-2 w-full border rounded-md"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-text"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    className: "mt-1 p-2 w-full border rounded-md",
    rows: "4"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-700"
  }, "Send Message"))));
};