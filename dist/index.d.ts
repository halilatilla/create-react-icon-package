/// <reference types="react" />
import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const Memo: React.MemoExoticComponent<({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element>;
export { Memo as IconAdminTest };
