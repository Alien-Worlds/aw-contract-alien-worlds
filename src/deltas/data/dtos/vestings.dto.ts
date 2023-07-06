/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:17:06 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} VestingsMongoModel
 */
export type VestingsMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  vesting_start?: Date;
  vesting_length?: number;
  vesting_quantity?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} VestingsRawModel
 */
export type VestingsRawModel = {
  account?: string;
  vesting_start?: Date;
  vesting_length?: number;
  vesting_quantity?: AssetRawModel;
  [key: string]: unknown;
};

