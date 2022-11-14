import { Transformer$IncludeMethodOptions } from '../interfaces';
import { Context } from '../utils/context';
export declare abstract class Transformer {
    availableIncludes: any[];
    defaultIncludes: any[];
    protected includes: {};
    ctx: Context;
    abstract transform(object: any): Promise<Record<string, any> | null>;
    item(obj: Record<string, any>, transformer: Transformer, options?: Transformer$IncludeMethodOptions): Promise<Record<string, any> | null>;
    collection(arr: Array<Record<string, any> | string>, transformer: Transformer, options?: Transformer$IncludeMethodOptions): Promise<Array<any>>;
    applyOptions(transformer: Transformer, options?: Transformer$IncludeMethodOptions): Transformer;
    parseIncludes(include?: string): this;
    work(data: any): Promise<Record<string, any> | Array<Record<string, any>>>;
}
