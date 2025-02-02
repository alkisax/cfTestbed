class ProductAlreadyExistsError extends Error {
  constructor(message) {
    super(message)
    this.code = "ProductExists"
  }
}

class ProductNotFoundError extends Error{
  constructor(message){
    super(message)
    this.code = "ProductNotFound"
  }
}

try {
  throw new ProductNotFoundError("product not found")
} catch (error) {
  if (error instanceof ProductNotFoundError) {
    console.error("produc not exists \n" + error.message, error.code)
  } else if (error instanceof ProductAlreadyExistsError) {
    console.error("product already exists \n" + error.message, error.code)
  }
}
