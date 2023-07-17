/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 17 Jul 2023 08:04:38 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Create` object.
 *
 * @class
 */
export class Create implements Entity {
  /**
   * Constructs a new instance of the `Create` class.
   *
   * @public
   * @constructor
   * @param string issuer
   * @param Asset maximumSupply
   * @param string [id]
   * @returns `Create` - An instance of the `Create` class.
   */
  public constructor(
    public issuer: string,
    public maximumSupply: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Create` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      issuer: this.issuer,
      maximumSupply: this.maximumSupply,
    };
  }

  /**
   * Creates an instance of the `Create` class.
   *
   * @static
   * @public
   * @param string issuer
   * @param Asset maximumSupply
   * @returns `Create` An instance of the `Create` class.
   */
  public static create(
    issuer: string,
    maximumSupply: Asset,
    id?: string,
    rest?: UnknownObject
  ): Create {
    const entity = new Create(
      issuer,
      maximumSupply,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Create {
    return new Create(
      '',
      Asset.getDefault(),
    );
  }
}

