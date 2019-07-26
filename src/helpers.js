
export const generateId = () => {
  const timestamp = String(new Date().getTime())
  const randomNumber = String(Math.floor(Math.random() * 1000))
  return timestamp + randomNumber
}

export const getText = (name, type) => {
  switch(type) {
    case 'ADDED':
      return `'${name}' was added to your list`
    case 'REMOVED':
      return `'${name}' was deleted`
    case 'COMPLETED':
      return `'${name}' has been done`
    default:
     return null
  }
}
