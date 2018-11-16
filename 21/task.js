const isBracketStructureBalanced = (argStr) => {
  const result = argStr.split('');
  if (result.length % 2 !== 0) {
    return false;
  }
  const brackets = {
    '(': 0,
    ')': 0,
    '[': 0,
    ']': 0,
    '<': 0,
    '>': 0,
    '{': 0,
    '}': 0,
  };

  result.forEach(item => brackets[item] = brackets[item] + 1);

  if (brackets['('] !== brackets[')']
    || brackets['['] !== brackets[']']
    || brackets['<'] !== brackets['>']
    || brackets['{'] !== brackets['}']) {
    return false;
  }

  return true;
};

export default isBracketStructureBalanced;
// END
