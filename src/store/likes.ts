import { StorageKeys } from '@util/constants'
import { getFromStorage } from '@util/function'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const likeAtom = atomWithStorage(
  StorageKeys.LIKES,
  getFromStorage<string[]>(StorageKeys.LIKES) ?? []
)

export const toggleLikeAtom = atom(null, (get, set, imageID: string) => {
  set(
    likeAtom,
    !!get(likeAtom).find(like => like === imageID)
      ? get(likeAtom).filter(like => like !== imageID)
      : [...get(likeAtom), imageID]
  )
})
