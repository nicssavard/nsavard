import * as React from 'react'
import { createEditor, Editor, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import { BaseEditor, Descendant, Element } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomElement = { type: string; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

export const Code = () => {
  const [editor] = React.useState(() => withReact(createEditor()))

  const renderElement = React.useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <div style={{ display: "grid", placeContent: "center", height: "100%" }}>
      <div style={{ width: "500px" }}>
        <Slate editor={editor} initialValue={initialValue}  >
          <Editable
            renderElement={renderElement}
            onKeyDown={event => {
              if (event.key === '`' && event.ctrlKey) {
                event.preventDefault()
                // Determine whether any of the currently selected blocks are code blocks.
                const [match] = Editor.nodes(editor, {
                  match: (n: any) => n.type === 'code',
                })
                // Toggle the block type depending on whether there's already a match.
                Transforms.setNodes(
                  editor,
                  { type: match ? 'paragraph' : 'code' },
                  { match: (n: any) => (Element as any).isElement(n) && Editor.isBlock(editor, n) }
                )
              }
            }}
          >
          </Editable>
        </Slate>
      </div>
    </div >
  )
}

const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>
}
