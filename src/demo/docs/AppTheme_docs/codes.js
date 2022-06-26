const AppThemeImportCode =
`import { AppTheme } from 'react-windows-ui'`;

const AppThemeUsageCode =
`<AppTheme
  color={'#16ab9c'}
  scheme={'light'}
  onColorChange={()=> {}}
  onSchemeChange={()=> {}}
/>`;

const ColorPickerItemUsageCode =
`<ColorPickerItem
  defaultChecked
  name="some name"
  color="#0078D7"
  onChange={ () => {}}
/>`;


export {
    AppThemeImportCode,
    AppThemeUsageCode,
    ColorPickerItemUsageCode
}