export const shortenText = (text, max) => {
  if (!text) {
    return ''
  }

  if (typeof text === 'string') {
    if (text <= max) {
      return text
    } else {
      return `${text.substring(0, max)} ...`
    }
  }
}
