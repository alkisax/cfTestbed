const personDescription2 = (name: string, city: string, age: number) => {
  return `${name} leaves in ${city}. his age is ${age}. in 10 years he will be ${age + 10}`
}

console.log(personDescription2("kostas", "athens", 20));