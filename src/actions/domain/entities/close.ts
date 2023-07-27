/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Symbol } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Close` object.
 *
 * @class
 */
export class Close implements Entity {
  /**
   * Constructs a new instance of the `Close` class.
   *
   * @public
   * @constructor
   * @param string owner
   * @param Symbol symbol
   * @param string [id]
   * @returns `Close` - An instance of the `Close` class.
   */
  public constructor(
    public owner: string,
    public symbol: Symbol,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Close` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      owner: this.owner,
      symbol: this.symbol,
    };
  }

  /**
   * Creates an instance of the `Close` class.
   *
   * @static
   * @public
   * @param string owner
   * @param Symbol symbol
   * @returns `Close` An instance of the `Close` class.
   */
  public static create(
    owner: string,
    symbol: Symbol,
    id?: string,
    rest?: UnknownObject
  ): Close {
    const entity = new Close(
      owner,
      symbol,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Close {
    return new Close(
      '',
      Symbol.getDefault(),
    );
  }
}

