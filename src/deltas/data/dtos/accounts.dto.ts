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
 * @typedef {Object} AccountsMongoModel
 */
export type AccountsMongoModel = {
  _id?: MongoDB.ObjectId;
  balance?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} AccountsRawModel
 */
export type AccountsRawModel = {
  balance?: AssetRawModel;
  [key: string]: unknown;
};

