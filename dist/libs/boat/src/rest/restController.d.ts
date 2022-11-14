import { Transformer } from '../transformers/transformer';
export declare class RestController {
    transform(obj: Record<string, any>, transformer: Transformer, options?: Record<string, any>): Promise<Record<string, any>>;
    collection(collect: Array<Record<string, any>>, transformer: Transformer, options?: Record<string, any>): Promise<Array<Record<string, any>>>;
    paginate(obj: Record<string, any>, transformer: Transformer, options?: Record<string, any>): Promise<Record<string, any>>;
    private setTransformerContext;
    getIncludes(req: any): any;
}
