export function convertNumber(num) {
  if (num <999) return num
  if (num > 999 && num < 10000) return `${Number(num.toString().slice(0, 1))}K`
  if (num > 9999 && num < 100000) return `${Number(num.toString().slice(0, 2))}K`
  if (num > 99999 && num < 1000000) return `${Number(num.toString().slice(0, 3))}K`
  if (num > 999999 && num < 10000000) return `${Number(num.toString().slice(0, 1))}M`
  if (num > 9999999 && num < 100000000) return `${Number(num.toString().slice(0, 2))}M`
  if (num > 99999999 && num < 1000000000) return `${Number(num.toString().slice(0, 3))}M`
  if (num > 999999999 && num < 10000000000) return `${Number(num.toString().slice(0, 1))}B`
}