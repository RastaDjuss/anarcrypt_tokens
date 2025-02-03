# Billeterias Boss y Mnt:

## El Boss wallet (con autoridad de creator)
Wrote keypair to bos8CvLn56dYd9kaFgLc4ynYmaoj9Ye1ztkcXwuEHPS.json

Wallet address: bos8CvLn56dYd9kaFgLc4ynYmaoj9Ye1ztkcXwuEHPS

## El Mnt (Mint Token Address):

rote keypair to  mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F.json



## Token Mint Address on the Blockchainm:

mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F

### Contractos y signaturas del token:

spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --enable-metadata mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F.json

Creating token mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F under program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
To initialize metadata inside the mint, please run `spl-token initialize-metadata mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F <YOUR_TOKEN_NAME> <YOUR_TOKEN_SYMBOL> <YOUR_TOKEN_URI>`, and sign with the mint authority.

Address:  mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F
Decimals:  9

Signature: 3Lypr9LfTTfhp123ChrmdWqL1W6EpvWZEmbctxBudAdzi896fhd1Qe7gaVbkzuWCE3qZBVv3c2f4sJMtcfNh38Ei


### Initiate-metadata:

spl-token initialize-metadata mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F 'FruitCoin' 'FRC' https://raw.githubusercontent.com/RastaDjuss/anarcrypt_tokens/refs/heads/main/fruit-token/metadata.json

Signature: z5vGvtRgYrorAj311bVGv6GH1MpJ1dyUCttrnUJdzGAv7HdXcueF9FCQhi9syUZEkgLR3cAHvsN6thDeadbzkfR

### Created account:

spl-token create-account mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F
Creating account Da3t7YLEHQyhTsmD5vT7p2VZrdFsKFFHbpwtSbmi7PAM

Signature: 38H2DfF9Lf2Lfw1Y7Yb7dy1NiYM3k8tGLtfHNn3Atg8aZfn4WC4Z4Shnrsb23M4eSALEnmRAna2DW6ZEXHAydHEF

### Minted Tokens:

spl-token mint mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F 31000666
Minting 31000666 tokens
Token: mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F
Recipient: Da3t7YLEHQyhTsmD5vT7p2VZrdFsKFFHbpwtSbmi7PAM

Signature: 2vajgwDYEeR95dQ5gtaZphxJaY3VkXHPm8k7s7GVcG1jJdKsdWGdFaCEneEHSyw3mWQX2qu192QfzNv5CNksdpJy

###  Revoke Mint authority...

spl-token authorize mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F  mint --disable
Updating mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F
Current mint: bosRkzvfiJAgjC333w3PD2A6j4gddjvpkUSi86GkZet
New mint: disabled

Signature: 4cVuFgJ6UKVTWzSZdW5ijrgDSerp1ZnDUPBRNYDHHKFMXV1PytsLQcUZ39isFH1kXVmKxnKFaQPQNaqZrYRtjHWr

### Revoke Freeze authority...

can't...

## Transfer to Oswald:

spl-token transfer  mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F 30000666 BLXBdAWkLs9xcDxVKtYmFkkARoM2MtyWoEtuVg1Y3HR1  --fund-recipient --allow-unfunded-recipient
Transfer 30000666 tokens
Sender: Da3t7YLEHQyhTsmD5vT7p2VZrdFsKFFHbpwtSbmi7PAM
Recipient: BLXBdAWkLs9xcDxVKtYmFkkARoM2MtyWoEtuVg1Y3HR1
Recipient associated token account: 3UvWfkw4hRyGubQg4WyW7yJoCwKkmYYpMsz8umKJsGn9
Funding recipient: 3UvWfkw4hRyGubQg4WyW7yJoCwKkmYYpMsz8umKJsGn9

Signature: 4ajMpDD16Ycq4N54SwW1FsRpSdZk6NXsJ134w6fJ1RJyjAb4kZypM7cR5F2hgpB7LRnufTPMFBRmnFbeHeX8iLoT

#### The End Buena navidad millionairo!!