/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:49:23 GMT
 */


import { 
  Addvesting,
  Burn,
  Close,
  Create,
  Issue,
  Open,
  Transfer,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/api-core';

import { AddvestingMongoMapper, AddvestingRawMapper } from "./addvesting.mapper";
import { BurnMongoMapper, BurnRawMapper } from "./burn.mapper";
import { CloseMongoMapper, CloseRawMapper } from "./close.mapper";
import { CreateMongoMapper, CreateRawMapper } from "./create.mapper";
import { IssueMongoMapper, IssueRawMapper } from "./issue.mapper";
import { OpenMongoMapper, OpenRawMapper } from "./open.mapper";
import { TransferMongoMapper, TransferRawMapper } from "./transfer.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/alien-worlds-action';
import { 
  AlienWorldsActionMongoModel,
  AlienWorldsActionRawModel,
  AddvestingMongoModel,
  AddvestingRawModel,
  BurnMongoModel,
  BurnRawModel,
  CloseMongoModel,
  CloseRawModel,
  CreateMongoModel,
  CreateRawModel,
  IssueMongoModel,
  IssueRawModel,
  OpenMongoModel,
  OpenRawModel,
  TransferMongoModel,
  TransferRawModel,
} from '../dtos';
import { AlienWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class AlienWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType, AlienWorldsActionMongoModel>, AlienWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType, AlienWorldsActionMongoModel>
  ): AlienWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case AlienWorldsActionName.Addvesting:
        entityData = new AddvestingMongoMapper().fromEntity(
          entity.data as Addvesting
        );
        break;
      case AlienWorldsActionName.Burn:
        entityData = new BurnMongoMapper().fromEntity(
          entity.data as Burn
        );
        break;
      case AlienWorldsActionName.Close:
        entityData = new CloseMongoMapper().fromEntity(
          entity.data as Close
        );
        break;
      case AlienWorldsActionName.Create:
        entityData = new CreateMongoMapper().fromEntity(
          entity.data as Create
        );
        break;
      case AlienWorldsActionName.Issue:
        entityData = new IssueMongoMapper().fromEntity(
          entity.data as Issue
        );
        break;
      case AlienWorldsActionName.Open:
        entityData = new OpenMongoMapper().fromEntity(
          entity.data as Open
        );
        break;
      case AlienWorldsActionName.Transfer:
        entityData = new TransferMongoMapper().fromEntity(
          entity.data as Transfer
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: AlienWorldsActionMongoModel
  ): ContractAction<DataEntityType, AlienWorldsActionMongoModel> {
    let data;
    switch (mongoModel.action.name) {
      case AlienWorldsActionName.Addvesting:
        data = new AddvestingMongoMapper().toEntity(
          mongoModel.action.data as AddvestingMongoModel
        );
        break;
      case AlienWorldsActionName.Burn:
        data = new BurnMongoMapper().toEntity(
          mongoModel.action.data as BurnMongoModel
        );
        break;
      case AlienWorldsActionName.Close:
        data = new CloseMongoMapper().toEntity(
          mongoModel.action.data as CloseMongoModel
        );
        break;
      case AlienWorldsActionName.Create:
        data = new CreateMongoMapper().toEntity(
          mongoModel.action.data as CreateMongoModel
        );
        break;
      case AlienWorldsActionName.Issue:
        data = new IssueMongoMapper().toEntity(
          mongoModel.action.data as IssueMongoModel
        );
        break;
      case AlienWorldsActionName.Open:
        data = new OpenMongoMapper().toEntity(
          mongoModel.action.data as OpenMongoModel
        );
        break;
      case AlienWorldsActionName.Transfer:
        data = new TransferMongoMapper().toEntity(
          mongoModel.action.data as TransferMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType, AlienWorldsActionMongoModel>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class AlienWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, AlienWorldsActionRawModel>,
  AlienWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, AlienWorldsActionRawModel>
  ): AlienWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: AlienWorldsActionRawModel
  ): ContractAction<DataEntityType, AlienWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case AlienWorldsActionName.Addvesting:
        data = new AddvestingRawMapper().toEntity(
          rawModel.data as AddvestingRawModel
        );
        break;
      case AlienWorldsActionName.Burn:
        data = new BurnRawMapper().toEntity(
          rawModel.data as BurnRawModel
        );
        break;
      case AlienWorldsActionName.Close:
        data = new CloseRawMapper().toEntity(
          rawModel.data as CloseRawModel
        );
        break;
      case AlienWorldsActionName.Create:
        data = new CreateRawMapper().toEntity(
          rawModel.data as CreateRawModel
        );
        break;
      case AlienWorldsActionName.Issue:
        data = new IssueRawMapper().toEntity(
          rawModel.data as IssueRawModel
        );
        break;
      case AlienWorldsActionName.Open:
        data = new OpenRawMapper().toEntity(
          rawModel.data as OpenRawModel
        );
        break;
      case AlienWorldsActionName.Transfer:
        data = new TransferRawMapper().toEntity(
          rawModel.data as TransferRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, AlienWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
