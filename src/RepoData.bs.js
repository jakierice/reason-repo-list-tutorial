// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function parseRepoJson(json) {
  return /* record */[
          /* full_name */Json_decode.field("full_name", Json_decode.string, json),
          /* stargazers_count */Json_decode.field("stargazers_count", Json_decode.$$int, json),
          /* html_url */Json_decode.field("html_url", Json_decode.string, json)
        ];
}

exports.parseRepoJson = parseRepoJson;
/* No side effect */