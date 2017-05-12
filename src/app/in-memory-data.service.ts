import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let players = [
      {id: 1, name: 'Kevin', startLife: 20},
      {id: 2, name: 'Brandt', startLife: 20}
    ];
    return {players};
  }
}
