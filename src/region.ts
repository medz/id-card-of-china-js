import { RegionInterface } from "./region.interface";
import * as regions from "./resources/gb-t-2260";

export class Region implements RegionInterface
{
  /**
   * The region code.
   *
   * @type {number}
   */
  regionCode: string;

  /**
   * Create the region instance.
   * @param {string} code
   * @author Seven Du <shiweidu@outlook.com>
   */
  constructor(code: string) {
     this.regionCode = code;
  }

  /**
   * Get region code.
   *
   * @return {number}
   * @author Seven Du <shiweidu@outlook.com>
   */
  public code(): number
  {
    return parseInt(this.regionCode);
  }

  /**
   * Get region province.
   *
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  public province(): string
  {
    let provinceCode = this.regionCode.substr(0, 2)+'0000';
    
    return regions[provinceCode];
  }

  /**
   * Get city for region.
   *
   * @return {?string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  public city(): string
  {
    let cityCode = this.regionCode.substr(0, 4)+'00';
    
    return regions[cityCode];
  }

  /**
   * Get count of the region.
   *
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  county(): string
  {
    return regions[this.regionCode];
  }

  /**
   * Get the region tree.
   *
   * @return {string[]}
   * @author Seven Du <shiweidu@outlook.com>
   */
  tree(): string[]
  {
    return [
      this.province(),
      this.city(),
      this.county(),
    ].filter(function (item) {
      return item;
    });
  }

  /**
   * Get The Region Tree String.
   * 
   * @param {string} glue Join Array Elements With A Glue String
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  treeString(glue: string = ""): string
  {
    return this.tree().join(glue);
  }
}
