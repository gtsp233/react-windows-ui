import React, { useState } from 'react'
import { NavPageContainer, InputText, TextArea, InputSearchBox } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { InputTextImportCode, InputTextUsageCode, InputTextStatusUsageCode,
  InputTextPasswordUsageCode, InputTextLabelUsageCode, InputDateUsageCode, ExampleUsageCode } from './codes'
import PropsView from './props-view'

const InputGroupDocs = () => {
  const [inputVal, setInputVal] = useState("Inputs");

  const _onChange = (value) => {
    setInputVal(value);
  }

  // const kk = useRef();
  // useEffect(()=> {
  //   console.log(kk.current.value);
  // }, [])

  return (
    <NavPageContainer
      hasPadding
      animateTransition={false}>
      <h1>{inputVal}</h1>
      <p className="font-size-18px">The <span className="app-color-primary">Input</span> elements are used to create interactive controls for forms in order to accept data from the user.</p>

      <InputText
        clearButton={true}
        value={inputVal}
        onChange={(e) => _onChange(e.target.value)}
        // onClearButtonClick={() => {}}
      />
      <span>&nbsp;&nbsp;  Edit Text.</span>
      <br/><br/>
      <details>
        <summary>Example Usage</summary>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {ExampleUsageCode}
        </SyntaxHighlighter>
      </details>

      <h1>InputText</h1>
      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <InputText
        clearButton={true}
        placeholder="Enter a text"
        tooltip="InputText tooltip title"
      />

      {/* <InputSearchBox
        placeholder="Enter to Search"
        suggest={[
          {label: "apple", link: "#", icon: <i className="icons10-baby"></i>},
          {label: "orange", link: "#", onClick: this.function},
          {label: "banana", link: "#"},
          {label: "peach", link: "#"},
        ]}
      /> */}

      <br/><br/>


      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextUsageCode}
      </SyntaxHighlighter>

      <h2>Input Status</h2>

      <InputText
        placeholder="Enter a text success"
        setStatus="success"/>
      <br/><br/>
      <InputText
        placeholder="Enter a text danger"
        setStatus="danger"
        />
      <br/><br/>
      <InputText
        placeholder="Enter a text loading"
        setStatus="loading"/>
      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextStatusUsageCode}
      </SyntaxHighlighter>

      <h2>Input Password</h2>

      <InputText
        type="password"
        placeholder="Enter a password"/>
      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextPasswordUsageCode}
      </SyntaxHighlighter>

      <h2>Input Label</h2>

      <InputText
        width={225}
        label="label"
        placeholder="Enter a text"/>
      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextLabelUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <PropsView />

      <div className="app-hr"></div>
      <h1>TextArea</h1>

      <TextArea
      
      defaultValue={"Hi"}
        resizer={false}
      />

      <h2>Import</h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputDateUsageCode}
      </SyntaxHighlighter>
      

      <h2>Input Date</h2>

      <h2>Import</h2>

      <InputText
        type="date"
        placeholder="Select Date"
        tooltip="InputDate tooltip title" />
      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputDateUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>


      

      <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
  );
}

export default InputGroupDocs;