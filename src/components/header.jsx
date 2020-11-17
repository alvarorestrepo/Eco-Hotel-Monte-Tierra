import React from "react"
import { css } from "@emotion/core"
import Navegacion from "./nav"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #eee;
  text-align: center;
  text-decoration: none;
`

export default function Header() {
  return (
    <>
      <header
        css={css`
          background-color: rgba(44, 62, 80);
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <EnlaceHome to={"/"}>
            <h1>Hotel Gatsby</h1>
          </EnlaceHome>
          <Navegacion />
        </div>
      </header>
    </>
  )
}
