// tiptap-extension/table-extension.ts
import { Table as TiptapTable } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'

export const Table = TiptapTable.configure({
  resizable: true,
})

// tiptap-ui/table-button.tsx
import * as React from "react"
import { EditorContext } from "@tiptap/react"
import { Button } from '../tiptap-ui-primitive/button'
import { TableIcon } from './table-icon'

interface TableButtonProps {
  text?: string
}

export const TableButton: React.FC<TableButtonProps> = ({ text = "Table" }) => {
  const { editor } = React.useContext(EditorContext)
  
  if (!editor) {
    return null
  }
  
  const handleClick = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run()
  }
  
  return (
    <Button 
      data-style="ghost" 
      onClick={handleClick} 
      title="Insert Table"
    >
      <TableIcon className="tiptap-button-icon" />
      {text && <span className="tiptap-button-text">{text}</span>}
    </Button>
  )
}