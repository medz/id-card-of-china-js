export interface IdentityInterface
{
    /**
     * Check The ID Card is legal.
     * 
     * @return boolean
     * @author Seven Du <shiweidu@outlook.com>
     */
    legal(): boolean;

    /**
     * Get The ID Card People Birthday.
     * 
     * @return string
     * @author Seven Du <shiweidu@outlook.com>
     */
    birthday(): string
}
