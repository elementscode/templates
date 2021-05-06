import {
  NotAuthorizedError,
  NotFoundError,
  NotAcceptableError,
  sql,
  DbPool,
  SqlResult,
} from '@elements/application';

export async function getHelloWorld(): Promise<string> {
  return 'Hello, world.';
}
