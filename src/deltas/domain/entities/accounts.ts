/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 17 Jul 2023 08:04:38 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Accounts` object.
 *
 * @class
 */
export class Accounts implements Entity {
  /**
   * Constructs a new instance of the `Accounts` class.
   *
   * @public
   * @constructor
   * @param Asset balance
   * @param string [id]
   * @returns `Accounts` - An instance of the `Accounts` class.
   */
  public constructor(
    public balance: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Accounts` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      balance: this.balance,
    };
  }

  /**
   * Creates an instance of the `Accounts` class.
   *
   * @static
   * @public
   * @param Asset balance
   * @returns `Accounts` An instance of the `Accounts` class.
   */
  public static create(
    balance: Asset,
    id?: string,
    rest?: UnknownObject
  ): Accounts {
    const entity = new Accounts(
      balance,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Accounts {
    return new Accounts(
      Asset.getDefault(),
    );
  }
}

