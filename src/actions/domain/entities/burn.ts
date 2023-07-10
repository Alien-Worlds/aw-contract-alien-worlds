/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Burn` object.
 *
 * @class
 */
export class Burn implements Entity {
  /**
   * Constructs a new instance of the `Burn` class.
   *
   * @public
   * @constructor
   * @param string from
   * @param Asset quantity
   * @param string memo
   * @param string [id]
   * @returns `Burn` - An instance of the `Burn` class.
   */
  public constructor(
    public from: string,
    public quantity: Asset,
    public memo: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Burn` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      from: this.from,
      quantity: this.quantity,
      memo: this.memo,
    };
  }

  /**
   * Creates an instance of the `Burn` class.
   *
   * @static
   * @public
   * @returns `Burn` An instance of the `Burn` class.
   */
  public static create(
    from: string,
    quantity: Asset,
    memo: string,
    id?: string,
    rest?: UnknownObject
  ): Burn {
    const entity = new Burn(
      from,
      quantity,
      memo,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Burn {
    return new Burn(
      '',
      Asset.getDefault(),
      '',
    );
  }
}

