// Second task
// function parseJson(json) {
//   try {
//     return JSON.parse(json);
//   } catch (error) {
//     return null;
//   }
// }

// parseJson('{ "name": "John", "age": 35, "isAdmin": false}');
// parseJson('{ name: John, age: 35, "isAdmin": false}');

// Third task
function parseJsonAdvanced(json) {
  const user = JSON.parse(json);

  if (!user.name || !user.company) {
    throw new Error('User has no name or company');
  }

  return user;
}

window.onerror = function (message, url, line, col, error) {
  // eslint-disable-next-line no-console
  console.log(`${message} ${line}:${col} ${url}, ${error}`);

  return false;
};

parseJsonAdvanced('{ "name": "John", "age": 35, "isAdmin": false, "company": "EPAM"}');
parseJsonAdvanced('{ "name": "John", "age": 35, "isAdmin": false}');

