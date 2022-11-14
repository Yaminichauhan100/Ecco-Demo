import { DiscoveryService, MetadataScanner } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { GenericFunction } from '../constants';
export declare class HttpExplorer {
    private readonly config;
    private readonly discovery;
    private readonly metadataScanner;
    constructor(config: ConfigService, discovery: DiscoveryService, metadataScanner: MetadataScanner);
    onModuleInit(): void;
    lookupListeners(instance: Record<string, GenericFunction>, key: string, baseRoute?: string): void;
}
