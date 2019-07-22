import { RickAndMorty } from '@/services'

export const getEpisode = (opt = {}) => RickAndMorty('episode', opt) // eslint-disable-line
