import React from 'react'

function ResultTable() {
  return (
    <div>
      <table>
        <thead className='table-header'>
            <tr className="table-row">
                <td>Ism</td>
                <td>Urinishlar</td>
                <td>Jamg'argan ochko</td>
                <td>Natija</td>
            </tr>
        </thead>
        <tbody>
            <tr className='table-body'>
                <td>MJ</td>
                <td>03</td>
                <td>60</td>
                <td>Passed</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
