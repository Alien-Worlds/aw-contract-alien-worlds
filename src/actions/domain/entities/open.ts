/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Symbol } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Open` object.
 *
 * @class
 */
export class Open implements Entity {
  /**
   * Constructs a new instance of the `Open` class.
   *
   * @public
   * @constructor
   * @param string owner
   * @param Symbol symbol
   * @param string ramPayer
   * @param string [id]
   * @returns `Open` - An instance of the `Open` class.
   */
  public constructor(
    public owner: string,
    public symbol: Symbol,
    public ramPayer: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Open` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      owner: this.owner,
      symbol: this.symbol,
      ramPayer: this.ramPayer,
    };
  }

  /**
   * Creates an instance of the `Open` class.
   *
   * @static
   * @public
   * @returns `Open` An instance of the `Open` class.
   */
  public static create(
    owner: string,
    symbol: Symbol,
    ramPayer: string,
    id?: string,
    rest?: UnknownObject
  ): Open {
    const entity = new Open(
      owner,
      symbol,
      ramPayer,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Open {
    return new Open(
      '',
      Symbol.getDefault(),
      '',
    );
  }
}

