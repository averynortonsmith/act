import { h, render } from "https://esm.sh/preact@10.25.2";
import { signal } from "https://esm.sh/@preact/signals@2.0.0";
import htm from "https://esm.sh/htm@3.1.1";

export const html = htm.bind(h);

const ticks = signal(0);

export function mount(app, parent) {
  function Container() {
    ticks.value;
    return app();
  }

  render(h(Container), parent);
  return () => ticks.value++;
}
