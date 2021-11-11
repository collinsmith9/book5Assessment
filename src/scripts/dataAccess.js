






const mainContainer = document.querySelector('#container')

const applicationState = {
    users: [],
    posts: [],
    topics: []

}

export const getUserChoiceTopic = () => {
    return applicationState.userChoices.chosenTopics
}

const API = "http://localhost:8088"

export const fetchUsers = () => {
    return fetch(`${API}/users`)
    .then(response => response.json())
    .then(
        (serviceUsers) => {
            applicationState.users = serviceUsers
        }
    )
}
export const fetchPosts = () => {
    return fetch(`${API}/posts`)
    .then(response => response.json())
    .then(
        (servicePosts) => {
            applicationState.posts = servicePosts
        }
    )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (serviceTopics) => {
            applicationState.topics = serviceTopics
        }
    )
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}
export const getPosts = () => {
    return applicationState.posts.map(post => ({...post}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}


export const sendPost = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}