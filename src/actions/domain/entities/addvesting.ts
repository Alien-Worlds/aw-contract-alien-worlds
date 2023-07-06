/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:17:06 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Addvesting` object.
 *
 * @class
 */
export class Addvesting implements Entity {
  /**
   * Constructs a new instance of the `Addvesting` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Date vestingStart
   * @param number vestingLength
   * @param Asset vestingQuantity
   * @param string [id]
   * @returns `Addvesting` - An instance of the `Addvesting` class.
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
   * Converts the current instance of the `Addvesting` class to a JSON object.
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
   * Creates an instance of the `Addvesting` class.
   *
   * @static
   * @public
   * @returns `Addvesting` An instance of the `Addvesting` class.
   */
  public static create(
    account: string,
    vestingStart: Date,
    vestingLength: number,
    vestingQuantity: Asset,
    id?: string,
    rest?: UnknownObject
  ): Addvesting {
    const entity = new Addvesting(
      account,
      vestingStart,
      vestingLength,
      vestingQuantity,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Addvesting {
    return new Addvesting(
      '',
      new Date(0),
      0,
      Asset.getDefault(),
    );
  }
}

