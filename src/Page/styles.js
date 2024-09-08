import styled from "styled-components";

export const Container = styled.div`
  .section__container {
    max-width: ${({ theme }) => theme.WIDTH.MAX};
    margin: auto;
    padding: 10rem 2rem;
  }

  .section__header {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.SIZE.TITLE};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
    line-height: 6rem;
  }

  .section__subheader {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.SIZE.LARGER};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .section__description {
    color: ${({ theme }) => theme.TEXT_COLORS.LIGHT};
    line-height: 2rem;
  }
`;

export const Header = styled.header`
  background: linear-gradient(
    to bottom,
    rgba(245, 71, 72, 0.1),
    rgba(245, 71, 72, 0)
  );

  .header__container {
    display: grid;
    gap: 2rem 1rem;
    overflow: hidden;
  }

  .header__image img {
    max-width: 57.5rem;
    margin-inline: auto;
  }

  .header__tag {
    margin-bottom: 2rem;
    max-width: fit-content;
    margin-inline: auto;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    background-color: rgba(245, 71, 72, 0.1);
    border-radius: 5rem;
  }

  .header__tag img {
    max-width: 2.5rem;
  }

  .header__content h1 {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.SIZE.TITLE};
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
    text-align: center;
    line-height: 6rem;
  }

  .header__content h1 span {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .header__content .section__description {
    margin-bottom: 2rem;
    text-align: center;
  }

  .header__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .header__btns a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
  }

  .header__btns a span {
    padding: 0.4rem 1rem;
    font-size: ${({ theme }) => theme.SIZE.MEDIUM};
    color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 100%;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  }

  .header__btns a:hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  @media (min-width: 768px) {
    .header__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .header__image {
      grid-area: 1 / 2;
    }

    .header__tag {
      margin-inline-start: unset;
    }

    .header__content h1,
    .header__content .section__description {
      text-align: left;
    }

    .header__btns {
      justify-content: flex-start;
    }
  }
`;

export const Service = styled.section`
  .service__container .section__subheader {
    text-align: center;
  }

  .service__container .section__header {
    margin-bottom: 4rem;
    max-width: 60rem;
    margin-inline: auto;
    text-align: center;
  }

  .service__grid {
    display: grid;
    gap: 2rem 1rem;
  }

  .service__card img {
    max-width: 17.5rem;
    margin-inline: auto;
    margin-bottom: 2rem;
  }

  .service__card h4 {
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.SIZE.MEDIUM};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
    text-align: center;
  }

  .service__card p {
    max-width: 27.5rem;
    margin-inline: auto;
    color: ${({ theme }) => theme.TEXT_COLORS.LIGHT};
    text-align: center;
    line-height: 2rem;
  }

  @media (min-width: 540px) {
    .service__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .service__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const Client = styled.section`
  &.client__container {
    display: grid;
    gap: 2rem;
    overflow: hidden;
  }

  .client__image img {
    max-width: 55rem;
    margin-inline: auto;
  }

  .client__content .section__header {
    margin-bottom: 4rem;
  }

  .client__content .section__description {
    margin-bottom: 4rem;
    font-size: ${({ theme }) => theme.SIZE.LARGE};
  }

  .client__details {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .client__details img {
    max-width: 5rem;
    border-radius: 100%;
  }

  .client__details h4 {
    font-size: ${({ theme }) => theme.SIZE.LARGER};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
  }

  .client__details h5 {
    font-size: ${({ theme }) => theme.SIZE.SMALL};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.TEXT_COLORS.LIGHT};
  }

  .client__rating {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .client__rating span {
    font-size: ${({ theme }) => theme.SIZE.LARGER};
    color: ${({ theme }) => theme.COLORS.GOLD};
  }

  .client__rating span:last-child {
    font-size: ${({ theme }) => theme.SIZE.MEDIUM};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.TEXT_COLORS.DARK};
  }

  @media (min-width: 768px) {
    &.client__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }
`;

export const Download = styled.section`
  background-color: rgba(245, 71, 72, 0.05);
  overflow: hidden;

  .section__container {
    padding-block: 2rem 0;
    display: grid;
    gap: 2rem;
  }

  .download__image img {
    max-width: 55rem;
    margin-inline: auto;
  }

  .download__content {
    padding-block: 2rem;
  }

  .download__content .section__header {
    margin-bottom: 2rem;
  }

  .download__content .section__description {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .section__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .download__image {
      grid-area: 1 / 2;
    }
  }
`;