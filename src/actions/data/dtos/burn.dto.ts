/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:49:23 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} BurnMongoModel
 */
export type BurnMongoModel = {
  _id?: MongoDB.ObjectId;
  from?: string;
  quantity?: AssetMongoModel;
  memo?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} BurnRawModel
 */
export type BurnRawModel = {
  from?: string;
  quantity?: AssetRawModel;
  memo?: string;
  [key: string]: unknown;
};

