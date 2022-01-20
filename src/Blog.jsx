import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inPublished: false,
      order: 1,
      count: 0

    }
  }


  componentDidMount() {
    document.getElementById('counter').addEventLister('click', this.countUp)
  }

  componentDidUpdate() {
    if(this.state.count >= 10) {
      this.setState({count: 0})
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventLister('click', this.countUp)
  }

  togglePublished = () => {
    this.setState({
      inPublished: !this.state.inPublished
    })
  };

  countUp = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <>
        <Article title={"sdfg"} 
        inPublished={this.state.inPublished} 
        toggle={()=> this.state.togglePublished()}
        count={this.state.count}
        />
      </>
    )
  }
}

export default Blog;