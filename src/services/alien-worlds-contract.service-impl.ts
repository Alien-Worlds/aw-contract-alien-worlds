/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:14 GMT
 */

import { 
  AccountsRawModel,
  StatRawModel,
  VestingsRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { AlienWorldsContractService } from './alien-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

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
  public async fetchAccounts (
    options?: GetTableRowsOptions
  ): Promise<Result<AccountsRawModel[], Error>> {
    return await this.getAll<AccountsRawModel>('balance', {
      ...options,
      code: 'alien.worlds',
      table: 'accounts',
      table_key: 'balance',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the stat table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchStat (
    options?: GetTableRowsOptions
  ): Promise<Result<StatRawModel[], Error>> {
    return await this.getAll<StatRawModel>('supply', {
      ...options,
      code: 'alien.worlds',
      table: 'stat',
      table_key: 'supply',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the vestings table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchVestings (
    options?: GetTableRowsOptions
  ): Promise<Result<VestingsRawModel[], Error>> {
    return await this.getAll<VestingsRawModel>('account', {
      ...options,
      code: 'alien.worlds',
      table: 'vestings',
      table_key: 'account',
    });
  }

}
