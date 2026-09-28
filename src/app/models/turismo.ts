export interface Vagaturismo {
    id: number;
    empresa: string;
    lugar: string;
    valor: number;
    instrutorresponsavel: string;
   horariodisponivel: string;
   descricao: string;
   informacoes: string[];
   disponivel: boolean;
   poucasvagas: boolean;
   imagem: string;
}

