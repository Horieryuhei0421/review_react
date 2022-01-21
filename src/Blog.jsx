import React from 'react';
import Article from './Article';
import * as FooBar from './components/Foobar';

const Blog = () => {
  return (
    <>
      <Article />
      <FooBar.Foo />
      <FooBar.Bar />
    </>
  )
}


export default Blog;