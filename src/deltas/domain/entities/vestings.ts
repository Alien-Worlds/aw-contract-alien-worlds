/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Vestings` object.
 *
 * @class
 */
export class Vestings implements Entity {
  /**
   * Constructs a new instance of the `Vestings` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Date vestingStart
   * @param number vestingLength
   * @param Asset vestingQuantity
   * @param string [id]
   * @returns `Vestings` - An instance of the `Vestings` class.
   */
  public constructor(
    public account: string,
    public vestingStart: Date,
    public vestingLength: number,
    public vestingQuantity: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Vestings` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      vestingStart: this.vestingStart,
      vestingLength: this.vestingLength,
      vestingQuantity: this.vestingQuantity,
    };
  }

  /**
   * Creates an instance of the `Vestings` class.
   *
   * @static
   * @public
   * @param string account
   * @param Date vestingStart
   * @param number vestingLength
   * @param Asset vestingQuantity
   * @returns `Vestings` An instance of the `Vestings` class.
   */
  public static create(
    account: string,
    vestingStart: Date,
    vestingLength: number,
    vestingQuantity: Asset,
    id?: string,
    rest?: UnknownObject
  ): Vestings {
    const entity = new Vestings(
      account,
      vestingStart,
      vestingLength,
      vestingQuantity,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Vestings {
    return new Vestings(
      '',
      new Date(0),
      0,
      Asset.getDefault(),
    );
  }
}

