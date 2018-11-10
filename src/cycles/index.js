import { cycleSignIn } from './cycles.account';
import { combineCycles } from 'redux-cycles';

export default combineCycles(cycleSignIn);
