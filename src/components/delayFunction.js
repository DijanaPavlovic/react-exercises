function sleep(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time * 1000));
}

async function logger() {
  console.log(1);
  await sleep(1);
  console.log(2);
}

// function logger() {
//   console.log(1);
//   sleep(1).then(() => console.log(2));
// }

logger();
