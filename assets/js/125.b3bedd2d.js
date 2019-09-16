(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{213:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("strong",[n("router-link",{attrs:{to:"/vue-identicon/"}},[e._v("Polkadot JS UI libraries")])],1)]),e._v(" "),n("p",[n("router-link",{attrs:{to:"/vue-identicon/globals.html"}},[e._v("Globals")]),e._v(" › "),n("router-link",{attrs:{to:"/vue-identicon/modules/_identicon_.html"}},[e._v('"Identicon"')])],1),e._v(" "),n("h1",{attrs:{id:"external-module-identicon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-module-identicon","aria-hidden":"true"}},[e._v("#")]),e._v(' External module: "Identicon"')]),e._v(" "),n("h2",{attrs:{id:"index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[e._v("#")]),e._v(" Index")]),e._v(" "),n("h3",{attrs:{id:"variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/vue-identicon/modules/_identicon_.html#const-identicon"}},[e._v("Identicon")])],1)]),e._v(" "),n("h2",{attrs:{id:"variables-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),n("h3",{attrs:{id:"const-identicon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const-identicon","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("code",[e._v("Const")]),e._v(" Identicon")]),e._v(" "),n("p",[e._v("• "),n("strong",[e._v("Identicon")]),e._v(": "),n("em",[e._v("VueConstructor‹Data & object & object & Vue›")]),e._v(" =  Vue.extend({\n// FIXME These nested divs are not correct, would like a different way\n// here so we don't create a div wrapped for the div wrapper of the icon\ntemplate: "),n("code",[e._v('<div v-if="type === \'empty\' || address === \'\'"> <Empty :key="address" :size="iconSize" /> </div> <div v-else-if="type === \'beachball\'"> <Beachball :key="address" :address="address" :size="iconSize" /> </div> <div v-else-if="type === \'polkadot\'"> <Polkadot :key="address" :address="address" :size="iconSize" /> </div> <div v-else> <Jdenticon :key="address" :publicKey="publicKey" :size="iconSize" /> </div>')]),e._v(",\nprops: ['prefix', 'size', 'theme', 'value'],\ncomponents: {\nBeachball,\nEmpty,\nJdenticon,\nPolkadot\n},\ndata: function (): Data {\nreturn {\naddress: '',\niconSize: DEFAULT_SIZE,\npublicKey: '0x',\ntype: 'empty'\n};\n},\ncreated: function (): void {\nthis.createData();\n},\nmethods: {\ncreateData: function (): void {\nthis.iconSize = this.size || DEFAULT_SIZE;\nthis.type = this.theme;")]),e._v(" "),n("pre",[n("code",[e._v("  this.recodeAddress();\n},\nrecodeAddress: function (): void {\n  const { address, publicKey } = encodeAccount(this.value);\n\n  this.address = address;\n  this.publicKey = publicKey;\n}\n")])]),e._v(" "),n("p",[e._v("},\nwatch: {\nvalue: function (): void {\nthis.recodeAddress();\n}\n}\n})")]),e._v(" "),n("p",[n("em",[e._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/ui/blob/e87647e/packages/vue-identicon/src/Identicon.ts#L48",target:"_blank",rel:"noopener noreferrer"}},[e._v("Identicon.ts:48"),n("OutboundLink")],1)])]),e._v(" "),n("p",[n("strong",[n("code",[e._v("name")])]),e._v(" Identicon")]),e._v(" "),n("p",[n("strong",[n("code",[e._v("description")])]),e._v(" The main Identicon component, taking a number of properties")]),e._v(" "),n("p",[n("strong",[n("code",[e._v("example")])])]),e._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Identicon")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":size")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("128"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":theme")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("polkadot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);