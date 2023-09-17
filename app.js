const todoIdList = [{ colors: ['#5c0700', '#5c0700'] },{ colors: ['#5c0700', '#e4ef65'] },{ colors: ['#e4ef65', '#5c0700'] },{ colors: ['#e4ef65', '#e4ef65'] } ]
const url ='https://www.aremycolorsaccessible.com/api/are-they';
for (const id of todoIdList) {
  const response = await fetch(url, {
  mode: 'cors',
  method: 'POST',
  body: JSON.stringify(id),
});
  const todo = await response.json();
  console.log(todo);
}
