import { useEffect, useState } from 'react';
import { Outlet, Link, useNavigation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';


import useStore from '../store';
import InjectHtml from '../components/InjectHtml';


import { PageContainer, SectionContainer, SliceContainer } from '../components/Containers';
import { Header as Navbar } from '../components/Header';
import { Menu } from '../components/Menu/';

const HOST = "http://localhost:3000";

export const ToastDiv = styled.div`
& > div {
    margin-top: 56px;   

    .react-hot-toast': {
        fontWeight: 400,
        fontSize: 1rem,
        borderRadius: 5px,
        letterSpacing: 0.14px,
        boxShadow: '0px 4px 10px -4px rgba(58, 53, 65, 0.6)'
    }
  }
`;


export default function Root() {
  // const navigation = useNavigation();
  const state = useStore();
  const { fetchFiles, selected, contentSelected } = state;

  useEffect(() => {
    // console.log("Fetching exercises");
    fetchFiles(`${HOST}/exercise`);
  }, []);


  return (
    <>
      <ToastDiv>
        <Toaster position='top-center' reverseOrder={false} />
      </ToastDiv>
      <PageContainer>
        <Navbar />
        <SectionContainer>
          <Menu />
          <SliceContainer>
            <Outlet />
            <InjectHtml />
          </SliceContainer>
        </SectionContainer>
      </PageContainer>
    </>
  );
}
