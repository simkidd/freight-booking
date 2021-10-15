import styled from 'styled-components';

export const MainLayout = styled.div`
    padding: 0.8rem 5rem;
    @media screen and (max-width: 768px){
        padding: 0.8rem 0.1rem;
        padding-top: 62px;
        padding-bottom:0;
    }
`

export const InnerLayout = styled.div`
    padding: 1rem 5rem;
    @media screen and (max-width: 768px){
        padding: 0.8rem 0.3rem;
    }
`

export const SectionLayout = styled.div`
    padding: 1.7rem 2rem;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 1rem;
    
    @media screen and (max-width: 768px){
        padding: 2rem 0.8rem;
    }
`