import { Route, Routes } from "react-router-dom";
import { Profile } from "./profile/profile";
import { Main } from "../main/main";
import { HR } from "../main/hr/hr";
import { Marketing } from "../main/marketing/marketing";
import { IT } from "../main/it/it";
import { Form } from "../main/form/form";
import { Phonebook } from "../main/phonebook/phonebook";
import { Search } from "./search/search";
import {
  HeaderBlock,
  HeaderLink,
  HeaderList,
  HeaderNav,
  HeaderSearch,
} from "./header.styled";

export const Header = () => {
   const getActive = ({isActive}) => { 
     return { color: isActive ? "#fff" : "#000" };
   }; 
  return (
    <>
      <HeaderBlock>
        <HeaderNav>
          <h1>Denuo portal</h1>
          <HeaderList>
            <HeaderLink to="/main" style={getActive}>
              Main
            </HeaderLink>
            <HeaderLink to="/hr" style={getActive}>
              HR
            </HeaderLink>
            <HeaderLink to="/marketing" style={getActive}>
              Marketing
            </HeaderLink>
            <HeaderLink to="/it" style={getActive}>
              IT
            </HeaderLink>
            <HeaderLink to="/form" style={getActive}> 
              Form
            </HeaderLink>
            <HeaderLink to="/phonebook" style={getActive}>
              Phone Book
            </HeaderLink>
          </HeaderList>
        </HeaderNav>
        <HeaderSearch>
          <Search />
          <Profile />
        </HeaderSearch>
      </HeaderBlock>
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/hr" element={<HR />}></Route>
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/it" element={<IT />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/phonebook" element={<Phonebook />}></Route>
      </Routes>
    </>
  );
};
