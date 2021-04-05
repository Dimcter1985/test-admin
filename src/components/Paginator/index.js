import { Pagination } from 'react-admin';

const Paginator = props => <Pagination rowsPerPageOptions={[3, 5, 10, 100]} {...props} />

export default Paginator