export declare class ExpParser {
    private exp;
    private parsedExp;
    constructor(exp: string);
    static from(exp: string): ExpParser;
    private handle;
    toObj(): Record<string, any>;
    toArr(): Array<Record<string, any>>;
}
