export default function pullOut({ special }) {
  for (const key in special) {
    if (!('description' in special[key]) && (Object.prototype.hasOwnProperty.call(special, key))) {
      special[key].description = 'Описание недоступно';
    }
  }
  return special;
}