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
import { Create  } from "../../domain/entities";
import { CreateMongoModel, CreateRawModel  } from "../dtos/create.dto";

// Mongo Mappers
export class CreateMongoMapper
  extends MapperImpl<Create, CreateMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('issuer', { 
      key: 'issuer', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('maximumSupply', { 
      key: 'maximum_supply', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

  }

  public toEntity(mongoModel: CreateMongoModel): Create {
    const { 
      issuer,
      maximum_supply,
      _id, 
      ...rest
    } = mongoModel;

    return Create.create(
        issuer ?? '',
        maximum_supply 
          ? new AssetMongoMapper().toEntity(maximum_supply)
          : Asset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CreateRawMapper
  extends MapperImpl<Create, CreateRawModel>
{
  public fromEntity(entity: Create): CreateRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CreateRawModel): Create {
    const { 
      issuer,
      maximum_supply,
      ...rest
    } = rawModel;

    return Create.create(
        issuer ?? '',
        maximum_supply 
          ? new AssetRawMapper().toEntity(maximum_supply)
          : Asset.getDefault(),
      undefined,
      rest
    );
  }
}

