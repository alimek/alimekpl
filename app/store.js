import { observable } from 'mobx';

class AppStore {
  constructor() {
    this.hashTags = observable([]);
  }
}

export default new AppStore();
