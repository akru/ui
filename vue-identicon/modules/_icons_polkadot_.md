[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["icons/Polkadot"](_icons_polkadot_.md)

# Module: "icons/Polkadot"

## Index

### Variables

* [Polkadot](_icons_polkadot_.md#const-polkadot)

## Variables

### `Const` Polkadot

• **Polkadot**: *VueConstructor‹Data & object & object & Vue‹››* = Vue.extend({
  // eslint-disable-next-line quotes
  template: `<div v-html="svgHtml" />`,
  props: ['address', 'size'],
  data: function (): Data {
    return {
      // eslint-disable-next-line quotes
      svgHtml: `<svg viewBox="0 0 64 64" />`
    };
  },
  created: function (): void {
    this.createSvgHtml();
  },
  methods: {
    createSvgHtml: function (): void {
      const circles = generateIcon(this.address).map(({ cx, cy, fill, r }): string =>
        `<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />`
      ).join('');

      this.svgHtml = `<svg height=${this.size} viewBox='0 0 64 64' width=${this.size}>${circles}</svg>`;
    }
  }
})

*Defined in [icons/Polkadot.ts:16](https://github.com/polkadot-js/ui/blob/44f7e6a4/packages/vue-identicon/src/icons/Polkadot.ts#L16)*

**`name`** Polkadot

**`description`** The Polkadot default identicon
