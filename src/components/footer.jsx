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

export default function Footer({ title }) {
  const date = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
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
          <Navegacion />
          <EnlaceHome to={"/"}>
            <h1>Hotel Gatsby</h1>
          </EnlaceHome>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #eee;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}. todos los derechos reservados &copy;{date}
      </p>
    </>
  )
}
