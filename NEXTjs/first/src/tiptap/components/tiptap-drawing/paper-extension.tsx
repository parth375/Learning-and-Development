// tiptap-extension/drawing-board-extension.tsx
import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { DrawingBoard } from './paper-component'
export interface DrawingBoardOptions {
  HTMLAttributes: Record<string, any>
}

export interface StrokePoint {
  x: number
  y: number
}

export interface Stroke {
  points: StrokePoint[]
  color: string
  width: number
  tool: string
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    drawingBoard: {
      insertDrawingBoard: (attributes?: Record<string, any>) => ReturnType
    }
  }
}

export const DrawingBoardNode = Node.create<DrawingBoardOptions>({
  name: 'drawingBoard',
  group: 'block',
  selectable: true,
  draggable: true,
  
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },
  
  addAttributes() {
    return {
      width: {
        default: '100%',
      },
      height: {
        default: '300px',
      },
      strokes: {
        default: [],
        parseHTML: (element) => {
          const strokes = element.getAttribute('data-strokes')
          return strokes ? JSON.parse(strokes) : []
        },
        renderHTML: (attributes) => {
          return {
            'data-strokes': JSON.stringify(attributes.strokes),
          }
        },
      },
      backgroundColor: {
        default: '#ffffff',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="drawing-board"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes({ 'data-type': 'drawing-board' }, this.options.HTMLAttributes, HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(DrawingBoard)
  },
  
  addCommands() {
    return {
      insertDrawingBoard: (attributes = {}) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: attributes,
        })
      },
    }
  },
})