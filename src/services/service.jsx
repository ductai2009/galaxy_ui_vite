import request from '../utils/httpRequest';

const apiHome = async (link = '/v1/api/home', params = {}) => {
    try {
        const result = await request.get(link, {
            params: params,
        });
        return result.data;
    } catch (error) {
        console.error('Error call api search:', error);
    }
};

export default apiHome;
