/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:24 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Addvesting  } from "../../domain/entities";
import { AddvestingMongoModel, AddvestingRawModel  } from "../dtos/addvesting.dto";

// Mongo Mappers
export class AddvestingMongoMapper
  extends MapperImpl<Addvesting, AddvestingMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('vestingStart', { 
      key: 'vesting_start', 
      mapper: (value: Date) => 
        value,
    });

    this.mappingFromEntity.set('vestingLength', { 
      key: 'vesting_length', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('vestingQuantity', { 
      key: 'vesting_quantity', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

  }

  public toEntity(mongoModel: AddvestingMongoModel): Addvesting {
    const { 
      account,
      vesting_start,
      vesting_length,
      vesting_quantity,
      _id, 
      ...rest
    } = mongoModel;

    return Addvesting.create(
        account ?? '',
        vesting_start ?? new Date(0),
        vesting_length ?? 0,
        vesting_quantity 
          ? new AssetMongoMapper().toEntity(vesting_quantity)
          : Asset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class AddvestingRawMapper
  extends MapperImpl<Addvesting, AddvestingRawModel>
{
  public fromEntity(entity: Addvesting): AddvestingRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: AddvestingRawModel): Addvesting {
    const { 
      account,
      vesting_start,
      vesting_length,
      vesting_quantity,
      ...rest
    } = rawModel;

    return Addvesting.create(
        account ?? '',
        vesting_start ?? new Date(0),
        vesting_length ?? 0,
        vesting_quantity 
          ? new AssetRawMapper().toEntity(vesting_quantity)
          : Asset.getDefault(),
      undefined,
      rest
    );
  }
}

