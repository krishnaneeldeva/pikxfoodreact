import axios from 'axios';

axios.defaults.baseURL = 'http://5c41235f.ngrok.io/api/v1';

axios.defaults.headers.common['Pragma'] = 'no-cache';
axios.defaults.headers.common['Cache-Control'] = 'no-store, must-revalidate';
axios.defaults.headers.common['Expires'] = -1;
axios.defaults.headers.common['req-source'] = 'Desktop';

export default axios;