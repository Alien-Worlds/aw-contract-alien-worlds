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
import { Accounts  } from "../../domain/entities";
import { AccountsMongoModel, AccountsRawModel  } from "../dtos/accounts.dto";

// Mongo Mappers
export class AccountsMongoMapper
  extends MapperImpl<Accounts, AccountsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('balance', { 
      key: 'balance', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

  }

  public toEntity(mongoModel: AccountsMongoModel): Accounts {
    const { 
      balance,
      _id, 
      ...rest
    } = mongoModel;

    return Accounts.create(
        balance 
          ? new AssetMongoMapper().toEntity(balance)
          : Asset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class AccountsRawMapper
  extends MapperImpl<Accounts, AccountsRawModel>
{
  public fromEntity(entity: Accounts): AccountsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: AccountsRawModel): Accounts {
    const { 
      balance,
      ...rest
    } = rawModel;

    return Accounts.create(
        balance 
          ? new AssetRawMapper().toEntity(balance)
          : Asset.getDefault(),
      undefined,
      rest
    );
  }
}

