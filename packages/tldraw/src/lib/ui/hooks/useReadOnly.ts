import { useEditor, useValue } from '@tldraw/editor'

/** @public */
export function useReadOnly() {
	const editor = useEditor()
	return useValue('isReadOnlyMode', () => editor.instanceState.isReadOnly, [editor])
}