export function formatUsername(username: string): string {
    if (username.length <= 2) return username;
    
    const start = username.slice(0, Math.floor(username.length / 3));
    const end = username.slice(-Math.floor(username.length / 3));
    const middleLength = username.length - start.length - end.length;
    
    return `${start}${'*'.repeat(middleLength)}${end}`;
  }
  
  