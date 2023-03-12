//@ts-ignore
import {
	BlockEditorProvider,
	BlockList,
	BlockTools,
    BlockEditorKeyboardShortcuts,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import { SlotFillProvider, Popover } from '@wordpress/components';

import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { serialize, parse } from '@wordpress/blocks';
 import '@wordpress/components/build-style/style.css';
 import '@wordpress/block-editor/build-style/style.css';


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

export function MyEditorComponent(settings:any) {
	const [ blocks, updateBlocks ] = useState( [] );

	return (
        <ShortcutProvider>
					<FullscreenMode isActive={false} />
					<SlotFillProvider>
						<InterfaceSkeleton
							header={<Header />}
							sidebar={<Sidebar />}
							content={
								<>
									<Notices />
									<div className="getdavesbe-block-editor">
									<BlockEditorProvider settings={settings}
			value={ blocks }
            
			onInput={ ( blocks:any ) => {console.log(blocks);updateBlocks( blocks )} }
            
			onChange={ ( blocks:any ) => {console.log(blocks);updateBlocks( blocks )} }
		> 
			<SlotFillProvider>
                this is editor
            <BlockTools>
            <BlockEditorKeyboardShortcuts.Register />
					<WritingFlow>
						<ObserveTyping>
							<BlockList />
						</ObserveTyping>
					</WritingFlow>
            </BlockTools>
				<Popover.Slot />
			</SlotFillProvider>
		</BlockEditorProvider> </div>
								</>
							}
						/>

						<Popover.Slot />
					</SlotFillProvider>

		
        </ShortcutProvider>
	);
}