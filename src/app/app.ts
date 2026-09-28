import { Component, signal } from '@angular/core';
import { Cabecalho } from "./components/cabecalho/cabecalho";
import { Rodape } from "./components/rodape/rodape";
import { CardTurismo } from './components/cad-turismo/cad-turismo';
import { Vagaturismo } from './models/turismo';

@Component({
  imports: [Cabecalho, Rodape, CardTurismo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

titulo: string ='inscrições em destaque';
subtitulo: string ='conheça algumas delas';

nomeUsuario: string = '';
  usuarioLogado: boolean = false;

  alterarLogin(nome?: string): void {

    if (!this.usuarioLogado) {
      
      if (!nome || nome.trim() === '') {
        alert('Por favor, insira um nome válido para entrar.');
        return; 
      }

      this.nomeUsuario = nome.trim();
      this.usuarioLogado = true;
    } else {
      this.usuarioLogado = false;
      this.nomeUsuario = '';
    }
  }


vagasturismo: Vagaturismo[] = [
  {id: 1,
    empresa:'GRGiza Tur.',
    lugar: 'Cristo Redentor',
    valor: 150,
    instrutorresponsavel: 'Roberto Augusto da Silva',
    horariodisponivel:'8h às 11h / seg a sex',
    descricao: 'Um dos maiores símbolos do Brasil, localizado no Morro do Corcovado, no Rio de Janeiro. Um lugar marcado pela fé, pela história e por uma das mais belas vistas da cidade.',
    disponivel: true,
    poucasvagas: false,
    imagem: 'https://images.openai.com/static-rsc-4/4AM1w_MGrHtGTITn7Wx3PoaritiYPI19zOPcoOOiAUIyRG0zUhQ_xAYV6iErTbMJVhriSSnv2RO-i3lIpvg62ASKeX5kI0g7XaQ2qJPVpGL-5Rm-TK7epFDmeYyAzBkFqR6c3m5tlQTfokqg0M1Rf8gk9mXwJdwa2sKGKxCBEvlLnEDJQ1YORXLwGwQo8bna?purpose=fullsize', 
    informacoes: ['📍 Localização: Morro do Corcovado, Rio de Janeiro.','📏 Altura: cerca de 30 metros, chegando a aproximadamente 38 metros com o pedestal.','📅 Inauguração: 12 de outubro de 1931.','🗿 Material: concreto armado, revestido com pequenas pedras de pedra-sabão.','🙏 Símbolo: representa fé, paz e acolhimento.','🌎 Reconhecimento: um dos monumentos mais famosos do Brasil e do mundo.','👀 Vista: permite observar a Baía de Guanabara, o Pão de Açúcar e diversas áreas do Rio de Janeiro.','🤔 Curiosidade: os braços abertos da estátua possuem cerca de 28 metros de envergadura.','🏗️ Construção: o projeto envolveu profissionais brasileiros e estrangeiros e levou vários anos para ser concluído.' ,'⭐ Destaque turístico: é uma das principais atrações turísticas do Rio de Janeiro.',]
  },
    {id: 2,
    empresa:'GRGiza Tur.',
    lugar: 'Cristo Redentor',
    valor: 160,
    instrutorresponsavel: 'Rogério Albuquerque',
    horariodisponivel:'15h às 18h / seg a sex',
    descricao: 'Um dos maiores símbolos do Brasil, localizado no Morro do Corcovado, no Rio de Janeiro. Um lugar marcado pela fé, pela história e por uma das mais belas vistas da cidade.',
    disponivel: true,
    poucasvagas: false,
    imagem: 'https://images.openai.com/static-rsc-4/4AM1w_MGrHtGTITn7Wx3PoaritiYPI19zOPcoOOiAUIyRG0zUhQ_xAYV6iErTbMJVhriSSnv2RO-i3lIpvg62ASKeX5kI0g7XaQ2qJPVpGL-5Rm-TK7epFDmeYyAzBkFqR6c3m5tlQTfokqg0M1Rf8gk9mXwJdwa2sKGKxCBEvlLnEDJQ1YORXLwGwQo8bna?purpose=fullsize', 
    informacoes: ['📍 Localização: Morro do Corcovado, Rio de Janeiro.','📏 Altura: cerca de 30 metros, chegando a aproximadamente 38 metros com o pedestal.','📅 Inauguração: 12 de outubro de 1931.','🗿 Material: concreto armado, revestido com pequenas pedras de pedra-sabão.','🙏 Símbolo: representa fé, paz e acolhimento.','🌎 Reconhecimento: um dos monumentos mais famosos do Brasil e do mundo.','👀 Vista: permite observar a Baía de Guanabara, o Pão de Açúcar e diversas áreas do Rio de Janeiro.','🤔 Curiosidade: os braços abertos da estátua possuem cerca de 28 metros de envergadura.','🏗️ Construção: o projeto envolveu profissionais brasileiros e estrangeiros e levou vários anos para ser concluído.' ,'⭐ Destaque turístico: é uma das principais atrações turísticas do Rio de Janeiro.',]
  },
  {id: 3,
    empresa:'GRGiza Tur.',
    lugar: 'Pão de Açucar',
    valor: 220,
    instrutorresponsavel: 'Antônio Oliveira Suáres',
    horariodisponivel:'17h às 20h / seg a sex',
    descricao: 'É um dos principais cartões-postais do Rio de Janeiro. Localizado na entrada da Baía de Guanabara, o complexo de morros oferece uma vista panorâmica da cidade, das praias e do oceano, sendo um dos lugares mais visitados por turistas no Rio.',
    disponivel: false,
    poucasvagas: true,
    imagem: 'https://images.openai.com/static-rsc-4/XUz6ZXcXcqQ4V_V-nSt7VUAE66FdDEoeMb2gfXWq8Pe9oIE0JPL6ibKq_goG6-TG-GNw1BvQS6MLXU1qBsHFQ553OtyY6DuGQnYgYVyuzccSm8Riq8-DMu5nz-WiiPn8bfKpoQK6pBKVyy8UeKhb5EKBBRKgyYQll3vAEBB-VBwqRq4KU5P5R5KdTVkxauZO?purpose=fullsize', 
    informacoes: ['📍 Localização: Urca, Rio de Janeiro.','⛰️ Altitude: o Pão de Açúcar possui aproximadamente 396 metros de altura.','🚡 Acesso: o passeio é realizado por meio de bondinhos aéreos.','🌊 Paisagem: vista para a Baía de Guanabara, praias, oceano e diversos pontos do Rio.','🏔️ Complexo: é formado principalmente pelo Morro da Urca e pelo Pão de Açúcar.','📅 Bondinho: o famoso sistema de transporte por cabo foi inaugurado em 1912.','🪨 Geologia: os morros são formados principalmente por rochas graníticas muito antigas.','🌿 Natureza: a região possui vegetação característica da Mata Atlântica.','📸 Curiosidade: o local proporciona diferentes ângulos para fotografar o Rio de Janeiro.','⭐ Destaque turístico: é um dos lugares mais emblemáticos para apreciar a paisagem carioca.',]
  },
  {id: 4,
    empresa:'GRGiza Tur.',
    lugar: 'Escada de Selarón',
    valor: 60,
    instrutorresponsavel: 'Edivaldo Pereira',
    horariodisponivel:'16h às 17h ou 11h às 12h/ seg a sex',
    descricao: 'A Escadaria Selarón é um dos pontos turísticos mais coloridos e conhecidos do Rio de Janeiro. Localizada entre os bairros da Lapa e Santa Teresa, a escadaria é famosa pelos milhares de azulejos que decoram seus degraus, formando um grande mosaico artístico.',
    disponivel: true,
    poucasvagas: false,
    imagem: 'https://images.openai.com/static-rsc-4/sMt8WF3FsK-YyCfZkSdGR-B5C2sTRob1ew735u1w2sqS_7WLAjq4dwgArvXED2NBiA8O_GQJs8P04TUHbr1agc-IlnADlbdoeeTt2FWSs-DbH-pkWhBfZyHCsnAjPeOYpBhBiPaaXaHNp9lY1rQkBgSmsckB0V1-lHfHHFXqMRuLav-D6OfM_N0qhEWCphwb?purpose=fullsize', 
    informacoes: ['📍 Localização: Rua Manuel Carneiro, entre Lapa e Santa Teresa, Rio de Janeiro.',
'🪜 Quantidade: possui 215 degraus.',
'🎨 Azulejos: é decorada com milhares de azulejos de diferentes cores, desenhos e origens.',
'👨‍🎨 Artista: a obra foi criada pelo artista chileno Jorge Selarón.',
'🏗️ Início da obra: começou em 1990 e foi sendo transformada ao longo dos anos.',
'🌎 Azulejos do mundo: muitos azulejos foram enviados por pessoas de diferentes países.',
'Homenagem ao Brasil: Selarón considerava a escadaria uma homenagem ao povo brasileiro.',
'📸 Turismo: tornou-se um dos locais mais fotografados do Rio de Janeiro.',
'🎬 Cultura: a escadaria já apareceu em videoclipes, campanhas publicitárias e produções audiovisuais.',
'⭐ Curiosidade: Selarón continuou modificando e acrescentando peças à obra durante grande parte de sua vida.',]
  },
  {id: 5,
    empresa:'GRGiza Tur.',
    lugar: 'Estádio do Maracanã',
    valor: 240,
    instrutorresponsavel: 'Josuárez kozikoski',
    horariodisponivel:'indefinido/ seg a sex',
    descricao: 'O Maracanã é um dos estádios de futebol mais famosos do mundo e um dos grandes símbolos esportivos do Brasil. Localizado no Rio de Janeiro, o estádio já recebeu grandes partidas, finais de competições internacionais e momentos históricos do futebol brasileiro.',
    disponivel: true,
    poucasvagas: false,
    imagem: 'https://imgs.search.brave.com/JqViI4xkryEHUB6AmqpFeoyxM6jLSn6wNUpCHgpkuFY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/MzgzNjQxMi9wdC9m/b3RvL2FlcmlhbC12/aWV3LW9mLW1hcmFj/YW5hLXN0YWRpdW0t/aW4tcmlvLWRlLWph/bmVpcm8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVppREE4/UEVHa0tJZ0hheVBP/T0NnRks3NXBoUGNl/ZldhMWJZLXNlOW5Q/QTg9', 
    informacoes: ['📍 Localização: Avenida Presidente Castelo Branco, Maracanã, Rio de Janeiro.',
'🏟️ Inauguração: 16 de junho de 1950.',
'⚽ Nome oficial: Estádio Jornalista Mário Filho.',
'👥 Capacidade: aproximadamente 78 mil espectadores, dependendo da configuração do evento.',
'🌎 Copa do Mundo: recebeu partidas das Copas de 1950 e 2014.',
'🏆 Final de 2014: foi palco da final da Copa do Mundo de 2014.',
'🥇 Jogos Olímpicos: recebeu as cerimônias de abertura e encerramento dos Jogos Olímpicos Rio 2016.',
'Futebol brasileiro: é tradicionalmente associado a grandes clubes cariocas, como Flamengo e Fluminense.',
'🎤 Shows: também recebe grandes eventos musicais e culturais.',
'📸 Visitação: é possível conhecer áreas internas do estádio por meio de visitas turísticas, quando disponíveis.',]
  },
  {id: 6,
     empresa:'GRGiza Tur.',
    lugar: 'Cristo Redentor + Pão de açucar + Escada de Selarón + Estádio Maracanã',
    valor: 749.99,
    instrutorresponsavel: 'Felipe Antunes',
    horariodisponivel:'8h até 14 h / data indefinida',
    descricao: 'Um pacote para visitar alguns dos lugares mais famosos do Rio + vale almoço buffet no restaurante Mirante Paineiras',
    disponivel: true,
    poucasvagas: true,
    imagem: 'https://rioup.com/wp-content/uploads/2019/07/Cristo-Redentor-Escadaria-Selaron-Bondinho-do-P%C3%A3o-de-A%C3%A7%C3%BAcar-e-Maracan%C3%A3.jpg', 
    informacoes: ['O tour se inicia no Pão de Açucar;','depois passará pela a Escada de Selarón;', 'terá um momento para o café da manhã;', 'irá ao Cristo Redentor, depois com um momento para o almoço buffet já pago;', 'e terminará com a visita ao estádio do Maracanã.',]
  },
];

}