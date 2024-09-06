import { Chain, createPublicClient, http } from "viem"
import { sepolia } from 'viem/chains';
import getViemNetwork from "./clients/getViemNetwork.js"

export const publicClient = createPublicClient({
    chain: sepolia,
    transport: http('https://eth-sepolia.g.alchemy.com/v2/pknjO3YajsLq_ZcLfmiwBrzIAjT2dB4W'), //sepolia rpc
  });

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId)
  const publicClient = createPublicClient({
    chain: chain as Chain,
    transport: http(),
  })
  return publicClient
}