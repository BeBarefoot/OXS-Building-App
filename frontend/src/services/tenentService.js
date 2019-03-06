import axios from "axios";
const Token = {
    headers: {
        authorize: localStorage.getItem("token")
    }
};
const URL = `http://localhost:4000/tenents`
const LOGIN_URL = `http://localhost:4000/user/login`


export default {

    async getTenets() {
        let response = await axios.get(URL, Token)
        return response.data
    },

    async deleteTenent(id) {
        let url = `${URL}/delete/${id}`;
        let data = await axios.delete(url, Token)
        return data
    },
    async updateTenent(id, tenent) {
        let url = `${URL}/update/${id}`;
        let data = await axios.post(url, tenent, Token)
        return data
    },
    async editTenent(id) {
        let url = `${URL}/edit/${id}`;
        let data = await axios.get(url, Token)
        return data
    },
    async addTenent(tenent) {
        let url = `${URL}/add/`;
        let data = await axios.post(url, tenent, Token)
        return data
    },
    async loginUser(user) {
        let data = await axios.post(LOGIN_URL, user)
        return data
    },

    setToken(token) {
        localStorage.setItem("token", token)
    },
    filterTenents(filter, search, tenents) {
        if (filter) {
            if (search === "All") return tenents;
            else if (search === "Has Debt")
                return tenents.filter(tenent => {
                    return tenent.debt != 0;
                });
            return tenents.filter(tenent => {
                return tenent.debt == 0;
            });
        }
        return tenents.filter(tenent => {
            return tenent.name.toLowerCase().includes(search);
        });
    }
}