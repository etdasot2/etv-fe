export function formatBigNumbers(num: number | string): string {
    const n = typeof num === 'string' ? parseFloat(num) : num;

    if (isNaN(n)) {
        return 'Invalid Number';
    }

    if (Math.abs(n) >= 1000000) {
        return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }

    if (Math.abs(n) >= 1000) {
        return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return n.toString();
}

export function getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
  
    if (isNaN(seconds)) {
      return 'Invalid date';
    }
  
    if (seconds < 30) {
      return 'just now';
    }
  
    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };
  
    let counter;
    for (const interval in intervals) {
      counter = Math.floor(seconds / intervals[interval]);
      if (counter >= 1) {
        return `${counter} ${interval}${counter === 1 ? '' : 's'} ago`;
      }
    }
  
    return 'just now'; // fallback
  }