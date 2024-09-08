// EX: ${({ theme }) => theme.FONT.FAMILY};

export default {
  COLORS: {
    PRIMARY: "#f54748",         // Cor principal
    PRIMARY_DARK: "#d83e3e",    // Cor principal mais escura
    ORANGE: "#fdc55e",          // Cor secundaria
    GOLD: "#daa520",            // Cor Dourada
    WHITE: "#ffffff",           // Cor branca
  },

  TEXT_COLORS: {
    DARK: "#2e2e2e",            // Cor do texto escuro
    LIGHT: "#595959",           // Cor do texto claro
    EXTRA_LIGHT: "#f3f4f6",     // Cor de fundo extra clara
  },

  WIDTH: {
    MAX: "120rem",              // Largura máxima padrão
  },

  SIZE: {
    SMALLER: "1.2rem",          // Tamanho menor
    SMALL: "1.4rem",            // Tamanho pequeno
    MEDIUM: "1.6rem",           // Tamanho médio
    LARGE: "1.8rem",            // Tamanho grande
    LARGER: "2rem",             // Tamanho maior
    TITLE: "5rem",              // Tamanho da fonte para o título principal
    
  },

  FONT: {
    FAMILY: "'Poppins', sans-serif",  
    WEIGHT: {
      LIGHT: 300,               // Peso leve
      NORMAL: 400,              // Peso normal
      MEDIUM: 500,              // Peso médio
      SEMI_BOLD: 600,           // Peso semi-negrito
      BOLD: 700,                // Peso negrito
      EXTRA_BOLD: 800,          // Peso extra-negrito
      BLACK: 900,               // Peso preto
    },
  }
};