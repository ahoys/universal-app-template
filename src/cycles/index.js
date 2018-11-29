import { requestSessionCycle } from './cycles.session';
import { combineCycles } from 'redux-cycles';

export default combineCycles(requestSessionCycle);
