"use server"

export async function submitName(formData) {

  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  console.log("Hello from server:", name);

  // i can write wtv logic here. eg; insert data, update, delete data
}