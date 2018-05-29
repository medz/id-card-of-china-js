export class Identity {
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
}
