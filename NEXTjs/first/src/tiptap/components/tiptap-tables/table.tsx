import * as React from "react"
import { EditorContext } from "@tiptap/react"
import { Button } from "../tiptap-ui-primitive/button"
import { TableIcon } from "./table-icon"
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from "../tiptap-ui-primitive/dropdown-menu"

export const TableDropdownMenu: React.FC = () => {
  const { editor } = React.useContext(EditorContext)
  
  if (!editor) {
    return null
  }
  
  const isInTable = editor?.isActive('table')
  
  const handleInsertTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run()
  }
  
  const handleAddRowBefore = () => {
    editor.chain().focus().addRowBefore().run()
  }
  
  const handleAddRowAfter = () => {
    editor.chain().focus().addRowAfter().run()
  }
  
  const handleDeleteRow = () => {
    editor.chain().focus().deleteRow().run()
  }
  
  const handleAddColumnBefore = () => {
    editor.chain().focus().addColumnBefore().run()
  }
  
  const handleAddColumnAfter = () => {
    editor.chain().focus().addColumnAfter().run()
  }
  
  const handleDeleteColumn = () => {
    editor.chain().focus().deleteColumn().run()
  }
  
  const handleMergeCells = () => {
    editor.chain().focus().mergeCells().run()
  }
  
  const handleSplitCell = () => {
    editor.chain().focus().splitCell().run()
  }
  
  const handleToggleHeaderRow = () => {
    editor.chain().focus().toggleHeaderRow().run()
  }
  
  const handleToggleHeaderColumn = () => {
    editor.chain().focus().toggleHeaderColumn().run()
  }
  
  const handleDeleteTable = () => {
    editor.chain().focus().deleteTable().run()
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-style="ghost" title="Table Options">
          <TableIcon className="tiptap-button-icon" />
          <span className="tiptap-button-text">Table</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Button
          data-style="menu-item"
          onClick={handleInsertTable}
          disabled={isInTable}
        >
          Insert Table
        </Button>
        {isInTable && (
          <>
            <Button data-style="menu-item" onClick={handleAddRowBefore}>
              Add Row Before
            </Button>
            <Button data-style="menu-item" onClick={handleAddRowAfter}>
              Add Row After
            </Button>
            <Button data-style="menu-item" onClick={handleDeleteRow}>
              Delete Row
            </Button>
            <Button data-style="menu-item" onClick={handleAddColumnBefore}>
              Add Column Before
            </Button>
            <Button data-style="menu-item" onClick={handleAddColumnAfter}>
              Add Column After
            </Button>
            <Button data-style="menu-item" onClick={handleDeleteColumn}>
              Delete Column
            </Button>
            <Button data-style="menu-item" onClick={handleMergeCells}>
              Merge Cells
            </Button>
            <Button data-style="menu-item" onClick={handleSplitCell}>
              Split Cell
            </Button>
            <Button data-style="menu-item" onClick={handleToggleHeaderRow}>
              Toggle Header Row
            </Button>
            <Button data-style="menu-item" onClick={handleToggleHeaderColumn}>
              Toggle Header Column
            </Button>
            <Button data-style="menu-item" onClick={handleDeleteTable}>
              Delete Table
            </Button>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}