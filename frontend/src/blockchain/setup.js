import { ethers } from "ethers";
import { alchemyPrivateKey, smartContractAddress } from "../config";
import NFT from '../blockchain/artifacts/NFT.json';

export const provider = new ethers.providers.AlchemyProvider({name: 'maticmum', chainId: 80001}, alchemyPrivateKey);

export const SmartContract = new ethers.Contract(smartContractAddress, NFT.abi, provider);
