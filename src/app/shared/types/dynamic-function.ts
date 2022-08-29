import { Type } from "@angular/core";

export type Event = | { type: "login", payload: { username: string, password: string } }
                    | { type: "logout"};

const formSubmit = (eventType: Event['type'], payload?: any) => {};
const sendEvent = <Type extends Event['type']>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [ type: Type, payload: TPayload]
    : [ type: Type]
) => {}

type Accessor<T extends  Event['type'] = "login"> = Extract<Event, { type: T }> extends {payload: infer TP} ?
  {type: T, payload: TP}
  : {type: T}
//     ^?

const d: Accessor<'logout'> = {
 type: "logout",

}




type A = ConstructorParameters<ErrorConstructor>;
const r:A = ['asd']


sendEvent("login", { username: '', password: '',})
sendEvent("logout")
