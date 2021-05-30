import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import PlaceHolder from '../../assets/placeholder.png'
import EthereumLogo from '../../assets/eth.png'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <Image {...rest} alt={''} src={PlaceHolder} size={size} />
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues

  if (address?.toLowerCase() === '0xcc1da2eaa0150b958fd30c3b849d9efe1d365aed') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/Qb6K6SR/favicon.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  //apesox
  if (address?.toLowerCase() === '0x9e18336e7fe1824023376b2d73e15f3cf49b4b1a') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://i.ibb.co/nnsDdYP/ape.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // mochi
  if (address?.toLowerCase() === '0x055dab90880613a556a5ae2903b2682f8a5b8d27') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://bscscan.com/token/images/mochiswap_32.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  // dogecoin
  if (address?.toLowerCase() === '0xba2ae424d960c26247dd6c32edc70b295c744c43') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://bscscan.com/token/images/dogecoin_32.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src='https://tokens.0x1.finance/images/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.png'
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  const path = `https://tokens.0x1.finance/images/${isAddress(address)}.png`

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
