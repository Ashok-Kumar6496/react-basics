import React, {Component} from 'react'
import Axios from 'axios'

export class AxiosGet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMessgae: ''
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMessgae: 'Error while getting data'
                })
            })
    }

    changeTitle = () => {
        console.log("hcdjcd")
        this.setState({
            posts: [{
                userId: 23,
                title: 'sjsjsjsjsj'
            },
                {
                    userId: 34,
                    title: 'sjsshhbche34n'
                }]
        })
    }


    render() {
        const {posts, errorMessgae} = this.state
        return (
            <div>
                <h1>List of Posts</h1>
                {
                    posts.length > 0 ?
                        posts.map(post =>
                            <div key={post.id}>Post id is {post.userId} and the title is {post.body}</div>
                        ) : null
                }
                {
                    errorMessgae ? <div>{errorMessgae}</div> : null
                }
                <button onClick={this.changeTitle}>Update</button>
            </div>
        )
    }
}

export default AxiosGet
