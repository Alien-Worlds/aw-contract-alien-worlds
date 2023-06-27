/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 16:58:18 GMT
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

