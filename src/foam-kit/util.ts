export function labelize(str) {
  return (
      str[0].toUpperCase() +
      str.substring(1).replace(/[a-z][A-Z]/g, (s) => `${s[0]} ${s[1]}`)
  )
}

export function constantize(str) {
  return str.replace(/[a-z][A-Z]/g, (s) => `${s[0]}_${s[1]}`).toUpperCase();
}