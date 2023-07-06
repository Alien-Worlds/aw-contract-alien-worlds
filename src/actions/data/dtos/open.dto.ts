/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:17:05 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { SymbolMongoModel, SymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} OpenMongoModel
 */
export type OpenMongoModel = {
  _id?: MongoDB.ObjectId;
  owner?: string;
  symbol?: SymbolMongoModel;
  ram_payer?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} OpenRawModel
 */
export type OpenRawModel = {
  owner?: string;
  symbol?: SymbolRawModel;
  ram_payer?: string;
  [key: string]: unknown;
};

