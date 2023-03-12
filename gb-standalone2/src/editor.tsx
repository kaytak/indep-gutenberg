/**
 * WordPress dependencies
 */
import {
	Popover,
	SlotFillProvider,
	FocusReturnProvider,
} from '@wordpress/components';


import { StrictMode } from '@wordpress/element';
//@ts-ignore
import { FullscreenMode, InterfaceSkeleton } from '@wordpress/interface';
//@ts-ignore
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';

/**
 * Internal dependencies
 */
import Notices from './components/notices';
import Header from './components/header';
import Sidebar from './components/sidebar';
import BlockEditor from './components/block-editor';

import './styles.scss';

function MyEditorComponent({ settings }:any) {
	return (
		<>
			<StrictMode>
				<ShortcutProvider>
					<FullscreenMode isActive={false} />
					<SlotFillProvider>
						<InterfaceSkeleton
							header={<Header />}
							sidebar={<Sidebar />}
							content={
								<>
									<Notices />
									<BlockEditor settings={settings} />
								</>
							}
						/>

						<Popover.Slot />
					</SlotFillProvider>
				</ShortcutProvider>
			</StrictMode>
		</>
	);
}

export default MyEditorComponent;
