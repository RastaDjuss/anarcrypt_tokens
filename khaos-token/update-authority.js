import {
    updateV1,
    fetchMetadataFromSeeds,
  } from '@metaplex-foundation/mpl-token-metadata';
  
  const initialMetadata = await fetchMetadataFromSeeds(umi, { mint });
  
  // First update call
  await updateV1(umi, {
    mint,
    authority: updateAuthority,
    data: { ...initialMetadata, name: 'Updated Asset' },
  }).sendAndConfirm(umi);
  
  // This second call can use the same initialMetadata if necessary. 
  // Otherwise, if you need to use a new block-scoped variable, remove the duplicate.
  await updateV1(umi, {
    mint,
    authority: updateAuthority,
    data: { ...initialMetadata, name: 'Updated Asset' },
    primarySaleHappened: true,
    isMutable: true,
  }).sendAndConfirm(umi);
  