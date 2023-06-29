/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:24 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Stat` object.
 *
 * @class
 */
export class Stat implements Entity {
  /**
   * Constructs a new instance of the `Stat` class.
   *
   * @public
   * @constructor
   * @param Asset supply
   * @param Asset maxSupply
   * @param string issuer
   * @param string [id]
   * @returns `Stat` - An instance of the `Stat` class.
   */
  public constructor(
    public supply: Asset,
    public maxSupply: Asset,
    public issuer: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Stat` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      supply: this.supply,
      maxSupply: this.maxSupply,
      issuer: this.issuer,
    };
  }

  /**
   * Creates an instance of the `Stat` class.
   *
   * @static
   * @public
   * @returns `Stat` An instance of the `Stat` class.
   */
  public static create(
    supply: Asset,
    maxSupply: Asset,
    issuer: string,
    id?: string,
    rest?: UnknownObject
  ): Stat {
    const entity = new Stat(
      supply,
      maxSupply,
      issuer,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Stat {
    return new Stat(
      Asset.getDefault(),
      Asset.getDefault(),
      '',
    );
  }
}

