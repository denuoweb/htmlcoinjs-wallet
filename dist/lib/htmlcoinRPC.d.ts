import RpcClient, { IConfig } from "htmlcoind-rpc";
import { Network } from "./Network";
export default class HtmlcoinRPC {
    rpc: RpcClient;
    constructor(config?: IConfig);
    generate(nblocks: number): Promise<any>;
}
export declare const rpcClient: HtmlcoinRPC;
export declare function generateBlock(network: Network): Promise<void>;
