import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inPublished: false,
      order: 1
    }
  }

  togglePublished = () => {
    this.setState({
      inPublished: !this.state.inPublished
    })
  };

  render() {
    return (
      <>
        <Article title={"sdfg"} inPublished={this.inPublished} toggle={()=> this.togglePublished()} />
      </>
    )
  }
}

export default Blog;