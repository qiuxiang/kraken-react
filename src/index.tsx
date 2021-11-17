import { createApp, Fragment, h } from "vue";
import Main from "./main";

Reflect.set(window, "h", h);
Reflect.set(window, "f", Fragment);

const app = createApp({
  render() {
    return <Main />;
  },
});

app.mount(document.body);
