import type { JsonStorage } from '@revenge-mod/json-storage'

// The account this plugin edits.
export const TARGET_ID = '643945264868098049'

// Placeholder banner hash, only used so the profile screen draws a banner area
// for an account that has none. The real image comes from the setting.
export const PLACEHOLDER_HASH = 'discord-editor-banner'

export interface Settings {
	name: string
	avatar: string
	banner: string
}

export const DEFAULT_SETTINGS: Settings = { name: '', avatar: '', banner: '' }

let storage: JsonStorage<Settings> | undefined

export function setStorage(value: JsonStorage<Settings> | undefined) {
	storage = value
}

// Looked up at call time, so edits in settings apply without reloading.
function read(key: keyof Settings): string | undefined {
	const value = (storage?.cache as Partial<Settings> | undefined)?.[key]
	return typeof value === 'string' && value.trim() ? value.trim() : undefined
}

export const getName = () => read('name')
export const getAvatar = () => read('avatar')

// The banner for this account only; undefined for everyone else.
export function getBanner(userId?: string): string | undefined {
	return userId === TARGET_ID ? read('banner') : undefined
}
