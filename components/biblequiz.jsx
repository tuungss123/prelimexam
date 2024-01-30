
const Correct = () => {
    return(<h2 className="correct">Correct!</h2>)
}
const Incorrect = () => {
    return(<h2 className="incorrect">Incorrect!</h2>)
}


const Bible = (props) => {
    const answer = props.answer

    if (answer){
        return(<div className="main">
            <div className="content">
        <h1>The Bible Quiz</h1>
        <p>The Bible Consists of the Old and New Testaments</p>
        <Correct/>
        <p>Moses led the Israelites out of Egypt</p>
        <Correct/>
        <p>The Sermon on the Mount is found in the Book of Luke</p>
        <Incorrect/>
        </div>
        </div>)
        
    }
    else{
        return(<div className="main">
            <div className="content">
        <h1>The Bible Quiz</h1>
        <p>The Bible Consists of the Old and New Testaments</p>
        <p>Moses led the Israelites out of Egypt</p>
        <p>The Sermon on the Mount is found in the Book of Luke</p>
        </div>
        </div>)
    }

    

}


export default Bible