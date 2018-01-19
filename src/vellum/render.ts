import {unless, isNil} from "ramda";
import {ReactNode} from "react";

export function maybeRender(val: any): (nodeFn: (val: any) => ReactNode) => ReactNode {
    return (nodeFn: (val: any) => ReactNode): ReactNode => unless(isNil, nodeFn)(val);
}
