/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/aw-antelope';

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

