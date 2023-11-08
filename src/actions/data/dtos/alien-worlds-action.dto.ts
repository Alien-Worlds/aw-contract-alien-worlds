/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { AddvestingMongoModel, AddvestingRawModel } from './addvesting.dto';
import { BurnMongoModel, BurnRawModel } from './burn.dto';
import { CloseMongoModel, CloseRawModel } from './close.dto';
import { CreateMongoModel, CreateRawModel } from './create.dto';
import { IssueMongoModel, IssueRawModel } from './issue.dto';
import { OpenMongoModel, OpenRawModel } from './open.dto';
import { TransferMongoModel, TransferRawModel } from './transfer.dto';

export type DataDocumentType =
  | AddvestingMongoModel
  | BurnMongoModel
  | CloseMongoModel
  | CreateMongoModel
  | IssueMongoModel
  | OpenMongoModel
  | TransferMongoModel;

export type DataRawType =
  | AddvestingRawModel
  | BurnRawModel
  | CloseRawModel
  | CreateRawModel
  | IssueRawModel
  | OpenRawModel
  | TransferRawModel;

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

export type AlienWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_number: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};

