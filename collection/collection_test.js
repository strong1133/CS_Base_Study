

const main = () => {

  listTest();  // list: 0.227ms
  setTest(); // Set:  0.151ms

}

const listTest = () => {
  console.time("list");

  const list1 = [];
  list1.push(1, 2, 3, 4, 5);

  list1.push(1);
  list1.pop();
  list1.push(1);

  for (let e of list1) {
    // console.log(e)
  }

  console.timeEnd("list");
}

const setTest = () =>{
  console.time("set");

  const set1 = new Set();

  set1.add(1)
  set1.add(2)
  set1.add(3)
  set1.add(4)
  set1.add(5)

  set1.add(1)
  set1.delete(1)
  set1.add(1)

  for(let e of set1){
    // console.log(e)
  }


  console.timeEnd("set");
}


main();