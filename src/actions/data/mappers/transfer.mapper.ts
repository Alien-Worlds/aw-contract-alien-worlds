/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:17:06 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Transfer  } from "../../domain/entities";
import { TransferMongoModel, TransferRawModel  } from "../dtos/transfer.dto";

// Mongo Mappers
export class TransferMongoMapper
  extends MapperImpl<Transfer, TransferMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('from', { 
      key: 'from', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('to', { 
      key: 'to', 
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

  public toEntity(mongoModel: TransferMongoModel): Transfer {
    const { 
      from,
      to,
      quantity,
      memo,
      _id, 
      ...rest
    } = mongoModel;

    return Transfer.create(
        from ?? '',
        to ?? '',
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
export class TransferRawMapper
  extends MapperImpl<Transfer, TransferRawModel>
{
  public fromEntity(entity: Transfer): TransferRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: TransferRawModel): Transfer {
    const { 
      from,
      to,
      quantity,
      memo,
      ...rest
    } = rawModel;

    return Transfer.create(
        from ?? '',
        to ?? '',
        quantity 
          ? new AssetRawMapper().toEntity(quantity)
          : Asset.getDefault(),
        memo ?? '',
      undefined,
      rest
    );
  }
}

