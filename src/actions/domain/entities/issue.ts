/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:17:06 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Issue` object.
 *
 * @class
 */
export class Issue implements Entity {
  /**
   * Constructs a new instance of the `Issue` class.
   *
   * @public
   * @constructor
   * @param string to
   * @param Asset quantity
   * @param string memo
   * @param string [id]
   * @returns `Issue` - An instance of the `Issue` class.
   */
  public constructor(
    public to: string,
    public quantity: Asset,
    public memo: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Issue` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      to: this.to,
      quantity: this.quantity,
      memo: this.memo,
    };
  }

  /**
   * Creates an instance of the `Issue` class.
   *
   * @static
   * @public
   * @returns `Issue` An instance of the `Issue` class.
   */
  public static create(
    to: string,
    quantity: Asset,
    memo: string,
    id?: string,
    rest?: UnknownObject
  ): Issue {
    const entity = new Issue(
      to,
      quantity,
      memo,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Issue {
    return new Issue(
      '',
      Asset.getDefault(),
      '',
    );
  }
}

