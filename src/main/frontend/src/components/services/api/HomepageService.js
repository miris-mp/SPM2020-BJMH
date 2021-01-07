import axios from 'axios'

class HomepageService {
    getHomepageData = () => {
        return axios.get("http://localhost:8080/api/v1/user/welcome")
    }
}

export default new HomepageService()