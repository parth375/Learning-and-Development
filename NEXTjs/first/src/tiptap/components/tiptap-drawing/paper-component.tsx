// tiptap-node/drawing-board-node/drawing-board-component.tsx
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { NodeViewProps, NodeViewWrapper } from '@tiptap/react'
import { Editor, Node } from '@tiptap/core'
import { Stroke, StrokePoint } from './paper-extension'
import './drawing-board.scss'

interface DrawingBoardAttributes {
  width: string
  height: string
  strokes: Stroke[]
  backgroundColor: string
}

// Instead of extending and redefining node, we'll create a custom props interface
interface DrawingBoardProps extends NodeViewProps {
  editor: Editor
}

export const DrawingBoard: React.FC<DrawingBoardProps> = ({ 
  node, 
  updateAttributes, 
  editor 
}) => {
  // Cast node.attrs to our expected type
  const attrs = node.attrs as unknown as DrawingBoardAttributes
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [currentStroke, setCurrentStroke] = useState<StrokePoint[]>([])
  const [strokes, setStrokes] = useState<Stroke[]>(attrs.strokes || [])
  const [tool, setTool] = useState<string>('pen')
  const [color, setColor] = useState<string>('#000000')
  const [strokeWidth, setStrokeWidth] = useState<number>(3)
  
  // Set up the canvas on mount
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (!ctx) return
      
      // Set canvas size
      const resizeCanvas = () => {
        if (!canvas || !canvas.parentElement) return
        
        const containerWidth = canvas.parentElement.clientWidth
        canvas.width = containerWidth
        canvas.height = parseInt(attrs.height)
        
        // Redraw all strokes
        drawAllStrokes()
      }
      
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)
      
      return () => {
        window.removeEventListener('resize', resizeCanvas)
      }
    }
  }, [attrs.height])
  
  // Draw all saved strokes when they change
  useEffect(() => {
    drawAllStrokes()
  }, [strokes])
  
  // Save strokes to node attributes when they change
  useEffect(() => {
    updateAttributes({ strokes })
  }, [strokes, updateAttributes])
  
  const drawAllStrokes = () => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return
    
    // Clear canvas
    ctx.fillStyle = attrs.backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // Draw all strokes
    strokes.forEach(stroke => {
      if (stroke.points.length < 2) return
      
      ctx.beginPath()
      ctx.strokeStyle = stroke.color
      ctx.lineWidth = stroke.width
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
      
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y)
      }
      
      ctx.stroke()
    })
  }
  
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | { clientX: number; clientY: number }) => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setIsDrawing(true)
    
    // Start a new stroke
    const newPoint: StrokePoint = { x, y }
    setCurrentStroke([newPoint])
  }
  
  const draw = (e: React.MouseEvent<HTMLCanvasElement> | { clientX: number; clientY: number }) => {
    if (!isDrawing || !canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Add point to current stroke
    const newPoint: StrokePoint = { x, y }
    setCurrentStroke(prev => [...prev, newPoint])
    
    // Draw current line
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = strokeWidth
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    
    if (currentStroke.length > 0) {
      ctx.moveTo(currentStroke[currentStroke.length - 1].x, currentStroke[currentStroke.length - 1].y)
      ctx.lineTo(x, y)
      ctx.stroke()
    }
  }
  
  const stopDrawing = () => {
    if (!isDrawing) return
    
    setIsDrawing(false)
    
    // Add the completed stroke to strokes
    if (currentStroke.length > 0) {
      const newStroke: Stroke = {
        points: currentStroke,
        color,
        width: strokeWidth,
        tool
      }
      
      setStrokes(prev => [...prev, newStroke])
      setCurrentStroke([])
    }
  }
  
  const handleClear = () => {
    setStrokes([])
  }

  const handleToolChange = (newTool: string) => {
    setTool(newTool)
  }
  
  return (
    <NodeViewWrapper className="drawing-board-wrapper">
      <div className="drawing-board-container">
        <div className="drawing-board-toolbar">
          <div className="tool-group">
            <button 
              className={`tool-button ${tool === 'pen' ? 'active' : ''}`} 
              onClick={() => handleToolChange('pen')}
              title="Pen"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3.6L20.4 3C19.6 2.2 18.8 2.2 18 3L6 15L3 21L9 18L21 6C21.8 5.2 21.8 4.4 21 3.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className={`tool-button ${tool === 'eraser' ? 'active' : ''}`} 
              onClick={() => handleToolChange('eraser')}
              title="Eraser"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 14L14 18M3 21H21M9 18L15 12L12 9L6 15L9 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="color-width-group">
            <input 
              type="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)}
              title="Color"
              className="color-picker"
            />
            
            <select 
              value={strokeWidth} 
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="stroke-width-select"
              title="Stroke Width"
            >
              <option value="1">Thin</option>
              <option value="3">Medium</option>
              <option value="5">Thick</option>
              <option value="8">Very Thick</option>
            </select>
          </div>
          
          <button 
            className="clear-button" 
            onClick={handleClear}
            title="Clear Canvas"
          >
            Clear
          </button>
        </div>
        
        <div className="drawing-canvas-container">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={(e) => {
              e.preventDefault()
              const touch = e.touches[0]
              startDrawing({ clientX: touch.clientX, clientY: touch.clientY })
            }}
            onTouchMove={(e) => {
              e.preventDefault()
              const touch = e.touches[0]
              draw({ clientX: touch.clientX, clientY: touch.clientY })
            }}
            onTouchEnd={stopDrawing}
            className="drawing-canvas"
          />
        </div>
      </div>
    </NodeViewWrapper>
  )
}