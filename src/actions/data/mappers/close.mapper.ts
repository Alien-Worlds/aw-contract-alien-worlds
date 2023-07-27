/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/aw-antelope';
import { Close  } from "../../domain/entities";
import { CloseMongoModel, CloseRawModel  } from "../dtos/close.dto";

// Mongo Mappers
export class CloseMongoMapper
  extends MongoMapper<Close, CloseMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('owner', { 
      key: 'owner', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('symbol', { 
      key: 'symbol', 
      mapper: (value: Symbol) => new SymbolMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: CloseMongoModel): Close {
    const { 
      owner,
      symbol,
      _id,
      ...rest
    } = mongoModel;

    return Close.create(
      owner || '',
      symbol ? new SymbolMongoMapper().toEntity(symbol) : Symbol.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CloseRawMapper
  extends MapperImpl<Close, CloseRawModel>
{
  public fromEntity(entity: Close): CloseRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CloseRawModel): Close {
    const { 
      owner,
      symbol,
      ...rest
    } = rawModel;

    return Close.create(
      owner || '',
      symbol ? new SymbolRawMapper().toEntity(symbol) : Symbol.getDefault(),
      undefined,
      rest
    );
  }
}

