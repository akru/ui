[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["defaults/endpoints"](_defaults_endpoints_.md)

# External module: "defaults/endpoints"

## Index

### Variables

* [ENDPOINTS](_defaults_endpoints_.md#const-endpoints)
* [ENDPOINT_DEFAULT](_defaults_endpoints_.md#const-endpoint_default)

## Variables

### `Const` ENDPOINTS

• **ENDPOINTS**: *[Option](_types_.md#option)[]* = ORDER_CHAINS.reduce((endpoints: Option[], chainName): Option[] => {
  const { chainDisplay, logo, type } = CHAIN_INFO[chainName];

  return ORDER_PROVIDERS.reduce((endpoints: Option[], providerName): Option[] => {
    const { providerDisplay, nodes } = PROVIDERS[providerName];
    const wssUrl = nodes[chainName];

    if (wssUrl) {
      endpoints.push({
        info: logo,
        text: `${chainDisplay} (${type}, hosted by ${providerDisplay})`,
        value: wssUrl
      });
    }

    return endpoints;
  }, endpoints);
}, [])

*Defined in [defaults/endpoints.ts:111](https://github.com/polkadot-js/ui/blob/7c39f68a/packages/ui-settings/src/defaults/endpoints.ts#L111)*

___

### `Const` ENDPOINT_DEFAULT

• **ENDPOINT_DEFAULT**: *undefined | string* = isPolkadot
  ? PROVIDERS.parity.nodes.kusama
  : PROVIDERS.parity.nodes.flamingFir

*Defined in [defaults/endpoints.ts:107](https://github.com/polkadot-js/ui/blob/7c39f68a/packages/ui-settings/src/defaults/endpoints.ts#L107)*
