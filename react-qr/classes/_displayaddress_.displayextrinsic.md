[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["DisplayAddress"](../modules/_displayaddress_.md) › [DisplayExtrinsic](_displayaddress_.displayextrinsic.md)

# Class: DisplayExtrinsic <**SS**>

## Type parameters

▪ **SS**

## Hierarchy

* PureComponent‹Props, State›

  ↳ **DisplayExtrinsic**

## Index

### Methods

* [UNSAFE_componentWillMount](_displayaddress_.displayextrinsic.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_displayaddress_.displayextrinsic.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_displayaddress_.displayextrinsic.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](_displayaddress_.displayextrinsic.md#optional-componentdidcatch)
* [componentDidMount](_displayaddress_.displayextrinsic.md#optional-componentdidmount)
* [componentDidUpdate](_displayaddress_.displayextrinsic.md#optional-componentdidupdate)
* [componentWillMount](_displayaddress_.displayextrinsic.md#optional-componentwillmount)
* [componentWillReceiveProps](_displayaddress_.displayextrinsic.md#optional-componentwillreceiveprops)
* [componentWillUnmount](_displayaddress_.displayextrinsic.md#optional-componentwillunmount)
* [componentWillUpdate](_displayaddress_.displayextrinsic.md#optional-componentwillupdate)
* [getSnapshotBeforeUpdate](_displayaddress_.displayextrinsic.md#optional-getsnapshotbeforeupdate)
* [render](_displayaddress_.displayextrinsic.md#render)
* [shouldComponentUpdate](_displayaddress_.displayextrinsic.md#optional-shouldcomponentupdate)
* [getDerivedStateFromProps](_displayaddress_.displayextrinsic.md#static-getderivedstatefromprops)

### Object literals

* [state](_displayaddress_.displayextrinsic.md#state)

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:659

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹Props›, `nextContext`: any): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:691

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹Props›, `nextState`: Readonly‹State›, `nextContext`: any): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:719

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextState` | Readonly‹State› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:588

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:567

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹Props›, `prevState`: Readonly‹State›, `snapshot?`: SS): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:630

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹Props› |
`prevState` | Readonly‹State› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:645

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹Props›, `nextContext`: any): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:674

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:583

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹Props›, `nextState`: Readonly‹State›, `nextContext`: any): *void*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:704

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextState` | Readonly‹State› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹Props›, `prevState`: Readonly‹State›): *SS | null*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:624

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹Props› |
`prevState` | Readonly‹State› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *React.ReactNode*

*Defined in [packages/react-qr/src/DisplayAddress.tsx:40](https://github.com/polkadot-js/ui/blob/a8df514c/packages/react-qr/src/DisplayAddress.tsx#L40)*

**Returns:** *React.ReactNode*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹Props›, `nextState`: Readonly‹State›, `nextContext`: any): *boolean*

*Inherited from void*

Defined in node_modules/@types/react/index.d.ts:578

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextState` | Readonly‹State› |
`nextContext` | any |

**Returns:** *boolean*

___

### `Static` getDerivedStateFromProps

▸ **getDerivedStateFromProps**(`__namedParameters`: object, `prevState`: State): *State | null*

*Defined in [packages/react-qr/src/DisplayAddress.tsx:29](https://github.com/polkadot-js/ui/blob/a8df514c/packages/react-qr/src/DisplayAddress.tsx#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |
`prevState` | State |

**Returns:** *State | null*

## Object literals

###  state

### ▪ **state**: *object*

*Defined in [packages/react-qr/src/DisplayAddress.tsx:24](https://github.com/polkadot-js/ui/blob/a8df514c/packages/react-qr/src/DisplayAddress.tsx#L24)*

###  data

• **data**: *null* =  null

*Defined in [packages/react-qr/src/DisplayAddress.tsx:25](https://github.com/polkadot-js/ui/blob/a8df514c/packages/react-qr/src/DisplayAddress.tsx#L25)*

###  dataHash

• **dataHash**: *null* =  null

*Defined in [packages/react-qr/src/DisplayAddress.tsx:26](https://github.com/polkadot-js/ui/blob/a8df514c/packages/react-qr/src/DisplayAddress.tsx#L26)*
