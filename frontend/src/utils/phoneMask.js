export const phoneMask = (value = '') => {
  if (value) {
    return value
      .replace(/(^[0-9]{2})(\d)/, "($1) $2")
      .replace(/(^\([0-9]{2}\) [0-9]{5})(\d)/, "$1-$2")
  } else {
    return '';
  }

}