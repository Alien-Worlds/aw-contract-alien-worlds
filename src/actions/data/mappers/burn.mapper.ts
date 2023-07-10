/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Burn  } from "../../domain/entities";
import { BurnMongoModel, BurnRawModel  } from "../dtos/burn.dto";

// Mongo Mappers
export class BurnMongoMapper
  extends MapperImpl<Burn, BurnMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('from', { 
      key: 'from', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('quantity', { 
      key: 'quantity', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('memo', { 
      key: 'memo', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: BurnMongoModel): Burn {
    const { 
      from,
      quantity,
      memo,
      _id, 
      ...rest
    } = mongoModel;

    return Burn.create(
        from ?? '',
        quantity 
          ? new AssetMongoMapper().toEntity(quantity)
          : Asset.getDefault(),
        memo ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class BurnRawMapper
  extends MapperImpl<Burn, BurnRawModel>
{
  public fromEntity(entity: Burn): BurnRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: BurnRawModel): Burn {
    const { 
      from,
      quantity,
      memo,
      ...rest
    } = rawModel;

    return Burn.create(
        from ?? '',
        quantity 
          ? new AssetRawMapper().toEntity(quantity)
          : Asset.getDefault(),
        memo ?? '',
      undefined,
      rest
    );
  }
}

