import styled from 'styled-components';
import image from "../../assets/back.png";

export const Container = styled.div`
    background-color: #6DFC56;
    width: 100%;
    height: 100%;
    padding: 20px 180px 0px;
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
`
export const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
`
export const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 35px;
`
export const Li = styled.li`
    list-style: none;
`
export const A = styled.a`
    text-decoration: none;
    color: #13390D;
    font-size: 14px;
    font-weight: 500;
`

export const HeadButton = styled.button`
    background-color: transparent;
    border: 1px solid #13390D;
    cursor: pointer;
    border-radius: 4px;
    padding: 10px 16px;
    outline: none;
    color: #13390D;
    font-weight: 500;
    font-size: 14px;
`
export const Hero = styled.div`
    display: flex;
    margin-top: 60px;
`
export const HeroLeft = styled.div`
    margin-left: 15px;
`
export const H1 = styled.h1`
    width: 500px;
    font-size: 64px;
    font-weight: 700;
    color: #13390D;
    margin-bottom: 20px;
`
export const P = styled.p`
    width: 500px;
    font-size: 16px;
    font-weight: 400;
    color: #13390D;
`

export const Herobtn = styled.button`
    background-color: #13390D;
    border-radius: 4px;
    padding: 15px 55px;
    color: #fff;
    cursor: pointer;
    border: none;
    margin-top: 40px;
`

export const HeroRight = styled.div`
    
`