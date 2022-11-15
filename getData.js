import axios from "axios";

const getData = async (number) => {
    return new Promise(async (resolve, reject) => {
        const { data: users } = await axios(
           // `https://jsonplaceholder.typicode.com/users/${number}`
           "https://jsonplaceholder.typicode.com/users/" + number
          );
        
          const { data: posts } = await axios(
            `https://jsonplaceholder.typicode.com/posts?userId=${number}`
          );        
          resolve(posts);
          resolve(users);
          })
        };


export {getData};