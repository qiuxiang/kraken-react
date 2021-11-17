import { defineComponent } from "vue";
import useStore from "./store";

export default defineComponent({
  setup() {
    return { state: useStore() };
  },
  render() {
    const { state } = this;
    return (
      <div style={{ padding: "16px" }}>
        <div>{state.count}</div>
        <button onClick={state.add}>Add</button>
      </div>
    );
  },
});
