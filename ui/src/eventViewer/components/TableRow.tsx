// Libraries
import React, {FC, CSSProperties} from 'react'

// Components
import DefaultTableField from 'src/eventViewer/components/DefaultTableField'

// Types
import {Row, FieldComponents} from 'src/eventViewer/types'

interface Props {
  row: Row
  style: CSSProperties
  fields: string[]
  fieldWidths: {[field: string]: number}
  fieldComponents: FieldComponents
}

const TableRow: FC<Props> = ({
  row,
  style,
  fields,
  fieldComponents,
  fieldWidths,
}) => {
  return (
    <div style={style}>
      <div className="event-row">
        {fields.map(field => {
          const Component = fieldComponents[field] || DefaultTableField
          const style = {flexBasis: `${fieldWidths[field]}px`}

          return (
            <div key={field} className="event-row--field" style={style}>
              <Component key={field} row={row} field={field} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableRow