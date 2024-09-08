import styled from "styled-components";

export const Container = styled.footer`
  .footer__container {
    display: grid;
    gap: 4rem 2rem;
  }

  .footer__logo {
    margin-bottom: 3rem;
  }

  .footer__logo img {
    max-width: 5rem;
  }

  .footer__logo .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .footer__logo span {
    display: flex;
    font-size: ${({ theme }) => theme.SIZE.MEDIUM};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
  }

  .footer__col .section__description {
    max-width: 35rem;
  }

  .footer__socials {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .footer__socials a {
    font-size: ${({ theme }) => theme.SIZE.LARGER};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    text-decoration: none;
  }

  .footer__socials a:hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
  }

  .footer__col h4 {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.SIZE.LARGER};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
  }

  .footer__links {
    display: grid;
    gap: 1rem;
  }

  .footer__links a {
    color: ${({ theme }) => theme.TEXT_COLORS.LIGHT};
    text-decoration: none;
    font-size: ${({ theme }) => theme.SIZE.MEDIUM};
  }

  .footer__links a:hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .footer__bar {
    padding: 1rem;
    font-size: ${({ theme }) => theme.SIZE.SMALLER};
    color: ${({ theme }) => theme.TEXT_COLORS.LIGHT};
    text-align: center;
  }

  @media (min-width: 540px) {
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .footer__container {
      grid-template-columns: repeat(5, 1fr);
    }

    .footer__col:nth-child(1) {
      grid-column: 1 / 3;
    }
  }
`;
