/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:14 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Vestings  } from "../../domain/entities";
import { VestingsMongoModel, VestingsRawModel  } from "../dtos/vestings.dto";

// Mongo Mappers
export class VestingsMongoMapper
  extends MapperImpl<Vestings, VestingsMongoModel>
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

  public toEntity(mongoModel: VestingsMongoModel): Vestings {
    const { 
      account,
      vesting_start,
      vesting_length,
      vesting_quantity,
      _id, 
      ...rest
    } = mongoModel;

    return Vestings.create(
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
export class VestingsRawMapper
  extends MapperImpl<Vestings, VestingsRawModel>
{
  public fromEntity(entity: Vestings): VestingsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VestingsRawModel): Vestings {
    const { 
      account,
      vesting_start,
      vesting_length,
      vesting_quantity,
      ...rest
    } = rawModel;

    return Vestings.create(
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

