/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} TransferMongoModel
 */
export type TransferMongoModel = {
  _id?: MongoDB.ObjectId;
  from?: string;
  to?: string;
  quantity?: AssetMongoModel;
  memo?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} TransferRawModel
 */
export type TransferRawModel = {
  from?: string;
  to?: string;
  quantity?: AssetRawModel;
  memo?: string;
  [key: string]: unknown;
};

