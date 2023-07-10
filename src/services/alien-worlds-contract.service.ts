/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/api-core';

import { 
  AccountsRawModel,
  StatRawModel,
  VestingsRawModel,
} from '../deltas/data/dtos';

export abstract class AlienWorldsContractService extends SmartContractService {
  public static Token = 'ALIEN_WORLDS_CONTRACT_SERVICE';

  public abstract fetchAccounts(
    options?: GetTableRowsOptions
  ): Promise<Result<AccountsRawModel[], Error>>;
  public abstract fetchStat(
    options?: GetTableRowsOptions
  ): Promise<Result<StatRawModel[], Error>>;
  public abstract fetchVestings(
    options?: GetTableRowsOptions
  ): Promise<Result<VestingsRawModel[], Error>>;
}
