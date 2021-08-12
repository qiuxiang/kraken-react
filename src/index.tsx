import { createApp, Fragment, h } from "vue";

Reflect.set(window, "h", h);
Reflect.set(window, "f", Fragment);

if (!document.createEvent) {
  Reflect.set(document, "createEvent", () => new Event(null));
}

const app = createApp({
  render() {
    return <div style={{ padding: "16px" }}>hello</div>;
  },
});

app.mount(document.body);
