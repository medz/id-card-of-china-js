import { RegionInterface } from "./region.interface";

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
    birthday(): string;

    /**
     * Get the ID Card People Gender.
     *
     * @return {string}
     * @author Seven Du <shiweidu@outlook.com>
     */
    gender(): string;

    /**
     * Get region class.
     * @author Seven Du <shiweidu@outlook.com>
     */
    region(): RegionInterface;
}
