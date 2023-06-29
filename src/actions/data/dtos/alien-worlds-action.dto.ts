/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { AddvestingMongoModel } from './addvesting.dto';
import { BurnMongoModel } from './burn.dto';
import { CloseMongoModel } from './close.dto';
import { CreateMongoModel } from './create.dto';
import { IssueMongoModel } from './issue.dto';
import { OpenMongoModel } from './open.dto';
import { TransferMongoModel } from './transfer.dto';

export type DataDocumentType =
  | AddvestingMongoModel
  | BurnMongoModel
  | CloseMongoModel
  | CreateMongoModel
  | IssueMongoModel
  | OpenMongoModel
  | TransferMongoModel;

export type AlienWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_number?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  receiver_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

