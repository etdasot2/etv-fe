export function formatWithDecimalsNumber(value: number): string {
    // Convert to string to check the decimal part
    const numStart = value.toFixed(2)
    const numStr = numStart.toString()
  
    // If it's an integer (no decimal point)
    if (Number.isInteger(numStart)) {
      return numStart
    }
  
    // Split into integer and decimal parts
    const [integerPart, decimalPart] = numStr.split(".")
  
    // If decimal part is all zeros or doesn't exist
    if (!decimalPart || Number.parseInt(decimalPart) === 0) {
      return integerPart
    }
  
    // Remove trailing zeros from decimal part
    const trimmedDecimal = decimalPart.replace(/0+$/, "")
  
    // If there's still a decimal part after trimming
    if (trimmedDecimal.length > 0) {
      return `${integerPart}.${trimmedDecimal}`
    }
  
    // If all decimal digits were zeros
    return integerPart
  }