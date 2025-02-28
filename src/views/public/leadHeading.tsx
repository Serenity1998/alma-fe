'use client'
import React from 'react';
import styled from 'styled-components';

import heroBg from '@/assets/images/hero_bg.png';
import logo from '@/assets/images/logo.png';

const Wrapper = styled.div`
  background-color: #D4D99B;
  height: 467px;
  background-image: url(${heroBg.src});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 52px;
  color: #000;
`;

const Logo = styled.img`
  width: 60px;
  margin-bottom: 50px;
`;

const LeadHeading = () => {
    return <Wrapper>
        <Container className='container container-md'>
            <Logo src={logo.src} alt='almalogo' />
            <Title>Get An Assessment</Title>
            <Title>Of Your Immigration Case</Title>
        </Container>
    </Wrapper>
}

export default LeadHeading