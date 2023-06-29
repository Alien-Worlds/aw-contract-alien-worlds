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
 * @typedef {Object} CreateMongoModel
 */
export type CreateMongoModel = {
  _id?: MongoDB.ObjectId;
  issuer?: string;
  maximum_supply?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CreateRawModel
 */
export type CreateRawModel = {
  issuer?: string;
  maximum_supply?: AssetRawModel;
  [key: string]: unknown;
};

