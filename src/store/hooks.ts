
import { createTypedHooks } from 'easy-peasy' 
import { StoreModel } from './index' 

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<StoreModel>()

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
