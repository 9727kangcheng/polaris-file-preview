import React, { useContext } from 'react';
import { LinkButton } from './common';
import styled from 'styled-components';
import { IStyledProps } from '../types';
import { DocViewerContext } from '../state';


const NotRender = () => {
  const { state } = useContext(DocViewerContext);
 
  const { currentDocument } = state;
  return (
    <Contanier>
      <Content>
        <div className="title">.{currentDocument?.suffix} {('notPreview')}</div>
        <div className="desc">{('localDown')}</div>
        <DownloadButton
          id="no-renderer-download"
          href={currentDocument?.uri}
          download={currentDocument?.uri}>
          {('downLoad')}
        </DownloadButton>
      </Content>
    </Contanier>
  );
};

export default NotRender;

const Contanier = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 870px;
  height: 567px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
  .notFileIcon {
    margin-bottom: 30px;
    .pol-enclosure-icon{
      font-size:  100px;
    }
  }
  .title {
    color: ${(props) => props.theme.text_primary};
  }
  .desc {
    font-size: 14px;
    color: ${(props) => props.theme.text_tertiary};
    margin-bottom: 40px;
  }
`;

const DownloadButton = styled(LinkButton)`
  width: 157px;
  height: 40px;
  border-radius: 2px;
  background-color: ${(props: IStyledProps) => props.theme.btn_color};
  color: ${(props) => props.theme.text_secondary};
  @media (max-width: 768px) {
    width: 85px;
    height: 30px;
    font-size: 14px;
  }
`;
