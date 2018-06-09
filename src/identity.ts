import { IdentityInterface } from "./identity.interface";
import validateCheckCode from "./utils/validate-check-code";
import validateDate from "./utils/validate-date";
import { RegionInterface } from "./region.interface";
import { Region } from "./region";

export class Identity implements IdentityInterface
{
    /**
     * People identity card number.
     * 
     * @var string
     */
    identityCardNumber: string;

    /**
     * Create the Identity instance.
     * @param identityCardNumber People identity card number
     * @author Seven Du <shiweidu@outlook.com>
     */
    constructor(identityCardNumber: string) {
        this.identityCardNumber = identityCardNumber.replace(/[\_|\-|\\s+]/, '');
    }

    /**
     * Check The ID Card is legal.
     * 
     * @return boolean
     * @author Seven Du <shiweidu@outlook.com>
     */
    public legal(): boolean
    {
        const regionCode = parseInt(this.identityCardNumber.substr(0, 6));

        return (regionCode >= 110000
             && regionCode <= 820000
             && validateDate(this.birthday().replace(/\-/isg, ''))
             && validateCheckCode(this.identityCardNumber)
        );
    }

    /**
     * Get The ID Card People Birthday.
     * 
     * @return string
     * @author Seven Du <shiweidu@outlook.com>
     */
    public birthday(): string
    {
        const yaer: string = this.identityCardNumber.substr(6, 4);
        const month: string = this.identityCardNumber.substr(10, 2);
        const day: string = this.identityCardNumber.substr(12, 2);

        return `${yaer}-${month}-${day}`;
    }

    /**
     * Get the ID Card People Gender.
     *
     * @return {string}
     * @author Seven Du <shiweidu@outlook.com>
     */
    public gender(): string
    {
        return (parseInt(this.identityCardNumber.substr(16, 1)) % 2) === 0 ? '女' : '男';
    }

    /**
     * Get region.
     * @author Seven Du <shiweidu@outlook.com>
     */
    public region(): RegionInterface
    {
        return new Region(this.identityCardNumber.substr(0, 6));
    }
}
