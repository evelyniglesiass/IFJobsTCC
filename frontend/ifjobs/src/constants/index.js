// base
export {axiosInstance} from '../api/_base/axiosInstance.js';

// login e logout
export {logarApi} from  '../api/login/login.api.js';
export {logoutApi} from  '../api/logout/logout.api.js';

// cadastro
export {criarEstudanteApi} from '../api/cadastro/cadastrar-estudante.api.js';
export {criarEmpresaApi} from '../api/cadastro/cadastrar-empresa.api.js'

// empresas
export { listarEmpresasEstApi } from '../api/empresa/listar-empresa-est.api.js';

// estudantes
export { listarEstudantesEmpApi } from '../api/estudante/listar-estudantes-emp.api.js';
export { listarEstudanteEspecificoApi } from '../api/estudante/listar-estudante-especifico.api.js';
export { listarSalvosEstudantesApi } from '../api/estudante/listar-salvos-estudantes.api.js';

// vagas
export { listarVagasEmpresaApi } from '../api/vaga/listar-vagas-empresa.api.js';
export { listarVagasApi } from '../api/vaga/listar-vagas.api.js';

// curriculo
export { listarCurriculoApi } from '../api/curriculo/listar-curriculo.api.js';