/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 17 Jul 2023 08:04:38 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/alien-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/alien-worlds-delta';

/**
 * @description This abstract class represents a repository for `alien.worlds` contract deltas.
 */
@injectable()
export abstract class AlienWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'ALIEN_WORLDS_DELTA_REPOSITORY';
}
