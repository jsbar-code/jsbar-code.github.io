document.head.append(
  Object.assign(document.createElement("script"), {
    src: "//cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js",
    onload: () => {
      customElements.define(
        "jsbar-code",
        class extends HTMLElement {
          connectedCallback() {
            this.attachShadow({ mode: "open" }).innerHTML = `<svg/>`;
            JsBarcode(
              this.shadowRoot.querySelector("svg"),
              this.getAttribute("value"),
              { // default options
                format: this.getAttribute("format") || "CODE128",
                displayValue: this.getAttribute("displayValue") != "0",
                height: Number(this.getAttribute("height") || 24),
                width: Number(this.getAttribute("width") || 1),
                fontSize: Number(this.getAttribute("fontSize") || 16),
                lineColor: this.getAttribute("lineColor") || "black",
              }
            );
          }
        }
      );
    },
  })
);
