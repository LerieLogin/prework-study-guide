const topics = ["HTML", "CSS", "Git", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (let x=0; x < topics.length; x++) {
        console.log (topics[x]);
    }

}

function selectTopics() {
    if (randomTopic === 'HTML'){
        console.log("lets study HTML");
    } else if (randomTopic === 'CSS') {
        console.log("lets study CSS");
    } else if (randomTopic === 'Git') {
        console.log( "lets study git");
    } else if (randomTopic === 'JavaScript') {
        console.log ("lets study Javavscript");
    } else {
        console.log("please try again")
    }
}

listTopics()
console.log("what should we try first?")
selectTopics()