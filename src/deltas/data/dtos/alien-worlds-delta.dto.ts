/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { AccountsMongoModel, AccountsRawModel } from './accounts.dto';
import { StatMongoModel, StatRawModel } from './stat.dto';
import { VestingsMongoModel, VestingsRawModel } from './vestings.dto';

export type DataDocumentType =
  | AccountsMongoModel
  | StatMongoModel
  | VestingsMongoModel;

export type DataRawType =
  | AccountsRawModel
  | StatRawModel
  | VestingsRawModel;


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

export type AlienWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
