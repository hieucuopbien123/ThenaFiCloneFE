export function numberWithCommas(x, fractionDigits) {
  const [naturalPart, decimalPart] = x.toString().split(".");
  let out = naturalPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (decimalPart) {
    if (!isNumeric(fractionDigits)) {
      out += "." + decimalPart;
    } else if (decimalPart.length >= fractionDigits) {
      out += "." + decimalPart.substr(0, fractionDigits);
    } else {
      out +=
        "." + decimalPart + "0".repeat(fractionDigits - decimalPart.length);
    }
  }
  return out;
}
export function isNumeric(num) {
  return !isNaN(num) && !isNaN(parseFloat(num));
}
export function formatAddress(address) {
  return address.slice(0, 6) + "..." + address.slice(-4);
}
