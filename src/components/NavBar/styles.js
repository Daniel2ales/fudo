import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 9;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav__header {
    padding: 1rem 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .nav__logo img {
    max-width: 5rem;
  }

  .nav__logo span {
    display: none;
  }

  .nav__menu__btn {
    font-size: ${({ theme }) => theme.SIZE.SUB_TITLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .nav__menu__btn:hover {
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
  }

  .nav__links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    transition: transform 0.5s ease;
    z-index: -1;
    transform: translateY(-100%);
  }

  .nav__links.open {
    transform: translateY(0);
  }

  .nav__links a {
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap;
  }

  .nav__links a:hover {
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
  }

  .nav__btns {
    display: none;
  }

  @media (min-width: 768px) {
    position: relative;
    padding: 2rem;
    max-width: ${({ theme }) => theme.WIDTH.MAX};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .nav__header {
      padding: 0;
      background-color: transparent;
      flex: 1;
    }

    .nav__logo img {
      max-width: 8rem;
    }

    .nav__logo span {
      display: flex;
      font-size: ${({ theme }) => theme.SIZE.MEDIUM};
      font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
      color: ${({ theme }) => theme.TEXT_COLORS.DARK};
    }

    .nav__menu__btn {
      display: none;
    }

    .nav__links {
      position: static;
      width: fit-content;
      padding: 0;
      flex-direction: row;
      gap: 3rem;
      background-color: transparent;
      transform: none;
    }

    .nav__links a {
      color: ${({ theme }) => theme.TEXT_COLORS.DARK};
    }

    .nav__links a:hover {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }

    .nav__links li:last-child {
      display: none;
    }

    .nav__btns {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }
  }
`;