var programming_languages = [
    "python",
    "java",
    "javascript"
]

function randomWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export {randomWord}