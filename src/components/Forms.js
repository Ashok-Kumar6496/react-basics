import React, {Component} from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            techStack: 'Vue'
        }
    }

    handleUserName = event => {
        this.setState({
            userName: event.target.value
        })
    }

    handleChangeComment = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTechStack = event => {
        this.setState({
            techStack: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(this.state.userName + ' ' + this.state.comments + ' ' + this.state.techStack)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserName}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleChangeComment}/>
                </div>
                <div>
                    <label>Tech Stack</label>
                    <select value={this.state.techStack} onChange={this.handleTechStack}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Forms
