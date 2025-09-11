export function formatNumber(number: number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  
export  const formatNumberWayTwo = (value: number): string => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    }
    return value.toString()
  }
