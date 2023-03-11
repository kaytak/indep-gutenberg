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
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { serialize, parse } from '@wordpress/blocks';
 import '@wordpress/components/build-style/style.css';
 import '@wordpress/block-editor/build-style/style.css';

export function MyEditorComponent() {
	const [ blocks, updateBlocks ] = useState( [] );

	return (
        <ShortcutProvider>
		<BlockEditorProvider
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
		</BlockEditorProvider>
        </ShortcutProvider>
	);
}