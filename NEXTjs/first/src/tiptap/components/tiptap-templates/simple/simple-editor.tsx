// "use client"

// import * as React from "react"
// import { EditorContent, EditorContext, useEditor } from "@tiptap/react"


// // --- Tiptap Core Extensions ---
// import { StarterKit } from "@tiptap/starter-kit"
// import { Image } from "@tiptap/extension-image"
// import { TaskItem } from "@tiptap/extension-task-item"
// import { TaskList } from "@tiptap/extension-task-list"
// import { TextAlign } from "@tiptap/extension-text-align"
// import { Typography } from "@tiptap/extension-typography"
// import { Highlight } from "@tiptap/extension-highlight"
// import { Subscript } from "@tiptap/extension-subscript"
// import { Superscript } from "@tiptap/extension-superscript"
// import { Underline } from "@tiptap/extension-underline"

// // --- Custom Extensions ---
// import { Link } from "../../tiptap-extension/link-extension"
// import { Selection } from "../../tiptap-extension/selection-extension"
// import { TrailingNode } from "../../tiptap-extension/trailing-node-extension"

// // --- UI Primitives ---
// import { Button } from "../../tiptap-ui-primitive/button"
// import { Spacer } from "../../tiptap-ui-primitive/spacer"
// import {
//   Toolbar,
//   ToolbarGroup,
//   ToolbarSeparator,
// } from "../../tiptap-ui-primitive/toolbar"

// // --- Tiptap Node ---
// import { ImageUploadNode } from "../../tiptap-node/image-upload-node/image-upload-node-extension"
// import "../../tiptap-node/code-block-node/code-block-node.scss"
// import "../../tiptap-node/list-node/list-node.scss"
// import "../../tiptap-node/image-node/image-node.scss"
// import "../../tiptap-node/paragraph-node/paragraph-node.scss"

// // --- Tiptap UI ---
// import { HeadingDropdownMenu } from "../../tiptap-ui/heading-dropdown-menu"
// import { ImageUploadButton } from "../../tiptap-ui/image-upload-button"
// import { ListDropdownMenu } from "../../tiptap-ui/list-dropdown-menu"
// import { NodeButton } from "../../tiptap-ui/node-button"
// import {
//   HighlightPopover,
//   HighlightContent,
//   HighlighterButton,
// } from "../../tiptap-ui/highlight-popover"
// import {
//   LinkPopover,
//   LinkContent,
//   LinkButton,
// } from "../../tiptap-ui/link-popover"
// import { MarkButton } from "../../tiptap-ui/mark-button"
// import { TextAlignButton } from "../../tiptap-ui/text-align-button"
// import { UndoRedoButton } from "../../tiptap-ui/undo-redo-button"

// // --- Icons ---
// import { ArrowLeftIcon } from "../../tiptap-icons/arrow-left-icon"
// import { HighlighterIcon } from "../../tiptap-icons/highlighter-icon"
// import { LinkIcon } from "../../tiptap-icons/link-icon"

// // --- Hooks ---
// import { useMobile } from "@/tiptap/hooks/use-mobile"
// import { useWindowSize } from "@/tiptap/hooks/use-window-size"

// // --- Components ---
// import { ThemeToggle } from "../../tiptap-templates/simple/theme-toggle"

// // --- Lib ---
// import { handleImageUpload, MAX_FILE_SIZE } from "@/tiptap/lib/tiptap-utils"

// // --- Styles ---
// import "../../tiptap-templates/simple/simple-editor.scss"

// import content from "../../tiptap-templates/simple/data/content.json"

// const MainToolbarContent = ({
//   onHighlighterClick,
//   onLinkClick,

//   isMobile,
// }: {
//   onHighlighterClick: () => void
//   onLinkClick: () => void
//   isMobile: boolean

// }) => {
//   return (
//     <>
//       <Spacer />

//       <ToolbarGroup>
//         <UndoRedoButton action="undo" />
//         <UndoRedoButton action="redo" />
//       </ToolbarGroup>
//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <HeadingDropdownMenu levels={[1, 2, 3, 4]} />
//         <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
//         <NodeButton type="codeBlock" />
//         <NodeButton type="blockquote" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <MarkButton type="bold" />
//         <MarkButton type="italic" />
//         <MarkButton type="strike" />
//         <MarkButton type="code" />
//         <MarkButton type="underline" />
//         {!isMobile ? (
//           <HighlightPopover />
//         ) : (
//           <HighlighterButton onClick={onHighlighterClick} />
//         )}
//         {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <MarkButton type="superscript" />
//         <MarkButton type="subscript" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <TextAlignButton align="left" />
//         <TextAlignButton align="center" />
//         <TextAlignButton align="right" />
//         <TextAlignButton align="justify" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <ImageUploadButton text="Add" />
//       </ToolbarGroup>

//       <Spacer />

//       {isMobile && <ToolbarSeparator />}

//       <ToolbarGroup>
//         <ThemeToggle />
//       </ToolbarGroup>
//     </>
//   )
// }

// const MobileToolbarContent = ({
//   type,
//   onBack,
// }: {
//   type: "highlighter" | "link"
//   onBack: () => void
// }) => (
//   <>
//     <ToolbarGroup>
//       <Button data-style="ghost" onClick={onBack}>
//         <ArrowLeftIcon className="tiptap-button-icon" />
//         {type === "highlighter" ? (
//           <HighlighterIcon className="tiptap-button-icon" />
//         ) : (
//           <LinkIcon className="tiptap-button-icon" />
//         )}
//       </Button>
//     </ToolbarGroup>

//     <ToolbarSeparator />

//     {type === "highlighter" ? <HighlightContent /> : <LinkContent />}
//   </>
// )

// export function SimpleEditor() {
//   const isMobile = useMobile()
//   const windowSize = useWindowSize()
//   const [mobileView, setMobileView] = React.useState<
//     "main" | "highlighter" | "link"
//   >("main")
//   const [rect, setRect] = React.useState<
//     Pick<DOMRect, "x" | "y" | "width" | "height">
//   >({
//     x: 0,
//     y: 0,
//     width: 0,
//     height: 0,
//   })
//   const toolbarRef = React.useRef<HTMLDivElement>(null)

//   React.useEffect(() => {
//     const updateRect = () => {
//       setRect(document.body.getBoundingClientRect())
//     }

//     updateRect()

//     const resizeObserver = new ResizeObserver(updateRect)
//     resizeObserver.observe(document.body)

//     window.addEventListener("scroll", updateRect)

//     return () => {
//       resizeObserver.disconnect()
//       window.removeEventListener("scroll", updateRect)
//     }
//   }, [])

  
  
//   const editor = useEditor({
//     immediatelyRender: false,
//     editorProps: {
//       attributes: {
//         autocomplete: "off",
//         autocorrect: "off",
//         autocapitalize: "off",
//         "aria-label": "Main content area, start typing to enter text.",
//       },
//     },
    
//     extensions: [
//       StarterKit,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Underline,
//       TaskList,
//       TaskItem.configure({ nested: true }),
//       Highlight.configure({ multicolor: true }),
//       Image,
//       Typography,
//       Superscript,
//       Subscript,
//       Selection,
//       ImageUploadNode.configure({
//         accept: "image/*",
//         maxSize: MAX_FILE_SIZE,
//         limit: 3,
//         upload: handleImageUpload,
//         onError: (error) => console.error("Upload failed:", error),
//       }),
//       TrailingNode,
//       Link.configure({ openOnClick: false }),
//     ],
//     content: content,
//   })

//   React.useEffect(() => {
//     const checkCursorVisibility = () => {
//       if (!editor || !toolbarRef.current) return

//       const { state, view } = editor
//       if (!view.hasFocus()) return

//       const { from } = state.selection
//       const cursorCoords = view.coordsAtPos(from)

//       if (windowSize.height < rect.height) {
//         if (cursorCoords && toolbarRef.current) {
//           const toolbarHeight =
//             toolbarRef.current.getBoundingClientRect().height
//           const isEnoughSpace =
//             windowSize.height - cursorCoords.top - toolbarHeight > 0

//           // If not enough space, scroll until the cursor is the middle of the screen
//           if (!isEnoughSpace) {
//             const scrollY =
//               cursorCoords.top - windowSize.height / 2 + toolbarHeight
//             window.scrollTo({
//               top: scrollY,
//               behavior: "smooth",
//             })
//           }
//         }
//       }
//     }

//     checkCursorVisibility()
//   }, [editor, rect.height, windowSize.height])

//   React.useEffect(() => {
//     if (!isMobile && mobileView !== "main") {
//       setMobileView("main")
//     }
//   }, [isMobile, mobileView])

//   return (
//     <EditorContext.Provider value={{ editor }}>
//       <Toolbar
//         ref={toolbarRef}
//         style={
//           isMobile
//             ? {
//               bottom: `calc(100% - ${windowSize.height - rect.y}px)`,
//             }
//             : {}
//         }
//       >
//         {mobileView === "main" ? (
//           <MainToolbarContent
//             onHighlighterClick={() => setMobileView("highlighter")}
//             onLinkClick={() => setMobileView("link")}
//             isMobile={isMobile}


//           />
//         ) : (
//           <MobileToolbarContent
//             type={mobileView === "highlighter" ? "highlighter" : "link"}
//             onBack={() => setMobileView("main")}
//           />
//         )}
//       </Toolbar>

//       <div className="content-wrapper">
//         <EditorContent
//           editor={editor}
//           role="presentation"
//           className="simple-editor-content"
//         />
//       </div>
//     </EditorContext.Provider>
//   )
// }

// "use client"

// import * as React from "react"
// import { EditorContent, EditorContext, useEditor } from "@tiptap/react"
// import { Editor } from "@tiptap/core"

// // --- Tiptap Core Extensions ---
// import { StarterKit } from "@tiptap/starter-kit"
// import { Image } from "@tiptap/extension-image"
// import { TaskItem } from "@tiptap/extension-task-item"
// import { TaskList } from "@tiptap/extension-task-list"
// import { TextAlign } from "@tiptap/extension-text-align"
// import { Typography } from "@tiptap/extension-typography"
// import { Highlight } from "@tiptap/extension-highlight"
// import { Subscript } from "@tiptap/extension-subscript"
// import { Superscript } from "@tiptap/extension-superscript"
// import { Underline } from "@tiptap/extension-underline"

// // --- Custom Extensions ---
// import { Link } from "../../tiptap-extension/link-extension"
// import { Selection } from "../../tiptap-extension/selection-extension"
// import { TrailingNode } from "../../tiptap-extension/trailing-node-extension"
// import { DrawingBoardNode } from "../../tiptap-drawing/paper-extension"

// // --- UI Primitives ---
// import { Button } from "../../tiptap-ui-primitive/button"
// import { Spacer } from "../../tiptap-ui-primitive/spacer"
// import {
//   Toolbar,
//   ToolbarGroup,
//   ToolbarSeparator,
// } from "../../tiptap-ui-primitive/toolbar"

// // --- Tiptap Node ---
// import { ImageUploadNode } from "../../tiptap-node/image-upload-node/image-upload-node-extension"
// import "../../tiptap-node/code-block-node/code-block-node.scss"
// import "../../tiptap-node/list-node/list-node.scss"
// import "../../tiptap-node/image-node/image-node.scss"
// import "../../tiptap-node/paragraph-node/paragraph-node.scss"
// import "../../tiptap-drawing/drawing-board.scss"

// // --- Tiptap UI ---
// import { HeadingDropdownMenu } from "../../tiptap-ui/heading-dropdown-menu"
// import { ImageUploadButton } from "../../tiptap-ui/image-upload-button"
// import { ListDropdownMenu } from "../../tiptap-ui/list-dropdown-menu"
// import { NodeButton } from "../../tiptap-ui/node-button"
// import {
//   HighlightPopover,
//   HighlightContent,
//   HighlighterButton,
// } from "../../tiptap-ui/highlight-popover"
// import {
//   LinkPopover,
//   LinkContent,
//   LinkButton,
// } from "../../tiptap-ui/link-popover"
// import { MarkButton } from "../../tiptap-ui/mark-button"
// import { TextAlignButton } from "../../tiptap-ui/text-align-button"
// import { UndoRedoButton } from "../../tiptap-ui/undo-redo-button"

// // --- Icons ---
// import { ArrowLeftIcon } from "../../tiptap-icons/arrow-left-icon"
// import { HighlighterIcon } from "../../tiptap-icons/highlighter-icon"
// import { LinkIcon } from "../../tiptap-icons/link-icon"
// import { DrawingBoardIcon } from "../../tiptap-drawing/icon"

// // --- Hooks ---
// import { useMobile } from "@/tiptap/hooks/use-mobile"
// import { useWindowSize } from "@/tiptap/hooks/use-window-size"

// // --- Components ---
// import { ThemeToggle } from "../../tiptap-templates/simple/theme-toggle"

// // --- Lib ---
// import { handleImageUpload, MAX_FILE_SIZE } from "@/tiptap/lib/tiptap-utils"

// // --- Styles ---
// import "../../tiptap-templates/simple/simple-editor.scss"

// import content from "../../tiptap-templates/simple/data/content.json"

// interface DrawingBoardButtonProps {
//   text?: string
// }

// // Create a new Drawing Board Button component
// const DrawingBoardButton: React.FC<DrawingBoardButtonProps> = ({ text = "Draw" }) => {
//   const { editor } = React.useContext(EditorContext)
  
//   if (!editor) {
//     return null
//   }
  
//   const handleClick = () => {
//     editor.chain().focus().insertDrawingBoard().run()
//   }
  
//   return (
//     <Button 
//       data-style="ghost" 
//       onClick={handleClick} 
//       title="Insert Drawing Board"
//     >
//       <DrawingBoardIcon className="tiptap-button-icon" />
//       {text && <span className="tiptap-button-text">{text}</span>}
//     </Button>
//   )
// }

// interface MainToolbarContentProps {
//   onHighlighterClick: () => void
//   onLinkClick: () => void
//   isMobile: boolean
// }

// const MainToolbarContent: React.FC<MainToolbarContentProps> = ({
//   onHighlighterClick,
//   onLinkClick,
//   isMobile,
// }) => {
//   return (
//     <>
//       <Spacer />

//       <ToolbarGroup>
//         <UndoRedoButton action="undo" />
//         <UndoRedoButton action="redo" />
//       </ToolbarGroup>
//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <HeadingDropdownMenu levels={[1, 2, 3, 4]} />
//         <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
//         <NodeButton type="codeBlock" />
//         <NodeButton type="blockquote" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <MarkButton type="bold" />
//         <MarkButton type="italic" />
//         <MarkButton type="strike" />
//         <MarkButton type="code" />
//         <MarkButton type="underline" />
//         {!isMobile ? (
//           <HighlightPopover />
//         ) : (
//           <HighlighterButton onClick={onHighlighterClick} />
//         )}
//         {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <MarkButton type="superscript" />
//         <MarkButton type="subscript" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <TextAlignButton align="left" />
//         <TextAlignButton align="center" />
//         <TextAlignButton align="right" />
//         <TextAlignButton align="justify" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <ImageUploadButton text="Add" />
//         <DrawingBoardButton text="Draw" />
//       </ToolbarGroup>

//       <Spacer />

//       {isMobile && <ToolbarSeparator />}

//       <ToolbarGroup>
//         <ThemeToggle />
//       </ToolbarGroup>
//     </>
//   )
// }

// interface MobileToolbarContentProps {
//   type: "highlighter" | "link"
//   onBack: () => void
// }

// const MobileToolbarContent: React.FC<MobileToolbarContentProps> = ({
//   type,
//   onBack,
// }) => (
//   <>
//     <ToolbarGroup>
//       <Button data-style="ghost" onClick={onBack}>
//         <ArrowLeftIcon className="tiptap-button-icon" />
//         {type === "highlighter" ? (
//           <HighlighterIcon className="tiptap-button-icon" />
//         ) : (
//           <LinkIcon className="tiptap-button-icon" />
//         )}
//       </Button>
//     </ToolbarGroup>

//     <ToolbarSeparator />

//     {type === "highlighter" ? <HighlightContent /> : <LinkContent />}
//   </>
// )

// export function SimpleEditor() {
//   const isMobile = useMobile()
//   const windowSize = useWindowSize()
//   const [mobileView, setMobileView] = React.useState<
//     "main" | "highlighter" | "link"
//   >("main")
//   const [rect, setRect] = React.useState<
//     Pick<DOMRect, "x" | "y" | "width" | "height">
//   >({
//     x: 0,
//     y: 0,
//     width: 0,
//     height: 0,
//   })
//   const toolbarRef = React.useRef<HTMLDivElement>(null)

//   React.useEffect(() => {
//     const updateRect = () => {
//       setRect(document.body.getBoundingClientRect())
//     }

//     updateRect()

//     const resizeObserver = new ResizeObserver(updateRect)
//     resizeObserver.observe(document.body)

//     window.addEventListener("scroll", updateRect)

//     return () => {
//       resizeObserver.disconnect()
//       window.removeEventListener("scroll", updateRect)
//     }
//   }, [])

  
  
//   const editor = useEditor({
//     immediatelyRender: false,
//     editorProps: {
//       attributes: {
//         autocomplete: "off",
//         autocorrect: "off",
//         autocapitalize: "off",
//         "aria-label": "Main content area, start typing to enter text.",
//       },
//     },
    
//     extensions: [
//       StarterKit,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Underline,
//       TaskList,
//       TaskItem.configure({ nested: true }),
//       Highlight.configure({ multicolor: true }),
//       Image,
//       Typography,
//       Superscript,
//       Subscript,
//       Selection,
//       ImageUploadNode.configure({
//         accept: "image/*",
//         maxSize: MAX_FILE_SIZE,
//         limit: 3,
//         upload: handleImageUpload,
//         onError: (error) => console.error("Upload failed:", error),
//       }),
//       TrailingNode,
//       Link.configure({ openOnClick: false }),
//       DrawingBoardNode, // Add the Drawing Board extension
//     ],
//     content: content,
//   })

//   React.useEffect(() => {
//     const checkCursorVisibility = () => {
//       if (!editor || !toolbarRef.current) return

//       const { state, view } = editor
//       if (!view.hasFocus()) return

//       const { from } = state.selection
//       const cursorCoords = view.coordsAtPos(from)

//       if (windowSize.height < rect.height) {
//         if (cursorCoords && toolbarRef.current) {
//           const toolbarHeight =
//             toolbarRef.current.getBoundingClientRect().height
//           const isEnoughSpace =
//             windowSize.height - cursorCoords.top - toolbarHeight > 0

//           // If not enough space, scroll until the cursor is the middle of the screen
//           if (!isEnoughSpace) {
//             const scrollY = 
//               cursorCoords.top - windowSize.height / 2 + toolbarHeight
//             window.scrollTo({
//               top: scrollY,
//               behavior: "smooth",
//             })
//           }
//         }
//       }
//     }

//     checkCursorVisibility()
//   }, [editor, rect.height, windowSize.height])

//   React.useEffect(() => {
//     if (!isMobile && mobileView !== "main") {
//       setMobileView("main")
//     }
//   }, [isMobile, mobileView])

//   return (
//     <EditorContext.Provider value={{ editor }}>
//       <Toolbar
//         ref={toolbarRef}
//         style={
//           isMobile
//             ? {
//               bottom: `calc(100% - ${windowSize.height - rect.y}px)`,
//             }
//             : {}
//         }
//       >
//         {mobileView === "main" ? (
//           <MainToolbarContent
//             onHighlighterClick={() => setMobileView("highlighter")}
//             onLinkClick={() => setMobileView("link")}
//             isMobile={isMobile}
//           />
//         ) : (
//           <MobileToolbarContent
//             type={mobileView === "highlighter" ? "highlighter" : "link"}
//             onBack={() => setMobileView("main")}
//           />
//         )}
//       </Toolbar>

//       <div className="content-wrapper">
//         <EditorContent
//           editor={editor}
//           role="presentation"
//           className="simple-editor-content"
//         />
//       </div>
//     </EditorContext.Provider>
//   )
// }

"use client"

// import * as React from "react"
// import { EditorContent, EditorContext, useEditor } from "@tiptap/react"
// import { BubbleMenu, FloatingMenu } from '@tiptap/react' // Add this import

// // --- Tiptap Core Extensions ---
// import { StarterKit } from "@tiptap/starter-kit"
// import { Image } from "@tiptap/extension-image"
// import { TaskItem } from "@tiptap/extension-task-item"
// import { TaskList } from "@tiptap/extension-task-list"
// import { TextAlign } from "@tiptap/extension-text-align"
// import { Typography } from "@tiptap/extension-typography"
// import { Highlight } from "@tiptap/extension-highlight"
// import { Subscript } from "@tiptap/extension-subscript"
// import { Superscript } from "@tiptap/extension-superscript"
// import { Underline } from "@tiptap/extension-underline"

// // --- Custom Extensions ---
// import { Link } from "../../tiptap-extension/link-extension"
// import { Selection } from "../../tiptap-extension/selection-extension"
// import { TrailingNode } from "../../tiptap-extension/trailing-node-extension"
// import { DrawingBoardNode } from "../../tiptap-drawing/paper-extension"

// // --- UI Primitives ---
// import { Button } from "../../tiptap-ui-primitive/button"
// import { Spacer } from "../../tiptap-ui-primitive/spacer"
// import {
//   Toolbar,
//   ToolbarGroup,
//   ToolbarSeparator,
// } from "../../tiptap-ui-primitive/toolbar"

// // --- Tiptap Node ---
// import { ImageUploadNode } from "../../tiptap-node/image-upload-node/image-upload-node-extension"
// import "../../tiptap-node/code-block-node/code-block-node.scss"
// import "../../tiptap-node/list-node/list-node.scss"
// import "../../tiptap-node/image-node/image-node.scss"
// import "../../tiptap-node/paragraph-node/paragraph-node.scss"
// import "../../tiptap-drawing/drawing-board.scss"

// // --- Tiptap UI ---
// import { HeadingDropdownMenu } from "../../tiptap-ui/heading-dropdown-menu"
// import { ImageUploadButton } from "../../tiptap-ui/image-upload-button"
// import { ListDropdownMenu } from "../../tiptap-ui/list-dropdown-menu"
// import { NodeButton } from "../../tiptap-ui/node-button"
// import {
//   HighlightPopover,
//   HighlightContent,
//   HighlighterButton,
// } from "../../tiptap-ui/highlight-popover"
// import {
//   LinkPopover,
//   LinkContent,
//   LinkButton,
// } from "../../tiptap-ui/link-popover"
// import { MarkButton } from "../../tiptap-ui/mark-button"
// import { TextAlignButton } from "../../tiptap-ui/text-align-button"
// import { UndoRedoButton } from "../../tiptap-ui/undo-redo-button"

// // --- Icons ---
// import { ArrowLeftIcon } from "../../tiptap-icons/arrow-left-icon"
// import { HighlighterIcon } from "../../tiptap-icons/highlighter-icon"
// import { LinkIcon } from "../../tiptap-icons/link-icon"
// import { DrawingBoardIcon } from "../../tiptap-drawing/icon"

// // --- Hooks ---
// import { useMobile } from "@/tiptap/hooks/use-mobile"
// import { useWindowSize } from "@/tiptap/hooks/use-window-size"

// // --- Components ---
// import { ThemeToggle } from "../../tiptap-templates/simple/theme-toggle"

// // --- Lib ---
// import { handleImageUpload, MAX_FILE_SIZE } from "@/tiptap/lib/tiptap-utils"

// // --- Styles ---
// import "../../tiptap-templates/simple/simple-editor.scss"

// import content from "../../tiptap-templates/simple/data/content.json"

// // Add this new style import for the floating menu
// import "./floating-menu.scss"

// interface DrawingBoardButtonProps {
//   text?: string
// }

// // Create a new Drawing Board Button component
// const DrawingBoardButton: React.FC<DrawingBoardButtonProps> = ({ text = "Draw" }) => {
//   const { editor } = React.useContext(EditorContext)
  
//   if (!editor) {
//     return null
//   }
  
//   const handleClick = () => {
//     editor.chain().focus().insertDrawingBoard().run()
//   }
  
//   return (
//     <Button 
//       data-style="ghost" 
//       onClick={handleClick} 
//       title="Insert Drawing Board"
//     >
//       <DrawingBoardIcon className="tiptap-button-icon" />
//       {text && <span className="tiptap-button-text">{text}</span>}
//     </Button>
//   )
// }

// // New component for the floating menu buttons
// const FloatingMenuContent: React.FC = () => {
//   const { editor } = React.useContext(EditorContext)
  
//   if (!editor) {
//     return null
//   }
  
//   return (
//     <div className="floating-menu-container">
//       <ToolbarGroup>
//         <HeadingDropdownMenu levels={[1, 2, 3]} />
//         <NodeButton type="blockquote" />
//         <NodeButton type="codeBlock" />
//         <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
//         <ImageUploadButton text="" />
//         <DrawingBoardButton text="" />
//       </ToolbarGroup>
//     </div>
//   )
// }

// // New component for the bubble menu that appears when text is selected
// const BubbleMenuContent: React.FC = () => {
//   const { editor } = React.useContext(EditorContext)
  
//   if (!editor) {
//     return null
//   }
  
//   return (
//     <div className="bubble-menu-container">
//       <ToolbarGroup>
//         <MarkButton type="bold" />
//         <MarkButton type="italic" />
//         <MarkButton type="strike" />
//         <MarkButton type="code" />
//         <MarkButton type="underline" />
//         <HighlightPopover />
//         <LinkPopover />
//       </ToolbarGroup>
//     </div>
//   )
// }

// interface MainToolbarContentProps {
//   onHighlighterClick: () => void
//   onLinkClick: () => void
//   isMobile: boolean
// }

// const MainToolbarContent: React.FC<MainToolbarContentProps> = ({
//   onHighlighterClick,
//   onLinkClick,
//   isMobile,
// }) => {
//   return (
//     <>
//       <Spacer />

//       <ToolbarGroup>
//         <UndoRedoButton action="undo" />
//         <UndoRedoButton action="redo" />
//       </ToolbarGroup>
//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <HeadingDropdownMenu levels={[1, 2, 3, 4]} />
//         <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
//         <NodeButton type="codeBlock" />
//         <NodeButton type="blockquote" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <MarkButton type="bold" />
//         <MarkButton type="italic" />
//         <MarkButton type="strike" />
//         <MarkButton type="code" />
//         <MarkButton type="underline" />
//         {!isMobile ? (
//           <HighlightPopover />
//         ) : (
//           <HighlighterButton onClick={onHighlighterClick} />
//         )}
//         {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <MarkButton type="superscript" />
//         <MarkButton type="subscript" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <TextAlignButton align="left" />
//         <TextAlignButton align="center" />
//         <TextAlignButton align="right" />
//         <TextAlignButton align="justify" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <ImageUploadButton text="Add" />
//         <DrawingBoardButton text="Draw" />
//       </ToolbarGroup>

//       <Spacer />

//       {isMobile && <ToolbarSeparator />}

//       <ToolbarGroup>
//         <ThemeToggle />
//       </ToolbarGroup>
//     </>
//   )
// }

// interface MobileToolbarContentProps {
//   type: "highlighter" | "link"
//   onBack: () => void
// }

// const MobileToolbarContent: React.FC<MobileToolbarContentProps> = ({
//   type,
//   onBack,
// }) => (
//   <>
//     <ToolbarGroup>
//       <Button data-style="ghost" onClick={onBack}>
//         <ArrowLeftIcon className="tiptap-button-icon" />
//         {type === "highlighter" ? (
//           <HighlighterIcon className="tiptap-button-icon" />
//         ) : (
//           <LinkIcon className="tiptap-button-icon" />
//         )}
//       </Button>
//     </ToolbarGroup>

//     <ToolbarSeparator />

//     {type === "highlighter" ? <HighlightContent /> : <LinkContent />}
//   </>
// )

// export function SimpleEditor() {
//   const isMobile = useMobile()
//   const windowSize = useWindowSize()
//   const [mobileView, setMobileView] = React.useState<
//     "main" | "highlighter" | "link"
//   >("main")
//   const [rect, setRect] = React.useState<
//     Pick<DOMRect, "x" | "y" | "width" | "height">
//   >({
//     x: 0,
//     y: 0,
//     width: 0,
//     height: 0,
//   })
//   const toolbarRef = React.useRef<HTMLDivElement>(null)

//   React.useEffect(() => {
//     const updateRect = () => {
//       setRect(document.body.getBoundingClientRect())
//     }

//     updateRect()

//     const resizeObserver = new ResizeObserver(updateRect)
//     resizeObserver.observe(document.body)

//     window.addEventListener("scroll", updateRect)

//     return () => {
//       resizeObserver.disconnect()
//       window.removeEventListener("scroll", updateRect)
//     }
//   }, [])

  
  
//   const editor = useEditor({
//     immediatelyRender: false,
//     editorProps: {
//       attributes: {
//         autocomplete: "off",
//         autocorrect: "off",
//         autocapitalize: "off",
//         "aria-label": "Main content area, start typing to enter text.",
//       },
//     },
    
//     extensions: [
//       StarterKit,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Underline,
//       TaskList,
//       TaskItem.configure({ nested: true }),
//       Highlight.configure({ multicolor: true }),
//       Image,
//       Typography,
//       Superscript,
//       Subscript,
//       Selection,
//       ImageUploadNode.configure({
//         accept: "image/*",
//         maxSize: MAX_FILE_SIZE,
//         limit: 3,
//         upload: handleImageUpload,
//         onError: (error) => console.error("Upload failed:", error),
//       }),
//       TrailingNode,
//       Link.configure({ openOnClick: false }),
//       DrawingBoardNode, // Add the Drawing Board extension
//     ],
//     content: content,
//   })

//   React.useEffect(() => {
//     const checkCursorVisibility = () => {
//       if (!editor || !toolbarRef.current) return

//       const { state, view } = editor
//       if (!view.hasFocus()) return

//       const { from } = state.selection
//       const cursorCoords = view.coordsAtPos(from)

//       if (windowSize.height < rect.height) {
//         if (cursorCoords && toolbarRef.current) {
//           const toolbarHeight =
//             toolbarRef.current.getBoundingClientRect().height
//           const isEnoughSpace =
//             windowSize.height - cursorCoords.top - toolbarHeight > 0

//           // If not enough space, scroll until the cursor is the middle of the screen
//           if (!isEnoughSpace) {
//             const scrollY = 
//               cursorCoords.top - windowSize.height / 2 + toolbarHeight
//             window.scrollTo({
//               top: scrollY,
//               behavior: "smooth",
//             })
//           }
//         }
//       }
//     }

//     checkCursorVisibility()
//   }, [editor, rect.height, windowSize.height])

//   React.useEffect(() => {
//     if (!isMobile && mobileView !== "main") {
//       setMobileView("main")
//     }
//   }, [isMobile, mobileView])

//   return (
//     <EditorContext.Provider value={{ editor }}>
//       <Toolbar
//         ref={toolbarRef}
//         style={
//           isMobile
//             ? {
//               bottom: `calc(100% - ${windowSize.height - rect.y}px)`,
//             }
//             : {}
//         }
//       >
//         {mobileView === "main" ? (
//           <MainToolbarContent
//             onHighlighterClick={() => setMobileView("highlighter")}
//             onLinkClick={() => setMobileView("link")}
//             isMobile={isMobile}
//           />
//         ) : (
//           <MobileToolbarContent
//             type={mobileView === "highlighter" ? "highlighter" : "link"}
//             onBack={() => setMobileView("main")}
//           />
//         )}
//       </Toolbar>

//       {editor && (
//         <>
//           {/* Floating Menu - appears at empty lines */}
//           <FloatingMenu
//             editor={editor}
//             tippyOptions={{ 
//               duration: 200,
//               placement: 'bottom-start',
//               arrow: true
//             }}
//             shouldShow={({ editor }) => {
//               // Show only when cursor is at the beginning of an empty paragraph
//               const { selection } = editor.state
//               const { $anchor } = selection
//               const isEmptyParagraph = 
//                 $anchor.parent.type.name === 'paragraph' && 
//                 $anchor.parent.content.size === 0
              
//               return isEmptyParagraph
//             }}
//           >
//             <FloatingMenuContent />
//           </FloatingMenu>

//           {/* Bubble Menu - appears when text is selected */}
//           <BubbleMenu
//             editor={editor}
//             tippyOptions={{
//               duration: 200,
//               placement: 'top',
//               arrow: true
//             }}
//           >
//             <BubbleMenuContent />
//           </BubbleMenu>
//         </>
//       )}

//       <div className="content-wrapper">
//         <EditorContent
//           editor={editor}
//           role="presentation"
//           className="simple-editor-content"
//         />
//       </div>
//     </EditorContext.Provider>
//   )
// }
"use client"
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import * as React from "react"
import { EditorContent, EditorContext, useEditor } from "@tiptap/react"
import { BubbleMenu, FloatingMenu } from '@tiptap/react'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit"
import { Image } from "@tiptap/extension-image"
import { TaskItem } from "@tiptap/extension-task-item"
import { TaskList } from "@tiptap/extension-task-list"
import { TextAlign } from "@tiptap/extension-text-align"
import { Typography } from "@tiptap/extension-typography"
import { Highlight } from "@tiptap/extension-highlight"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { Underline } from "@tiptap/extension-underline"
import { Plugin } from 'prosemirror-state'

// --- Table Extensions ---
import Table from "@tiptap/extension-table"
import { TableRow } from "@tiptap/extension-table-row"
import { TableHeader } from "@tiptap/extension-table-header"
import { TableCell } from "@tiptap/extension-table-cell"

// --- Custom Extensions ---
import { Link } from "../../tiptap-extension/link-extension"
import { Selection } from "../../tiptap-extension/selection-extension"
import { TrailingNode } from "../../tiptap-extension/trailing-node-extension"
import { DrawingBoardNode } from "../../tiptap-drawing/paper-extension"

// --- UI Primitives ---
import { Button } from "../../tiptap-ui-primitive/button"
import { Spacer } from "../../tiptap-ui-primitive/spacer"
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "../../tiptap-ui-primitive/toolbar"

// --- Tiptap Node ---
import { ImageUploadNode } from "../../tiptap-node/image-upload-node/image-upload-node-extension"
import "../../tiptap-node/code-block-node/code-block-node.scss"
import "../../tiptap-node/list-node/list-node.scss"
import "../../tiptap-node/image-node/image-node.scss"
import "../../tiptap-node/paragraph-node/paragraph-node.scss"
import "../../tiptap-tables/table.scss" // Import table styles
import "../../tiptap-drawing/drawing-board.scss"

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "../../tiptap-ui/heading-dropdown-menu"
import { ImageUploadButton } from "../../tiptap-ui/image-upload-button"
import { ListDropdownMenu } from "../../tiptap-ui/list-dropdown-menu"
import { TableButton } from "../../tiptap-tables/table-dropdown"
import { TableDropdownMenu } from "../../tiptap-tables/table"
import { NodeButton } from "../../tiptap-ui/node-button"
import {
  HighlightPopover,
  HighlightContent,
  HighlighterButton,
} from "../../tiptap-ui/highlight-popover"
import {
  LinkPopover,
  LinkContent,
  LinkButton,
} from "../../tiptap-ui/link-popover"
import { MarkButton } from "../../tiptap-ui/mark-button"
import { TextAlignButton } from "../../tiptap-ui/text-align-button"
import { UndoRedoButton } from "../../tiptap-ui/undo-redo-button"

// --- Icons ---
import { ArrowLeftIcon } from "../../tiptap-icons/arrow-left-icon"
import { HighlighterIcon } from "../../tiptap-icons/highlighter-icon"
import { LinkIcon } from "../../tiptap-icons/link-icon"
import { DrawingBoardIcon } from "../../tiptap-drawing/icon"
import { TableIcon } from "../../tiptap-tables/table-icon"

// --- Hooks ---
import { useMobile } from "@/tiptap/hooks/use-mobile"
import { useWindowSize } from "@/tiptap/hooks/use-window-size"

// --- Components ---
import { ThemeToggle } from "../../tiptap-templates/simple/theme-toggle"

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "@/tiptap/lib/tiptap-utils"
// Import the deleteImage function (create this file if it doesn't exist)


// --- Styles ---
import "../../tiptap-templates/simple/simple-editor.scss"
import "./floating-menu.scss"

import content from "../../tiptap-templates/simple/data/content.json"


interface DrawingBoardButtonProps {
  text?: string
}

const DrawingBoardButton: React.FC<DrawingBoardButtonProps> = ({ text = "Draw" }) => {
  const { editor } = React.useContext(EditorContext)
  
  if (!editor) {
    return null
  }
  
  const handleClick = () => {
    editor.chain().focus().insertDrawingBoard().run()
  }
  
  return (
    <Button 
      data-style="ghost" 
      onClick={handleClick} 
      title="Insert Drawing Board"
    >
      <DrawingBoardIcon className="tiptap-button-icon" />
      {text && <span className="tiptap-button-text">{text}</span>}
    </Button>
  )
}

// New component for the floating menu buttons
const FloatingMenuContent: React.FC = () => {
  const { editor } = React.useContext(EditorContext)
  
  if (!editor) {
    return null
  }
  
  return (
    <div className="floating-menu-container">
      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3]} />
        <NodeButton type="blockquote" />
        <NodeButton type="codeBlock" />
        <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
        <TableButton text="" /> {/* Add table button to floating menu */}
        <ImageUploadButton text="" />
        <DrawingBoardButton text="" />
      </ToolbarGroup>
    </div>
  )
}

// Update bubble menu to include table controls when inside a table
const BubbleMenuContent: React.FC = () => {
  const { editor } = React.useContext(EditorContext)
  
  if (!editor) {
    return null
  }
  
  const isInTable = editor.isActive('table')
  
  return (
    <div className="bubble-menu-container">
      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        <HighlightPopover />
        <LinkPopover />
        {isInTable && (
          <div className="table-controls">
            <Button 
              data-style="ghost" 
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              title="Add Column Before"
            >
              Add Col ←
            </Button>
            <Button 
              data-style="ghost" 
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              title="Add Column After"
            >
              Add Col →
            </Button>
            <Button 
              data-style="ghost" 
              onClick={() => editor.chain().focus().addRowBefore().run()}
              title="Add Row Before"
            >
              Add Row ↑
            </Button>
            <Button 
              data-style="ghost" 
              onClick={() => editor.chain().focus().addRowAfter().run()}
              title="Add Row After"
            >
              Add Row ↓
            </Button>
            <Button 
              data-style="ghost" 
              onClick={() => editor.chain().focus().deleteColumn().run()}
              title="Delete Column"
            >
              Del Col
            </Button>
            <Button 
              data-style="ghost" 
              onClick={() => editor.chain().focus().deleteRow().run()}
              title="Delete Row"
            >
              Del Row
            </Button>
          </div>
        )}
      </ToolbarGroup>
    </div>
  )
}

interface MainToolbarContentProps {
  onHighlighterClick: () => void
  onLinkClick: () => void
  isMobile: boolean
}

const MainToolbarContent: React.FC<MainToolbarContentProps> = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
}) => {
  return (
    <>
      <Spacer />

      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>
      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} />
        <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
        <NodeButton type="codeBlock" />
        <NodeButton type="blockquote" />
        <TableDropdownMenu /> {/* Add table dropdown menu */}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <HighlightPopover />
        ) : (
          <HighlighterButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="superscript" />
        <MarkButton type="subscript" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="Add" />
        <DrawingBoardButton text="Draw" />
      </ToolbarGroup>

      <Spacer />

      {isMobile && <ToolbarSeparator />}

      <ToolbarGroup>
        <ThemeToggle />
      </ToolbarGroup>
    </>
  )
}

interface MobileToolbarContentProps {
  type: "highlighter" | "link"
  onBack: () => void
}

const MobileToolbarContent: React.FC<MobileToolbarContentProps> = ({
  type,
  onBack,
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? <HighlightContent /> : <LinkContent />}
  </>
)

export function SimpleEditor() {
  const isMobile = useMobile()
  const ydoc = React.useMemo(() => new Y.Doc(), [])
  const provider = React.useMemo(
    () => new WebsocketProvider('wss://demos.yjs.dev', "gogo", ydoc),
    [ydoc]
  )
  const windowSize = useWindowSize()
  const [mobileView, setMobileView] = React.useState<
    "main" | "highlighter" | "link"
  >("main")
  const [rect, setRect] = React.useState<
    Pick<DOMRect, "x" | "y" | "width" | "height">
  >({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const toolbarRef = React.useRef<HTMLDivElement>(null)

  
  React.useEffect(() => {
    const updateRect = () => {
      setRect(document.body.getBoundingClientRect())
    }

    updateRect()

    const resizeObserver = new ResizeObserver(updateRect)
    resizeObserver.observe(document.body)

    window.addEventListener("scroll", updateRect)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("scroll", updateRect)
    }
  }, [])

  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
      },
    },
    
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      Selection,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: 'User Name', // Replace with actual user name
          color: '#ffcc00',   // Unique color per user
        },
      }),
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
      TrailingNode,
      Link.configure({ openOnClick: false }),
      
    ],
    content: content,
  })

  React.useEffect(() => {
    const checkCursorVisibility = () => {
      if (!editor || !toolbarRef.current) return

      const { state, view } = editor
      if (!view.hasFocus()) return

      const { from } = state.selection
      const cursorCoords = view.coordsAtPos(from)

      if (windowSize.height < rect.height) {
        if (cursorCoords && toolbarRef.current) {
          const toolbarHeight =
            toolbarRef.current.getBoundingClientRect().height
          const isEnoughSpace =
            windowSize.height - cursorCoords.top - toolbarHeight > 0

          // If not enough space, scroll until the cursor is the middle of the screen
          if (!isEnoughSpace) {
            const scrollY = 
              cursorCoords.top - windowSize.height / 2 + toolbarHeight
            window.scrollTo({
              top: scrollY,
              behavior: "smooth",
            })
          }
        }
      }
    }

    checkCursorVisibility()
  }, [editor, rect.height, windowSize.height])

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main")
    }
  }, [isMobile, mobileView])

  return (
    <EditorContext.Provider value={{ editor }}>
      <Toolbar
        ref={toolbarRef}
        style={
          isMobile
            ? {
              bottom: `calc(100% - ${windowSize.height - rect.y}px)`,
            }
            : {}
        }
      >
        {mobileView === "main" ? (
          <MainToolbarContent
            onHighlighterClick={() => setMobileView("highlighter")}
            onLinkClick={() => setMobileView("link")}
            isMobile={isMobile}
          />
        ) : (
          <MobileToolbarContent
            type={mobileView === "highlighter" ? "highlighter" : "link"}
            onBack={() => setMobileView("main")}
          />
        )}
      </Toolbar>

      {editor && (
        <>
          {/* Floating Menu - appears at empty lines */}
          <FloatingMenu
            editor={editor}
            tippyOptions={{ 
              duration: 200,
              placement: 'bottom-start',
              arrow: true
            }}
            shouldShow={({ editor }) => {
              // Show only when cursor is at the beginning of an empty paragraph
              const { selection } = editor.state
              const { $anchor } = selection
              const isEmptyParagraph = 
                $anchor.parent.type.name === 'paragraph' && 
                $anchor.parent.content.size === 0
              
              return isEmptyParagraph
            }}
          >
            <FloatingMenuContent />
          </FloatingMenu>

          {/* Bubble Menu - appears when text is selected */}
          <BubbleMenu
            editor={editor}
            tippyOptions={{
              duration: 200,
              placement: 'top',
              arrow: true
            }}
          >
            <BubbleMenuContent />
          </BubbleMenu>
        </>
      )}

      <div className="content-wrapper">
        <EditorContent
          editor={editor}
          role="presentation"
          className="simple-editor-content"
        />
      </div>
    </EditorContext.Provider>
  )
}