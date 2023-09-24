import _ from 'lodash'
export default function solution(content) {
  // BEGIN
// step 1
const rows = content.split('\n').slice(2)
const data = rows.map((row) => row.split('|').slice(1).slice(0, -1).map((row) => row.trim()))
console.log(`${data.length}`);
// step 2 
const rasteniya = _.uniq(data.map((row) => 
row[0].charAt().toUpperCase() + row[0].slice(1).toLowerCase()).sort());
console.log(`${rasteniya.join(', ')}`);
//step 3
const safePlants = data.map((row) => row[4] === 'Нет')
const dangerousRasteniya = data.length - safePlants.length;
console.log(`Безопасные растения: ${(safePlants.length / data.length) * 100}%`);
console.log(`Опасные растения: ${(dangerousRasteniya / data.length) * 100}%`);
// step 4
// END
}