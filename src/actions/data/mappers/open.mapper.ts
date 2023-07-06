/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:49:23 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/eosio-contract-types';
import { Open  } from "../../domain/entities";
import { OpenMongoModel, OpenRawModel  } from "../dtos/open.dto";

// Mongo Mappers
export class OpenMongoMapper
  extends MapperImpl<Open, OpenMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('owner', { 
      key: 'owner', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('symbol', { 
      key: 'symbol', 
      mapper: (value: Symbol) => 
           new SymbolMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('ramPayer', { 
      key: 'ram_payer', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: OpenMongoModel): Open {
    const { 
      owner,
      symbol,
      ram_payer,
      _id, 
      ...rest
    } = mongoModel;

    return Open.create(
        owner ?? '',
        symbol 
          ? new SymbolMongoMapper().toEntity(symbol)
          : Symbol.getDefault(),
        ram_payer ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class OpenRawMapper
  extends MapperImpl<Open, OpenRawModel>
{
  public fromEntity(entity: Open): OpenRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: OpenRawModel): Open {
    const { 
      owner,
      symbol,
      ram_payer,
      ...rest
    } = rawModel;

    return Open.create(
        owner ?? '',
        symbol 
          ? new SymbolRawMapper().toEntity(symbol)
          : Symbol.getDefault(),
        ram_payer ?? '',
      undefined,
      rest
    );
  }
}

