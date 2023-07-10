import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';
import {
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */

import {
  AccountsRawModel,
  StatRawModel,
  VestingsRawModel,
} from '../deltas/data/dtos';
import { AlienWorldsContractService } from './alien-worlds-contract.service';

/**
 * A service class for interacting with the alien.worlds smart contract.
 *
 * @class AlienWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { AlienWorldsContractService}
 */
export class AlienWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements AlienWorldsContractService
{
  /**
   * Creates an instance of AlienWorldsContractServiceImpl.
   *
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'alien.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the accounts table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchAccounts(
    options?: GetTableRowsOptions
  ): Promise<Result<AccountsRawModel[], Error>> {
    const table_key = '';
    const tableRowOptions = {
      ...options,
      code: 'alien.worlds',
      table: 'accounts',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<AccountsRawModel>(tableRowOptions)
      : await this.getAll<AccountsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the stat table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchStat(
    options?: GetTableRowsOptions
  ): Promise<Result<StatRawModel[], Error>> {
    const table_key = 'supply';
    const tableRowOptions = {
      ...options,
      code: 'alien.worlds',
      table: 'stat',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<StatRawModel>(tableRowOptions)
      : await this.getAll<StatRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the vestings table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchVestings(
    options?: GetTableRowsOptions
  ): Promise<Result<VestingsRawModel[], Error>> {
    const table_key = 'account';
    const tableRowOptions = {
      ...options,
      code: 'alien.worlds',
      table: 'vestings',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<VestingsRawModel>(tableRowOptions)
      : await this.getAll<VestingsRawModel>(table_key, tableRowOptions);
  }
}
