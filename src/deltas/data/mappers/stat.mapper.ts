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
import { Stat  } from "../../domain/entities";
import { StatMongoModel, StatRawModel  } from "../dtos/stat.dto";

// Mongo Mappers
export class StatMongoMapper
  extends MapperImpl<Stat, StatMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('supply', { 
      key: 'supply', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('maxSupply', { 
      key: 'max_supply', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('issuer', { 
      key: 'issuer', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: StatMongoModel): Stat {
    const { 
      supply,
      max_supply,
      issuer,
      _id, 
      ...rest
    } = mongoModel;

    return Stat.create(
        supply 
          ? new AssetMongoMapper().toEntity(supply)
          : Asset.getDefault(),
        max_supply 
          ? new AssetMongoMapper().toEntity(max_supply)
          : Asset.getDefault(),
        issuer ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StatRawMapper
  extends MapperImpl<Stat, StatRawModel>
{
  public fromEntity(entity: Stat): StatRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StatRawModel): Stat {
    const { 
      supply,
      max_supply,
      issuer,
      ...rest
    } = rawModel;

    return Stat.create(
        supply 
          ? new AssetRawMapper().toEntity(supply)
          : Asset.getDefault(),
        max_supply 
          ? new AssetRawMapper().toEntity(max_supply)
          : Asset.getDefault(),
        issuer ?? '',
      undefined,
      rest
    );
  }
}

