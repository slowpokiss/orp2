export default function pullOut({ special }) {
  const obj = special;
  for (const key in obj) {
    if (!('description' in obj[key]) && (Object.prototype.hasOwnProperty.call(obj, key))) {
      obj[key].description = 'Описание недоступно';
    }
  }
  return obj;
}
