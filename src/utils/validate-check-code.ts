/**
 * Validate people identity card number.
 * @param identityCardNumber People identity card number
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function validateCheckCode(identityCardNumber: string): boolean {
    let factor: number[] = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let varifyList: string[] = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let sum: number = 0;

    for (let index: number = 0; index < 17; index++) {
        sum += parseInt(identityCardNumber[index]) * factor[index];
    }

    let quotiety = sum % 11;

    return varifyList[quotiety] === identityCardNumber[17].toLocaleUpperCase();
}
