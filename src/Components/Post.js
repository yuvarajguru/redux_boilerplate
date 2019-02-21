import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchpost } from '../Action/Postaction';


 class Post extends Component {
     componentWillMount(){
       this.props.fetchpost();
     }

    
  render() {
      const postitem = this.props.posts.map(post => (
          <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
      ));
    return (
      <div>
        <h1>Helo!</h1>
        {postitem}
      </div>
    )
  }
}

Post.propTypes = {
  fetchpost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
posts : state.posts.items

});

export default connect (mapStateToProps , {fetchpost})(Post);