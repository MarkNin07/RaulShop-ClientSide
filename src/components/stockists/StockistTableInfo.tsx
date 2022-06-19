import React from 'react'
import { stockistType } from '../../state/slices/ProviderSlice'

type stockistPropsType = {
    props: stockistType
}

const StockistTableInfo : React.FC<stockistPropsType> = ({props}) => {
  return (
      <tbody>
          <tr>
              <td>{props.stockistId}</td>
              <td>{props.stockistName}</td>
              <td>{props.stockistPersonalId}</td>
              <td>{props.phoneNumber}</td>
          </tr>
      </tbody>
  )
}

export default StockistTableInfo