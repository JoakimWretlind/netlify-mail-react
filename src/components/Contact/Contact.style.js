import styled from 'styled-components';

export const ContactSection = styled.section`
    height: 100%;
    min-height: 30vh;
    width: 100%;    
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 116rem;
    margin: 7rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContactH1 = styled.h1`
  color:#fff;
  text-transform: uppercase;
  letter-spacing: .3rem;
  font-size: clamp(3rem, 8vw, 4rem);
`;

export const Form = styled.form`
    height: 100%;
    margin: 2rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;