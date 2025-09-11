export const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const formatScheduledDateTime = (createdAt: string | Date): string => {
    // Fixed date 18/11/2024
    const fixedYear = 2024;
    const fixedMonth = '11'; // November
    const fixedDay = '18';

    const date = new Date(createdAt);
  
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${fixedYear}-${fixedMonth}-${fixedDay} ${hours}:${minutes}:${seconds}`;
};
