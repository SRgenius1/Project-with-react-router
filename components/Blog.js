import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import {blogdata} from './blogdata';

export function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <Outlet/>
      <ul>
      {blogdata.map(post => (
        <Bloglink key={post.slug} post={post}/>
      ))}
      </ul>
    </>
  );
}

function Bloglink ({post}) {
  return (
    <li><Link to={`/blog/${post.slug}`}>{post.title}</Link></li>
  );
}

