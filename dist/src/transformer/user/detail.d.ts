import { Transformer } from '@libs/boat';
export declare class UserDetailTransformer extends Transformer {
    availableIncludes: string[];
    defaultIncludes: string[];
    transform(user: Record<string, any>): Promise<Record<string, any>>;
    includeExtra(user: Record<string, any>): Promise<Record<string, any>>;
    includeAddress(user: Record<string, any>): Promise<Record<string, any>>;
    includePin(user: Record<string, any>): Promise<Record<string, any>>;
}
