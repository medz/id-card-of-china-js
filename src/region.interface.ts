export interface RegionInterface
{
  /**
   * Get region code.
   *
   * @return {number}
   * @author Seven Du <shiweidu@outlook.com>
   */
  code(): number;

  /**
   * Get region province.
   *
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  province(): string;

  /**
   * Get city for region.
   *
   * @return {?string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  city(): string;

  /**
   * Get count of the region.
   *
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  county(): string;

  /**
   * Get the region tree.
   *
   * @return {string[]}
   * @author Seven Du <shiweidu@outlook.com>
   */
  tree(): string[];

  /**
   * Get The Region Tree String.
   * 
   * @param {string} glue Join Array Elements With A Glue String
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  treeString(glue: string): string;
}
