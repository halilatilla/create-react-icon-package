/// <reference types="react" />
import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const Memo: React.MemoExoticComponent<({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element>;
interface SVGRProps$0 {
    title?: string;
    titleId?: string;
}
declare const Memo$0: React.MemoExoticComponent<({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$0) => JSX.Element>;
export { Memo as IconAdminCopy, Memo$0 as IconAdmin };
