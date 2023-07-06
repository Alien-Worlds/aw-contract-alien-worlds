/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:49:23 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { SymbolMongoModel, SymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CloseMongoModel
 */
export type CloseMongoModel = {
  _id?: MongoDB.ObjectId;
  owner?: string;
  symbol?: SymbolMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CloseRawModel
 */
export type CloseRawModel = {
  owner?: string;
  symbol?: SymbolRawModel;
  [key: string]: unknown;
};

