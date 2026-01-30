export interface PowerPlant {
  ranking: number;
  id: number;
  dataGeracaoConjuntoDeDados: string;
  ideNucleoCEG: number;
  codCEG: string;
  sigUFPrincipal: string;
  dscOrigemCombustivel: string;
  sigTipoGeracao: string;
  nomEmpreendimento: string;
  mdaPotenciaOutorgadaKw: number;
  dscPropriRegimePariticipacao: string;
  dscViabilidade: string;
  dscSituacaoObra: string;
  dscJustificativaPrevisao: string;
  createdAt: string;
  filename: string;
}

export interface ApiResponse {
  titulo: string;
  totalRegistros: number;
  geradores: PowerPlant[];
}

export interface PagedResponse {
  content: PowerPlant[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

