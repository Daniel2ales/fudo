import styled from "styled-components";

export const Container = styled.section`
  .menu__container {
    .section__header {
      max-width: 55rem;
    }
  }

  .swiper {
    width: 100%;
    margin-top: 4rem;
  }

  .swiper-slide {
    max-width: 45rem;
  }

  .menu__card {
    position: relative;
    isolation: isolate;
    border-radius: 1rem;
    overflow: hidden;
  }

  .menu__card img {
    width: 100%; 
    height: auto; 
    transition: transform 0.3s ease-in-out; 
  }

  .menu__card:hover img {
    transform: scale(1.1); 
  }

  .menu__card__details {
    position: absolute;
    width: 100%;
    height: 75%;
    bottom: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
    z-index: 1;
  }

  .menu__card__details h4 {
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.SIZE.LARGE};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .menu__card__details h5 {
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.SIZE.LARGER};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .menu__card__details h5 span {
    margin-right: 1rem;
    font-size: ${({ theme }) => theme.SIZE.MEDIUM};
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  .menu__card__details a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none; 
    transition: color 0.3s ease; 
  }

  .menu__card__details a:hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
