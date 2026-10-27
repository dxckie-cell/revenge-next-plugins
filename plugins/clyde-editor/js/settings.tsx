import Page from '@revenge-mod/components/Page'
import { Design } from '@revenge-mod/discord/design'
import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { DEFAULT_SETTINGS, type Settings } from './state'

import type { PluginSettingsComponent } from '@revenge-mod/plugins/types'

export const SettingsComponent: PluginSettingsComponent<{ jsonStorage: Settings }> = ({
	api,
}) => {
	const storage = api.jsonStorage

	const [values, setValues] = useState<Settings>(() => ({
		...DEFAULT_SETTINGS,
		...(storage.cache as Partial<Settings> | undefined),
	}))

	// If the storage had not finished loading when this page opened.
	useEffect(() => {
		storage.get().then(value => setValues({ ...DEFAULT_SETTINGS, ...value }))
	}, [storage])

	const change = (key: keyof Settings) => (value: string) => {
		const next = { ...values, [key]: value }
		setValues(next)
		storage.set(next, true)
	}

	return (
		<ScrollView keyboardShouldPersistTaps="handled">
			<Page>
				<Design.TableRowGroup title="Clyde Editor">
					<Design.TextInput
						label="Name"
						placeholder="Clyde"
						value={values.name}
						onChange={change('name')}
					/>
					<Design.TextInput
						label="Avatar image URL"
						placeholder="https://example.com/avatar.png"
						value={values.avatar}
						onChange={change('avatar')}
					/>
					<Design.TextInput
						label="Banner image URL"
						placeholder="https://example.com/banner.png"
						value={values.banner}
						onChange={change('banner')}
					/>
					<Design.TableRow label="Leave a field empty to keep Clyde's default." />
				</Design.TableRowGroup>
			</Page>
		</ScrollView>
	)
}
