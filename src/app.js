function generateExcuse() {
  let who = ['The dog', 'My grandma', 'The mailman', 'A random jogger'];
  let action = ['ate', 'kicked', 'stole', 'crushed'];
  let what = ['my homework', 'my sandwich', 'the car', 'my phone'];
  let when = ['before the class', 'on the street', 'during lunch', 'while I was praying'];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

document.getElementById('excuse').innerText = generateExcuse();