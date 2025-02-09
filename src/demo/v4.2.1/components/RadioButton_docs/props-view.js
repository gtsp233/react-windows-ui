import React from 'react'

const PropsView = () => {
  return (
    <div className="app-table-view-container">
    <table className="app-table-view">
      <thead>
        <tr className="app-table-tr">
          <th className="" align="left">Prop</th>
          <th className="" align="left">Type</th>
          <th className="" align="left">Default</th>
          <th className="" align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="app-code">defaultChecked</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's RadioButton default checked</td>
        </tr>
        <tr>
          <td><p className="app-code">label</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's RadioButton text label</td>
        </tr>
        <tr>
          <td><p className="app-code">value</p></td>
          <td>any</td>
          <td>null</td>
          <td>Set's RadioButton value prop</td>
        </tr>
        <tr>
          <td><p className="app-code">name</p></td>
          <td>string | integer</td>
          <td>null</td>
          <td>Set's RadioButton name prop</td>
        </tr>
        <tr>
          <td><p className="app-code">tooltip</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's RadioButton hover tooptip text</td>
        </tr>
        <tr>
          <td><p className="app-code">disabled</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's RadioButton disabled state</td>
        </tr>
        <tr>
          <td><p className="app-code">onChange</p></td>
          <td>null</td>
          <td>object</td>
          <td>Set's RadioButton on change listener</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView