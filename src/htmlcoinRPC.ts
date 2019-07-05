import RpcClient, {IConfig} from "htmlcoind-rpc"

import {Network, NetworkNames} from "./Network"

export default class HtmlcoinRPC {
  public rpc: RpcClient

  constructor(config?: IConfig) {
    this.rpc = new RpcClient(config)
  }

  public generate(nblocks: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.rpc.generate(1, (err, ret) => {
        if (err) {
          reject(err)
        }
        resolve(ret)
      })
    })
  }
}

export const rpcClient = new HtmlcoinRPC({
  user: "htmlcoin",
  pass: "test",
  port: "18332",
  protocol: "http",
})
