/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:49:23 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/alien-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/alien-worlds-action';

/**
 * @description This abstract class represents a repository for `alien.worlds` contract actions.
 */
@injectable()
export abstract class AlienWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'ALIEN_WORLDS_ACTION_REPOSITORY';
}
