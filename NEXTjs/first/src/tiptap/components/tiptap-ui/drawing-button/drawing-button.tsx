// DrawingButton.tsx
import { Editor } from "@tiptap/react"
import { Button } from "../../tiptap-ui-primitive/button"

export const DrawingButton = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null

  return (
    <Button onClick={() => editor.commands.insertContent({ type: "drawing" })}>
      Add Drawing
    </Button>
  )
}
