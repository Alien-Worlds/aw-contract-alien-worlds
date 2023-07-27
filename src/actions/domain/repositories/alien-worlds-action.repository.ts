/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

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
