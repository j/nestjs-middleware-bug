import { Resolver, Query } from '@nestjs/graphql';
import { Cat } from './cat.model';

@Resolver(() => Cat)
export class CatResolver {
  @Query(() => Cat)
  cat() {
    return Object.assign(new Cat(), { id: 1, name: 'Meows' })
  }
}
