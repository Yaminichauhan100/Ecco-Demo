declare const _default: (() => {
    isGlobal: boolean;
    default: string;
    connections: {
        pg: {
            client: string;
            debug: boolean;
            connection: {
                host: string;
                port: string;
                database: string;
                user: string;
                password: string;
                charset: string;
            };
            useNullAsDefault: boolean;
        };
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    isGlobal: boolean;
    default: string;
    connections: {
        pg: {
            client: string;
            debug: boolean;
            connection: {
                host: string;
                port: string;
                database: string;
                user: string;
                password: string;
                charset: string;
            };
            useNullAsDefault: boolean;
        };
    };
}>;
export default _default;
