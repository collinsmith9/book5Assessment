import { form } from "./form.js"
import { posts } from "./posts.js"


export const HTMLthingy = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="serviceForm">
        ${form()}
        </section>

        <section class="serviceRequests">
            <h2>Posts</h2>
            ${posts()}
            
        </section>
    `
}
