

# Type parameters
#### SS 
# Hierarchy

 `PureComponent`<[Props](../modules/_types_.md#props), `State`>

**↳ IdentityIcon**

# Methods

<a id="unsafe_componentwillmount"></a>

## `<Optional>` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillMount*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:617*

Called immediately before mounting occurs, and before `Component#render`. Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use componentDidMount or the constructor instead

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Returns:** `void`

___
<a id="unsafe_componentwillreceiveprops"></a>

## `<Optional>` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(nextProps: *`Readonly`<[Props](../modules/_types_.md#props)>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillReceiveProps*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:649*

Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use static getDerivedStateFromProps instead

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[Props](../modules/_types_.md#props)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="unsafe_componentwillupdate"></a>

## `<Optional>` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(nextProps: *`Readonly`<[Props](../modules/_types_.md#props)>*, nextState: *`Readonly`<`State`>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.UNSAFE_componentWillUpdate*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:677*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use getSnapshotBeforeUpdate instead

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[Props](../modules/_types_.md#props)> |
| nextState | `Readonly`<`State`> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="componentdidcatch"></a>

## `<Optional>` componentDidCatch

▸ **componentDidCatch**(error: *`Error`*, errorInfo: *`ErrorInfo`*): `void`

*Inherited from ComponentLifecycle.componentDidCatch*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:546*

Catches exceptions generated in descendant components. Unhandled exceptions will cause the entire component tree to unmount.

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` |
| errorInfo | `ErrorInfo` |

**Returns:** `void`

___
<a id="componentdidmount"></a>

## `<Optional>` componentDidMount

▸ **componentDidMount**(): `void`

*Inherited from ComponentLifecycle.componentDidMount*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:525*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** `void`

___
<a id="componentdidupdate"></a>

## `<Optional>` componentDidUpdate

▸ **componentDidUpdate**(prevProps: *`Readonly`<[Props](../modules/_types_.md#props)>*, prevState: *`Readonly`<`State`>*, snapshot?: *[SS]()*): `void`

*Inherited from NewLifecycle.componentDidUpdate*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:588*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[Props](../modules/_types_.md#props)> |
| prevState | `Readonly`<`State`> |
| `Optional` snapshot | [SS]() |

**Returns:** `void`

___
<a id="componentwillmount"></a>

## `<Optional>` componentWillMount

▸ **componentWillMount**(): `void`

*Inherited from DeprecatedLifecycle.componentWillMount*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:603*

Called immediately before mounting occurs, and before `Component#render`. Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use componentDidMount or the constructor instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Returns:** `void`

___
<a id="componentwillreceiveprops"></a>

## `<Optional>` componentWillReceiveProps

▸ **componentWillReceiveProps**(nextProps: *`Readonly`<[Props](../modules/_types_.md#props)>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.componentWillReceiveProps*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:632*

Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[Props](../modules/_types_.md#props)> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="componentwillunmount"></a>

## `<Optional>` componentWillUnmount

▸ **componentWillUnmount**(): `void`

*Inherited from ComponentLifecycle.componentWillUnmount*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:541*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** `void`

___
<a id="componentwillupdate"></a>

## `<Optional>` componentWillUpdate

▸ **componentWillUpdate**(nextProps: *`Readonly`<[Props](../modules/_types_.md#props)>*, nextState: *`Readonly`<`State`>*, nextContext: *`any`*): `void`

*Inherited from DeprecatedLifecycle.componentWillUpdate*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:662*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

*__deprecated__*: 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)

*__see__*: [https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[Props](../modules/_types_.md#props)> |
| nextState | `Readonly`<`State`> |
| nextContext | `any` |

**Returns:** `void`

___
<a id="getsnapshotbeforeupdate"></a>

## `<Optional>` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(prevProps: *`Readonly`<[Props](../modules/_types_.md#props)>*, prevState: *`Readonly`<`State`>*): `SS` \| `null`

*Inherited from NewLifecycle.getSnapshotBeforeUpdate*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:582*

Runs before React applies the result of `render` to the document, and returns an object to be given to componentDidUpdate. Useful for saving things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events from running.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prevProps | `Readonly`<[Props](../modules/_types_.md#props)> |
| prevState | `Readonly`<`State`> |

**Returns:** `SS` \| `null`

___
<a id="render"></a>

##  render

▸ **render**(): `Element`

*Defined in [Identicon.tsx:94](https://github.com/polkadot-js/ui/blob/d67f967/packages/ui-identicon/src/Identicon.tsx#L94)*

**Returns:** `Element`

___
<a id="shouldcomponentupdate"></a>

## `<Optional>` shouldComponentUpdate

▸ **shouldComponentUpdate**(nextProps: *`Readonly`<[Props](../modules/_types_.md#props)>*, nextState: *`Readonly`<`State`>*, nextContext: *`any`*): `boolean`

*Inherited from ComponentLifecycle.shouldComponentUpdate*

*Defined in /home/travis/build/polkadot-js/ui/node_modules/@types/react/index.d.ts:536*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextProps | `Readonly`<[Props](../modules/_types_.md#props)> |
| nextState | `Readonly`<`State`> |
| nextContext | `any` |

**Returns:** `boolean`

___
<a id="getderivedstatefromprops"></a>

## `<Static>` getDerivedStateFromProps

▸ **getDerivedStateFromProps**(__namedParameters: *`object`*, prevState: *`State`*): `State` \| `null`

*Defined in [Identicon.tsx:73](https://github.com/polkadot-js/ui/blob/d67f967/packages/ui-identicon/src/Identicon.tsx#L73)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |
| prevState | `State` |

**Returns:** `State` \| `null`

___
<a id="setdefaultprefix"></a>

## `<Static>` setDefaultPrefix

▸ **setDefaultPrefix**(prefix: *`Prefix`*): `void`

*Defined in [Identicon.tsx:69](https://github.com/polkadot-js/ui/blob/d67f967/packages/ui-identicon/src/Identicon.tsx#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `Prefix` |

**Returns:** `void`

___

# Object literals

<a id="state"></a>

##  state

**state**: *`object`*

*Defined in [Identicon.tsx:62](https://github.com/polkadot-js/ui/blob/d67f967/packages/ui-identicon/src/Identicon.tsx#L62)*

<a id="state.address"></a>

###  address

**● address**: *`string`* = ""

*Defined in [Identicon.tsx:63](https://github.com/polkadot-js/ui/blob/d67f967/packages/ui-identicon/src/Identicon.tsx#L63)*

___
<a id="state.publickey"></a>

###  publicKey

**● publicKey**: *`string`* = "0x"

*Defined in [Identicon.tsx:64](https://github.com/polkadot-js/ui/blob/d67f967/packages/ui-identicon/src/Identicon.tsx#L64)*

___

___
