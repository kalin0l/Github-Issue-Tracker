"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IssueSliceActions = void 0;

var _toolkit = require("@reduxjs/toolkit");

var IssueSlice = (0, _toolkit.createSlice)({
  name: 'issue',
  initialState: {
    username: localStorage.getItem('username'),
    repo: localStorage.getItem('repo'),
    newIssues: JSON.parse(localStorage.getItem('newIssues')),
    comments: [],
    error: ''
  },
  reducers: {
    paginate: function paginate(state, action) {
      var numberOfEvents = action.payload;
      var eventsPerPage = 10;
      var numberOfPages = Math.ceil(numberOfEvents.length / eventsPerPage);
      var newEvents = Array.from({
        length: numberOfPages
      }, function (_, i) {
        var start = i * eventsPerPage;
        return numberOfEvents.slice(start, start + eventsPerPage);
      });
      state.newIssues = newEvents;
      localStorage.setItem('newIssues', JSON.stringify(state.newIssues));
    },
    setUsername: function setUsername(state, action) {
      state.username = action.payload;
      localStorage.setItem('username', state.username);
    },
    setRepo: function setRepo(state, action) {
      state.repo = action.payload;
      localStorage.setItem('repo', state.repo);
    },
    setComments: function setComments(state, action) {
      state.comments = action.payload;
    },
    setError: function setError(state, action) {
      state.error = action.payload;
    }
  }
});
var IssueSliceActions = IssueSlice.actions;
exports.IssueSliceActions = IssueSliceActions;
var _default = IssueSlice;
exports["default"] = _default;