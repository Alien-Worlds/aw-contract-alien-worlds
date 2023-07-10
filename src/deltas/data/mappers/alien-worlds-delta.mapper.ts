/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */


import { 
  Accounts,
  Stat,
  Vestings,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/alien-worlds-delta';
import { AlienWorldsDeltaMongoModel, AlienWorldsDeltaRawModel } from '../dtos';
import { AlienWorldsTableName } from '../../domain/enums';
import { AccountsMongoMapper, AccountsRawMapper } from "./accounts.mapper";
import { StatMongoMapper, StatRawMapper } from "./stat.mapper";
import { VestingsMongoMapper, VestingsRawMapper } from "./vestings.mapper";

// Mongo Mapper
export class AlienWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType, AlienWorldsDeltaMongoModel>, AlienWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType, AlienWorldsDeltaMongoModel>
  ): AlienWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case AlienWorldsTableName.Accounts:
        entityData = new AccountsMongoMapper().fromEntity(
          entity.data as Accounts
        );
        break;
      case AlienWorldsTableName.Stat:
        entityData = new StatMongoMapper().fromEntity(
          entity.data as Stat
        );
        break;
      case AlienWorldsTableName.Vestings:
        entityData = new VestingsMongoMapper().fromEntity(
          entity.data as Vestings
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: AlienWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType, AlienWorldsDeltaMongoModel> {
    let data;
    switch (mongoModel.table) {
      case AlienWorldsTableName.Accounts:
        data = new AccountsMongoMapper().toEntity(mongoModel.data);
        break;
      case AlienWorldsTableName.Stat:
        data = new StatMongoMapper().toEntity(mongoModel.data);
        break;
      case AlienWorldsTableName.Vestings:
        data = new VestingsMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType, AlienWorldsDeltaMongoModel>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class AlienWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, AlienWorldsDeltaRawModel>, 
    AlienWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, AlienWorldsDeltaRawModel>
  ): AlienWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: AlienWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, AlienWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case AlienWorldsTableName.Accounts:
        data = new AccountsRawMapper().toEntity(rawModel.data);
        break;
      case AlienWorldsTableName.Stat:
        data = new StatRawMapper().toEntity(rawModel.data);
        break;
      case AlienWorldsTableName.Vestings:
        data = new VestingsRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, AlienWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}