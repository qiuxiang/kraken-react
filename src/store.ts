import { createGlobalObservable, useLocalObservable } from "mobx-vue-lite";

export default createGlobalObservable(() => {
  return useLocalObservable(() => ({
    count: 0,
    add() {
      this.count += 1;
    },
  }));
});
