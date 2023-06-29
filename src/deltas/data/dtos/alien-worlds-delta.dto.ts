/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:24 GMT
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
