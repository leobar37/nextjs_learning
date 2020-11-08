import Cors from 'cors';
import initMiddleware from '../../lib/initMiddleware';
const cors =  initMiddleware(Cors({
    methods : ['GET' , 'POSTS']
}))
export default cors;