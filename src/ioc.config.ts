/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 11:06:28 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/storage-mongodb';

import { AlienWorldsActionMongoMapper } from './actions/data/mappers';
import { AlienWorldsActionMongoSource } from './actions/data/data-sources';
import { AlienWorldsActionRepository } from './actions/domain/repositories';
import { AlienWorldsContractService } from "./services/alien-worlds-contract.service";
import { AlienWorldsContractServiceImpl } from "./services/alien-worlds-contract.service-impl";
import { AlienWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { AlienWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { AlienWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

export const setupAlienWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<AlienWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new AlienWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new AlienWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<AlienWorldsActionRepository>(AlienWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupAlienWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<AlienWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new AlienWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new AlienWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<AlienWorldsDeltaRepository>(AlienWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupAlienWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): AlienWorldsContractService => {
  const service = new AlienWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<AlienWorldsContractService>(AlienWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
