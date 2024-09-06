import { StorageKeys } from '@util/constants'
import { getFromStorage } from '@util/function'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const starAtom = atomWithStorage(
  StorageKeys.STARS,
  getFromStorage<string[]>(StorageKeys.STARS) ?? []
)

export const toggleStarAtom = atom(null, (get, set, imageID: string) => {
  set(
    starAtom,
    !!get(starAtom).find(star => star === imageID)
      ? get(starAtom).filter(star => star !== imageID)
      : [...get(starAtom), imageID]
  )
})
