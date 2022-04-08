"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComments = exports.getAllIssues = void 0;

var _IssueSlice = require("./Issue-slice");

var getAllIssues = function getAllIssues(username, repo) {
  return function _callee(dispatch) {
    var res, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch("https://api.github.com/repos/".concat(username, "/").concat(repo, "/issues")));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(res.json());

          case 6:
            data = _context.sent;
            console.log(data);

            if (res.ok) {
              _context.next = 10;
              break;
            }

            throw new Error('Invalid username or repo');

          case 10:
            dispatch(_IssueSlice.IssueSliceActions.paginate(data));
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            dispatch(_IssueSlice.IssueSliceActions.setError(_context.t0.message));
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

exports.getAllIssues = getAllIssues;

var getComments = function getComments(username, repo, id) {
  return function _callee2(dispatch) {
    var res, data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch("https://api.github.com/repos/".concat(username, "/").concat(repo, "/issues/").concat(id, "/comments")));

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(res.json());

          case 6:
            data = _context2.sent;
            console.log(data);

            if (res.ok) {
              _context2.next = 10;
              break;
            }

            throw new Error(data.message || 'Cannot get the comments');

          case 10:
            dispatch(_IssueSlice.IssueSliceActions.setComments(data));
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            dispatch(_IssueSlice.IssueSliceActions.setError(_context2.t0.message));
            console.log(_context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

exports.getComments = getComments;