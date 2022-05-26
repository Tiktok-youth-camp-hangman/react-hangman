var programming_languages = [
    "xiaodong",
    "java"
]

function randomWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export {randomWord}