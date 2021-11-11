import { getUsers, getTopics, sendPost } from "./dataAccess.js"

const mainContainer = document.querySelector('#container')

mainContainer.addEventListener('click', click => {
    if (click.target.id === "submitPost") {
        const userAuthor = document.querySelector("#authors").value
        const userLetter = document.querySelector("#letter").value
        // const userTopic = document.querySelector("input[name=topic]:checked").value
        const array = []
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (let i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].name)
        }
        const userRecip = document.querySelector("#recipients").value


        // can i just push selected checkboxes to an array, and have the topic property of dataToSendToAPI be an array of selected topics
        const dataToSendToAPI = {
            author: +userAuthor,
            letter: userLetter,
            topic: array,
            recipient: +userRecip
        }

        sendPost(dataToSendToAPI)

    }

})

export const form = () => {
    let html = `
    <div class="authorhtml">
        <select class="authors" id="authors">
        <option value="author">Choose an author</option>
        ${ 
            getUsers().map(
                author => {
                    return `<option value="${author.id}">${author.name}</option>`
                }
            ).join("")

        }
        </select>
    </div>
    <div class="letterhtml">
        <label class="letterlabel" for="letter">Type your letter here: </label>
        <input type="text" name="letter" class="input" id="letter" />
    </div>
    <div>
        <ul>
        ${
            getTopics().map(
            (topic) => {
             return `
                <input type="checkbox" name="${topic.topic}" value="${topic.id}" /> ${topic.topic}
            `}).join("")
        }
        
    </div>
    <div>
        <select class="recipients" id="recipients">
        <option value="recipient">Choose a recep</option>
        ${
            getUsers().map(
                recipient => {
                    return `<option value="${recipient.id}">${recipient.name}</option>`
                }
            ).join("")

        }
        </select>
    </div>

    <button class="button" id="submitPost">Submit post</button>`

    return html
}