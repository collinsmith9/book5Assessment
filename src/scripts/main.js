import { fetchUsers, fetchPosts, fetchTopics } from "./dataAccess.js";

import { HTMLthingy } from "./htmlthingy.js";


const mainContainer = document.querySelector("#container");

const render = () => {
    fetchUsers()
    .then(() => fetchPosts())
    .then(() => fetchTopics())
    .then(
        () => {
            mainContainer.innerHTML = HTMLthingy()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


