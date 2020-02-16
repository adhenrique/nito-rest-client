export function generateFakeID() {
  return `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}

export function getVerbColors(verb) {
  const obj = {};
  switch (verb) {
    case 'GET':
      obj.color = '#50e3c2';
      obj.bgColor = '#cff5e4';
      break;
    case 'PUT':
      obj.color = '#61affe';
      obj.bgColor = '#EBF3FB';
      break;
    case 'POST':
      obj.color = '#fca130';
      obj.bgColor = '#fce9db';
      break;
    case 'DELETE':
      obj.color = '#f93e3e';
      obj.bgColor = '#fde1dd';
      break;
    default:
      obj.color = '#eee';
      obj.bgColor = '#ccc';
      break;
  }
  return obj;
}
