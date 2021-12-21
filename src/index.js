import Moate from './SDK/moate'
import * as formatString from './SDK/formatString'
import * as types from './SDK/types'

const _FUNCTIONS = { ...formatString, ...types }

for (const key in _FUNCTIONS) window[key] = _FUNCTIONS[key]
window.Moate = Moate
