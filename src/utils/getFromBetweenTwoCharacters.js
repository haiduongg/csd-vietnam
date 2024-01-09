let results = [];
let string = '';

function getFromBetween(sub1, sub2) {
  if (string.indexOf(sub1) < 0 || string.indexOf(sub2) < 0) return false;
  const SP = string.indexOf(sub1) + sub1.length;
  const string1 = string.substr(SP);
  const TP = string1.indexOf(sub2);
  if (TP === -1) return false;
  return string1.substring(0, TP);
}
function removeFromBetween(sub1, sub2) {
  if (string.indexOf(sub1) < 0 || string.indexOf(sub2) < 0) return false;
  const removal = sub1 + getFromBetween(sub1, sub2) + sub2;
  string = string.replace(removal, '');
}
function getAllResults(sub1, sub2) {
  if (string.indexOf(sub1) < 0 || string.indexOf(sub2) < 0) return;

  const result = getFromBetween(sub1, sub2);
  if (result) {
    results.push(result);
    removeFromBetween(sub1, sub2);
    getAllResults(sub1, sub2);
  }
}
export default function getFromBetweenTwoCharacters(str, sub1, sub2) {
  results = [];
  string = str;
  getAllResults(sub1, sub2);
  return results;
}
