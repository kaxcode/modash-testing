// truncate(string, length)
// const s = 'All code and no tests makes Kenia a precarious cat.';
// Modash.truncate(s, 21);
// Modash.truncate(s, 100);

// capitalize(string)
// const x = 'stability was practically ASSURED.';
// Modash.capitalize(s);

// camelCase(string)
// let y = 'started at';
// Modash.camelCase(s);

// y = 'started_at';
// Modash.camelCase(s);

function truncate(string, length) {
  if (string.length > length) {
    return `${string.slice(0, length)}...`;
  }
  return string;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function camelCase(string) {
  const words = string.split(/[\s|\-|_]+/);
  return [
    words[0].toLowerCase(),
    ...words.slice(1).map(w => capitalize(w)),
  ].join('');
}

const Modash = {
  truncate,
  capitalize,
  camelCase,
};

export default Modash;
