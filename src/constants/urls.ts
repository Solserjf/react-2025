const baseUrl = 'https://jsonplaceholder.typicode.com';
export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: number) => {
            return baseUrl + '/' + id;
            // return `${baseUrl}/${id}`;// а можна і так
        }
    },

    posts: {}
}

// export default urls;//2-й варіант експорту
// export{// 3-й варіант експорту
//     urls
// }