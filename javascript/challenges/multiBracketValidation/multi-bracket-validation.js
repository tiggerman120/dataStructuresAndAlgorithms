'use strict';



function multiBracketValidation(string) {
  var a = string;
  var braces = 0;
  for (var i = 0, len = a.length; i < len; ++i) {
    switch (a[i]) {
    case '(':
      ++braces;
      break;
    case ')':
      --braces;
      break;
    case '{':
      --braces;
      break;
    case '}':
      --braces;
      break;
    case '[':
      --braces;
      break;
    case ']':
      --braces;
      break;
    }
    if (braces < 0) {
      alert('error');
      break;
    }
  }

  if (braces)
    alert('error');
}
multiBracketValidation('[]{}()');

module.exports = multiBracketValidation();
