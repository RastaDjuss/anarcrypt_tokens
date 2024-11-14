import { irysUploader } from '@metaplex-foundation/umi-uploader-irys'
umi.use(irysUploader())
const [imageUri] = await umi.uploader.upload([imageFile])
const uri = await umi.uploader.uploadJson({
  name: 'Khaös Magic',
  symbol: 'Khaös',
  description: 'AnarCrypt Eco Sub System Project - Join the AnarCoin Collective to promote self-management using blockchain technology. Uder the governance of Khaös Magic!',
  image: 'https://copper-hidden-moth-883.mypinata.cloud/ipfs/QmNs3YEJ6PfC2MTtp2XMVtdGkocwaUSSDpbcciXnG8Jrmf?pinataGatewayToken=q0iufGb74wJIkVwYrVE28fmFjyTLVyXmyFGXkqd56sjcVa3RdV9sEEw1GBtRsv4E',
  uri: 'https://raw.githubusercontent.com/RastaDjuss/anarcoin-2.0/refs/heads/main/khaos-token/metadate.json',
  external_url: 'https://tattoocalypso.com/anarcoin',
  creator: {
    name: 'Justin AnarchSun',
    links: [
      'https://linktr.ee/anarchsun',
      'https://tattoocalypso.com'
    ]
  },
   attributes: [
    {
      trait_type: 'All Links Bitly Linktree',
      value: 'https://bit.ly/m/anarcoin-collective'
    },
    {
      trait_type: 'Raydium Swap & Buy',
      value: 'https://bit.ly/swap-anarki'
    }
  ],
  primarySaleHappened: 'true',
  isMutable: 'true',
  tokenStandard: 'fungible',
  license: 'MIT',
  version: '1.0.0'
});
