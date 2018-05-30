/**
 * Validate people identity card number.
 * @param identityCardNumber People identity card number
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function validateCheckCode(identityCardNumber: string): boolean {
    let sum: number = 0;

    // 计算 sum 的值
    for (let index: number = 0; index < 17; index++) {
        sum += ((1 << (17 - index) % 11)) * parseInt(identityCardNumber[index]);
    }

    // 计算出最终的校验码
    const quotiety: number = (12 - (sum % 11)) % 11;

    // 如果校验码小于 10 进行直接判断
    if (quotiety < 10) {
        return parseInt(identityCardNumber[17]) === quotiety;
    }

    // 判断校验码是否是 X
    return (identityCardNumber[17]).toUpperCase() === "X";
}
