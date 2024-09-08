import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem 2rem;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.SIZE.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  white-space: nowrap;
  border-radius: 3rem;
  transition: background-color 0.3s ease;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};;
  }
`;