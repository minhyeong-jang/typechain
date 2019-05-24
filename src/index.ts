interface Human {
  name: string;
  age: number;
  gender: string;
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }!`;
};
const person = {
  name: "Minhyeong",
  age: 23,
  gender: "male"
};
console.log(sayHi(person));

export {};
