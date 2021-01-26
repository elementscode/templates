import {
  NotAuthorizedError,
  NotFoundError,
  NotAcceptableError,
  sql,
  DbPool,
  SqlResult,
} from '@elements/application';

export interface IData {
  [key: string]: any;
}

export async function getData(): Promise<IData> {
  return { hello: 'world' };
}
