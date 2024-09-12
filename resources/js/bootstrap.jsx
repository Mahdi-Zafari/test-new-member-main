// import "bootstrap";

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from "./utils/axios";
window.axios = axios;

import { __ } from "./utils/translation";
window.__ = __;

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from "laravel-echo";

import Pusher from "pusher-js";
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "reverb",
    key: import.meta.env.VITE_REVERB_APP_KEY,
    // cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? "mt1",
    wsHost:
        import.meta.env.VITE_REVERB_HOST ??
        `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? "https") === "https",
    enabledTransports: ["ws", "wss"],
});
// window.Echo.join("online")
//     .here((users) => {
//         // Handle current users already in the channel
//         console.log("Currently online:", users);
//     })
//     .joining((user) => {
//         // Handle a user joining the channel
//         console.log(user.name + " has joined.");
//     })
//     .leaving((user) => {
//         // Handle a user leaving the channel
//         console.log(user.name + " has left.");
//     });

// Echo.channel("online").listen("UserOnline", (event) => {
//     console.log(
//         `User ${event.id} is now ${event.is_online ? "online" : "offline"}`
//     );
// });
// Echo.channel("offline").listen("UserLeft", (event) => {
//     console.log(`User ${event.id} is now offline`);
// });
