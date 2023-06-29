import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppContainer, SplashScreen, NavBar, NavBarLink,
        NavBarSubMenu, NavBarThemeSwitch, Dialog, InputSearchBox } from "./_lib";
import {
  Home,
  GettingStarted,

  AppThemeDocs,
  AppearanceDocs,
  ClassesDocs,
  ColorsDocs,

  NavBarDocs,
  NavBarLinkDocs,
  NavBarSubMenuDocs,
  NavPageContainerDocs,
  SplashScreenDocs,

  AccordionDocs,
  AlertDocs,
  AvatarViewDocs,
  ButtonsDocs,
  CheckboxDocs,
  ColorPickerDocs,
  CommandBarDocs,
  DialogDocs,
  Icons,
  ImageViewDocs,
  InputGroupDocs,
  LinkDocs,
  LoadersDocs,
  MenuBarDocs,
  ProgressBarDocs,
  RadioButtonDocs,
  SelectBoxDocs,
  SliderBarDocs,
  SwitchDocs,
  TableViewDocs
} from "./pages";

import { lib_version } from "./values";
import NavBarItem from "./navbar_items.json";
import Img2 from "../assets/illustration/mountain.jpg";
import GithubIcon from "../assets/static/GithubIcon";

import "../../lib/config/app-config.css";
import "../../lib/dist/react-windows-ui.min.css";

class AppFourTwoTwo extends React.Component {

  constructor() {
    super();
    this.state = {
      showSplash: true,
      data: NavBarItem,
      filteredData: NavBarItem
    }
  }

  componentDidMount() {
    this.setState({ showSplash: false});
  }

  toggleDialog = () => {
    if(this.state.showDialog)
            this.setState({showDialog: false});
    else    this.setState({showDialog: true});
  }

  onBranchChange = () => {
    this.toggleDialog();
    setTimeout(() => { window.location.reload(); }, 500);
  }

  render() {
  return (
    <AppContainer>
      <SplashScreen
        isVisible={this.state.showSplash}
        title={"react-windows-ui"}
      />

      <Dialog
        isVisible={this.state.showDialog}
        onBackdropPress={this.toggleDialog}>
          <Dialog.Body>
            <div style={{flexDirection: "column", display:"flex"}}>
            <Link
              to="#"
              onClick={this.toggleDialog}
              className="docs-btn-branch-dialog-txt">
                <b>‣  version 4.2.2</b>
            </Link>
            <Link
              to="/v4.2.1/home"
              onClick={this.toggleDialog}
              className="docs-btn-branch-dialog-txt">
                ‣  version 4.2.1
            </Link>
            <Link
              to="/v4.2.0/home"
              onClick={this.onBranchChange}
              className="docs-btn-branch-dialog-txt">
              ‣  version 4.2.0
            </Link>
            </div>
          </Dialog.Body>
      </Dialog>

      <NavBar
        // collapsed
        title={<>React Win UI
          <Link to="#" className="docs-btn-branch-selector" onClick={this.toggleDialog}>
            <span>v{lib_version}&nbsp;<i className="icons10-angle-down"></i></span>
          </Link>
        </>}
        shadowOnScroll={true}
        titleBarMobile={
          <div style={{display: "flex", justifyContent: "space-between", width: "calc(100% - 60px)", alignItems: "center"}}>
            <span className="app-navbar-name">React-windows-ui</span>
            <span className="app-navbar-name">
              <a className="app-link" target="_blank" rel="noopener noreferrer" href="https://github.com/virtualvivek/react-windows-ui/">
                <GithubIcon width={25} height={25}/>
              </a>
            </span>
          </div>}>

        <InputSearchBox
          placeholder={`Search Docs v${lib_version}`}
          suggest={[
            {label: 'home', link: '#', icon: <i className="icons10-home"></i>},
            {label: 'alert', link: 'alerts'},
            {label: 'accordion', link: 'accordion'},
            {label: 'apperarance', link: 'appearance'},
            {label: 'avatarview', link: 'avatarview'},
            {label: 'buttons', link: 'buttons'},
            {label: 'checkbox', link: 'checkbox'},
            {label: 'commandbar', link: 'commandbar'},
            {label: 'dialogs', link: 'dialogs'},
            {label: 'icons', link: 'icons'},
            {label: 'imageview', link: 'imageview'},
            {label: 'inputtext', link: 'input_group'},
            {label: 'menubar', link: 'menubar'},
            {label: 'select', link: 'selectbox'}
          ]}
        />

        <NavBarThemeSwitch/>

        <NavBarLink
          exact
          to="home"
          text="Home"
          imgSrc={Img2}
        />
        <NavBarLink
          to="getting_started"
          text="Getting Started"
          icon={<i className="icons10-navigation"></i>}
        />

        <NavBarSubMenu title="Navigation">
          <NavBarLink
            to="navbar"
            text="NavBar"
            icon={<i className="icons10-map"></i>}
          />
          <NavBarLink
            to="navbarlink"
            text="NavBarLink"
            icon={<i className="icons10-link"></i>}
          />
          <NavBarLink
            to="navbarsubmenu"
            text="NavBarSubMenu"
            icon={<i className="icons10-angle-down"></i>}
          />
          <NavBarLink
            to="navpagecontainer"
            text="NavPageContainer"
            icon={<i className="icons10-columns"></i>}
          />
          <NavBarLink
            to="splashscreen"
            text="SplashScreen"
            icon={<i className="icons10-window"></i>}
          />
        </NavBarSubMenu>

        <h1>Utilities</h1>
        <div className="app-hr"></div>
        
        <NavBarLink
          to="apptheme"
          text="AppTheme"
          icon={<i className="icons10-fantasy"></i>}
        />
        <NavBarLink
          to="appearance"
          text="Appearance"
          icon={<i className="icons10-sun"></i>}
        />
        <NavBarLink
          to="utilities"
          text="Classes"
          icon={<i className="icons10-puzzle"></i>}
        />
        <NavBarLink
          to="colors"
          text="Colors"
          icon={<i className="icons10-color-palette"></i>}
        />

        <h1>Components</h1>
        <div className="app-hr"></div>

        {this.state.filteredData.map((item, key) => {
          return <NavBarLink
                    key={key}
                    to={item.to}
                    text={item.text}
                    exact={item.exact}
                    showBadge={item.showBadge}
                    icon={<i className={item.icon}></i>}
                  />
          })
        }
            
        </NavBar>

        <Routes>
          <Route path="home" element={<Home/>}  exact />
          <Route path='getting_started' element={<GettingStarted/>} />

          {/* Utilities */}

          <Route path='colors' element={<ColorsDocs/>} />
          <Route path='utilities' element={<ClassesDocs/>} />

          <Route path='navbar' element={<NavBarDocs/>} />
          <Route path='navbarlink' element={<NavBarLinkDocs/>} />
          <Route path='navbarsubmenu' element={<NavBarSubMenuDocs/>} />
          <Route path='navpagecontainer' element={<NavPageContainerDocs/>} />
          <Route path='splashscreen' element={<SplashScreenDocs/>} />

          {/* Components */}

          <Route path='accordion' element={<AccordionDocs/>} />
          <Route path='alerts' element={<AlertDocs/>} />
          <Route path='apptheme' element={<AppThemeDocs/>} />
          <Route path='appearance' element={<AppearanceDocs/>} />
          <Route path='avatarview' element={<AvatarViewDocs/>} />
          <Route path='buttons' element={<ButtonsDocs/>} />
          <Route path='checkbox' element={<CheckboxDocs/>} />
          <Route path='colorpicker' element={<ColorPickerDocs/>} />
          <Route path='commandbar' element={<CommandBarDocs/>} />
          <Route path='dialogs' element={<DialogDocs/>} />
          <Route path='imageview' element={<ImageViewDocs/>} />
          <Route path='input_group' element={<InputGroupDocs/>} />
          <Route path='links' element={<LinkDocs/>} />
          <Route path='loaders' element={<LoadersDocs/>} />
          <Route path='menubar' element={<MenuBarDocs/>} />
          <Route path='progressbar' element={<ProgressBarDocs/>} />
          <Route path='radio_button' element={<RadioButtonDocs/>} />
          <Route path='selectbox' element={<SelectBoxDocs/>} />
          <Route path='sliderbar' element={<SliderBarDocs/>} />
          <Route path='switch' element={<SwitchDocs/>} />
          <Route path='tableview' element={<TableViewDocs/>} />

          <Route path='icons' element={<Icons/>} />
        </Routes>
      </AppContainer>
    )
  }
}

export default AppFourTwoTwo;