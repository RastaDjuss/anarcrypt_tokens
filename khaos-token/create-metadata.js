import {
    generateSigner,
    percentAmount,
    publicKey,
} from '@metaplex-foundation/umi';
import {
    createV1,
    TokenStandard,
} from '@metaplex-foundation/mpl-token-metadata';

const SPL_TOKEN_2022_PROGRAM_ID = publicKey(
    'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'
);

const mint = generateSigner(umi);
await createV1(umi, {
    mint,
    authority,
    name: 'Khaös Magic',
    uri,
    sellerFeeBasisPoints: percentAmount(5.5),
    splTokenProgram: SPL_TOKEN_2022_PROGRAM_ID,
    tokenStandard: TokenStandard.NonFungible,
}).sendAndConfirm(umi);
