let foo = 42
foo = "bar"
foo = true

const personDescription = (name, city, age) => {
  return `${name} leaves in ${city}. his age is ${age}. in 10 years he will be ${age + 10}`
}

console.log(personDescription("kostas", "athens", "20"));
