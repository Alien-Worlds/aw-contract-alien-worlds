/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

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

