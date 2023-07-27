/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:09:06 GMT
 */

import { 
  AccountsRawModel,
  StatRawModel,
  VestingsRawModel,
} from '../deltas/data/dtos';
import { 
  AntelopeRpcSourceImpl,
  AntelopeSmartContractServiceImpl,
} from '@alien-worlds/aw-antelope';

import { AlienWorldsContractService } from './alien-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/aw-core';

/**
 * A service class for interacting with the alien.worlds smart contract.
 * 
 * @class AlienWorldsContractServiceImpl
 * @extends {AntelopeSmartContractServiceImpl}
 * @implements { AlienWorldsContractService}
*/
export class AlienWorldsContractServiceImpl
  extends AntelopeSmartContractServiceImpl
  implements AlienWorldsContractService 
{
  /**
   * Creates an instance of AlienWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {AntelopeRpcSourceImpl} antelopeRpcSourceImpl - The Antelope RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(antelopeRpcSourceImpl: AntelopeRpcSourceImpl, serviceUrl: string) {
    super(antelopeRpcSourceImpl, serviceUrl, 'alien.worlds');
  }

  /**
   * An AntelopeSmartContractServiceImpl for the accounts table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchAccounts (
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
   * An AntelopeSmartContractServiceImpl for the stat table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchStat (
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
   * An AntelopeSmartContractServiceImpl for the vestings table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchVestings (
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
