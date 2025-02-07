# Billeterias Boss y Mnt:

## El Boss wallet (con autoridad de creator)
Wrote keypair to bosNRevwS7EmuYhj4ZUXD3MCwX3MDyY9ffXSnaGcsBV.json

Wallet address: bosNRevwS7EmuYhj4ZUXD3MCwX3MDyY9ffXSnaGcsBV

## El Mnt (Mint Token Address):

Wrote keypair to mnt7gddNvnAzLfNk3u4MSB887hyzeak3DVnH519wbTc.json



## Token Mint Address on the Blockchainm:

mnt7gddNvnAzLfNk3u4MSB887hyzeak3DVnH519wbTc

### Contractos y signaturas del token:

spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --enable-metadata  mnt7gddNvnAzLfNk3u4MSB887hyzeak3DVnH519wbTc.json
Creating token mnt7gddNvnAzLfNk3u4MSB887hyzeak3DVnH519wbTc under program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
To initialize metadata inside the mint, please run `spl-token initialize-metadata mnt7gddNvnAzLfNk3u4MSB887hyzeak3DVnH519wbTc <YOUR_TOKEN_NAME> <YOUR_TOKEN_SYMBOL> <YOUR_TOKEN_URI>`, and sign with the mint authority.

Address:  mnt7gddNvnAzLfNk3u4MSB887hyzeak3DVnH519wbTc
Decimals:  9

Signature: krtyWmYrB9Kk2HPoRth2cR5cNHaKRopxUvQv3EAjvrVfifDxp5bjVmXCYqGhJh2xHAmEoHv4L9DLP95t3o2eBY6


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
 y un million para Justin El KREATOR!!

spl-token transfer mntHrgyAEQLcfqbDXg4pb33twCdw9M7eajFS6WJSH7F  1000000 AbonnfiKsnovfQUEeBX3U57BdDiESGi2UEFXw2X711cY  --fund-recipient --allow-unfunded-recipient
Transfer 1000000 tokens
Sender: Da3t7YLEHQyhTsmD5vT7p2VZrdFsKFFHbpwtSbmi7PAM
Recipient: AbonnfiKsnovfQUEeBX3U57BdDiESGi2UEFXw2X711cY
Recipient associated token account: 7jk4Ea7NZ8bJcLWYgJFAYMvAJf11vSnLhiJNGFTwuiwr
Funding recipient: 7jk4Ea7NZ8bJcLWYgJFAYMvAJf11vSnLhiJNGFTwuiwr

Signature: qfuxiRue8gBdepvVTQk2GhZAemdzJMuzEQAMU5EYJZMPScouKJarexQKw5ZPDReYVCQ22t5LiYvXWh3qjP1THik

#### The End Buena navidad millionairo!!