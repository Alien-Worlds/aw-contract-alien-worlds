/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:17:06 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { AccountsMongoModel } from './accounts.dto';
import { StatMongoModel } from './stat.dto';
import { VestingsMongoModel } from './vestings.dto';

export type DataDocumentType =
  | AccountsMongoModel
  | StatMongoModel
  | VestingsMongoModel;


export type AlienWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};
