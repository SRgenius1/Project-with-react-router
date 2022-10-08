import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {blogdata} from './blogdata';
import {useAuth} from './auth';

export function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const auth = useAuth();

    const blogpost = blogdata.find(post => post.slug === slug);
    
    const returnToBlog = () => {
      navigate('/blog');
    }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
      {auth.user?.isAdmin && <button>Editar blog</button>}
    </>
  );
}

