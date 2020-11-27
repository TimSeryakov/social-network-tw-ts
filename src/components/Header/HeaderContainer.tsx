import React from 'react';
import {BordersPropsType} from "../common/utils/parseBordersProps";
import {Header} from "./Header";

type HeaderContainerPropsType ={
  borders: BordersPropsType
}


export class HeaderContainer extends React.Component<HeaderContainerPropsType> {


  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

