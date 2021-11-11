import { getUsers, getPosts } from "./dataAccess.js";


export const posts = () => {
    const postsArray = getPosts()
    
    
    
    let html = ""
   

    for (const post of getPosts()) {

        const topicnames = post.topic
        

        const foundRecip = getUsers().find(
            (recip) => {
                if (parseInt(post.recipient) === recip.id ) {
                    return true
                }
                return false
            }
        )
        const foundAuthor = getUsers().find(
            (author) => {
                if (parseInt(post.author) === author.id) {
                    return true
                }
                return false
            }
        )

        html += `<div class="recipname">Dear ${foundRecip.name}</div>`
        
            html += `
        
            <div class="letterhtml">${post.letter}</div>
        
            <div class ="authorhtml">From your friend ${foundAuthor.name}</div>
        
            <div class="topichtml">Topics: ${topicnames.join(", ")}</div>
                
        `
        
    }
    
    return html
}
