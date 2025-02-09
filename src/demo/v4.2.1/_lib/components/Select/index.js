import React, { useState,useEffect, useMemo, useRef } from "react";
import { ScrollView, getScreenOffset } from "../../api";
import { useOutSideClick } from "../../hooks";

const Select = (props) => {
  const data_default = [];
  const [isOpen, setOpen] = useState(false);
  const [isReverse, setReverse] = useState("");
  const [iValue, setIValue] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [ilabel, setILabel] = useState("Select");
  const [items, setItem] = useState(data_default);

  useEffect(() => {
    //Check if any default value is given
    if(props.defaultValue) {
      let defaultLabel = items.find(x => x.value === props.defaultValue).label;
      setIValue(props.defaultValue);
      setILabel(defaultLabel);
    }
    else {
      setILabel(items[0].label);
      setIValue(items[0].value);
    }
  }, [props.data, props.defaultValue, items]);

  useMemo(() => { setItem(props.data); }, [props.data]);

  useMemo(() => { if(!isOpen) { ScrollView.enableScroll(); } }, [isOpen]);
  
  const handleItemClick = (value, label) => {
    setILabel(label);
    setIValue(value);
    toggleDropdown();
    props.onChange(value);
  }

  const toggleDropdown = () => {
    !isShown ? setItem(props.data) : setIsShown(true);
    setOpen(!isOpen);
    getScreenOffset(wrapperRef) ? setReverse(" reverse") : setReverse("");
    ScrollView.disableScroll();
  }


  const wrapperRef = useRef(null);
  //useOutSideClick(wrapperRef, () => console.log('OUTSIDE CLICKED'));
  useOutSideClick(wrapperRef, () => setOpen(false));

  return (
    <div
      className="app-dropdown-menu app-select-menu"
      onClick={toggleDropdown}
      ref={wrapperRef}>
      <span title={props.tooltip}>{ilabel}</span>
      <ul className={`app-dropdown-list ${isOpen && 'show'}${isReverse}`}>
        <li
          className="app-dropdown-list-item"
          key={"selected"}
          onClick={() => handleItemClick(iValue, ilabel)}>
            <span>{ilabel}</span>
        </li>
        {items.map((item, index) => (
        <li
          className={`app-dropdown-list-item${item.value === iValue ? ' selected':''}`}
          key={index}
          onClick={() => handleItemClick(item.value, item.label)}>
            <span>{item.icon}{item.label}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

Select.defaultProps = {
  onChange: () => {}
}

export default Select;