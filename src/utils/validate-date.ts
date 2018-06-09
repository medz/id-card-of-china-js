/**
 * Validate date string.
 * @param dateString 
 */
export default function validateDate(dateString: string): boolean {
    const year: number = parseInt(dateString.substr(0, 4));
    const month: number = parseInt(dateString.substr(4, 2)) - 1;
    const day: number = parseInt(dateString.substr(6, 2));
    const tempDate = new Date(year, month, day);

    return tempDate.getFullYear() === year && tempDate.getMonth() === month && tempDate.getDate() === day;
}
