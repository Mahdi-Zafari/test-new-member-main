import axios from "axios";

// const getCsrfToken = async () => {
//         await axios.get("/sanctum/csrf-cookie");

//         const xsrfToken = document.cookie
//             .split('; ')
//             .find(row => row.startsWith('XSRF-TOKEN'))
//             ?.split('=')[1];

//         if (xsrfToken) {
//             axios.defaults.headers.common['X-XSRF-TOKEN'] = xsrfToken;
//         }
// };

// getCsrfToken();
