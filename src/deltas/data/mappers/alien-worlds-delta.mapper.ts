/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:23 GMT
 */


import { 
  Accounts,
  Stat,
  Vestings,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/alien-worlds-delta';
import { AlienWorldsDeltaMongoModel } from '../dtos';
import { AlienWorldsTableName } from '../../domain/enums';
import { AccountsMongoMapper } from "./accounts.mapper";
import { StatMongoMapper } from "./stat.mapper";
import { VestingsMongoMapper } from "./vestings.mapper";

export class AlienWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType, AlienWorldsDeltaMongoModel>, AlienWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType, AlienWorldsDeltaMongoModel>
  ): AlienWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case AlienWorldsTableName.Accounts:
        entityData = new AccountsMongoMapper().fromEntity(entity.delta as Accounts);
        break;
      case AlienWorldsTableName.Stat:
        entityData = new StatMongoMapper().fromEntity(entity.delta as Stat);
        break;
      case AlienWorldsTableName.Vestings:
        entityData = new VestingsMongoMapper().fromEntity(entity.delta as Vestings);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data_hash: entity.deltaHash,
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
      data_hash,
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
      data_hash,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}