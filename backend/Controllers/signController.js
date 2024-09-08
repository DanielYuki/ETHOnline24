import { SignProtocolClient, SpMode, EvmChains } from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";




export const signProtocol = async (req, res) => {

    try{

        const privateKey = "0xfca9a00671d59ee310213f1abfaee37e2500daf7553210a17f99d863dfaaf551";
        console.log("signing protocol");
        const client = new SignProtocolClient(SpMode.OnChain, {
            chain: EvmChains.sepolia,
            account: privateKeyToAccount(privateKey), // Optional, depending on environment
        });

        const response = await client.createSchema({
            name: "SDK Test",
            data: [
              { name: "contractDetails", type: "string" },
              { name: "signer", type: "address" },
            ],
          });

          console.log(response);

          return res.sendStatus(200);


    } catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}
