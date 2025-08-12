"use strict";

var _ReactRouterDOM = ReactRouterDOM,
  Link = _ReactRouterDOM.Link;
var SignUp = function SignUp() {
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var email = formData.get('email');
    var password = formData.get('password');
    var agreeTerms = formData.get('agreeTerms');
    if (!agreeTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    // TODO: Implement backend submission (e.g., AWS API Gateway)
    console.log('Sign-up submitted:', {
      name: name,
      email: email,
      password: password
    });
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "container mx-auto p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold mb-4 text-text"
  }, "Sign Up for Analycian"), /*#__PURE__*/React.createElement("p", {
    className: "text-text mb-4"
  }, "Create an account and start your ", /*#__PURE__*/React.createElement("strong", null, "30-day free trial"), " to explore data-driven insights."), /*#__PURE__*/React.createElement("form", {
    className: "space-y-4",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-text"
  }, "Full Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    className: "mt-1 p-2 w-full border rounded-md",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-text"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    className: "mt-1 p-2 w-full border rounded-md",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-text"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    className: "mt-1 p-2 w-full border rounded-md",
    required: true,
    minLength: "6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "agreeTerms",
    id: "agreeTerms",
    className: "mr-2",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "agreeTerms",
    className: "text-sm text-text"
  }, "I agree to the ", /*#__PURE__*/React.createElement(Link, {
    to: "/terms",
    className: "text-secondary hover:underline"
  }, "Terms and Conditions"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
  }, "Sign Up")), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-sm text-text text-center"
  }, "Already have an account? ", /*#__PURE__*/React.createElement(Link, {
    to: "/login",
    className: "text-secondary hover:underline"
  }, "Log in"))));
};