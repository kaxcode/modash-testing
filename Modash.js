// truncate(string, length)
const s = 'All code and no tests makes Kenia a precarious cat.';
Modash.truncate(s, 21);
Modash.truncate(s, 100);


// capitalize(string)
const x = 'stability was practically ASSURED.';
Modash.capitalize(s);


//camelCase(string)
let y = 'started at';
Modash.camelCase(s);

y = 'started_at';
Modash.camelCase(s);