import React, { useState } from 'react';
import api from '../../../services/api'

export default function Article({ history }) {
  const [artcl_title, setTitle] = useState('')
  const [artcl_slug, setSlug] = useState('')
  const [artcl_content, setContent] = useState('')

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="h3-reg">Nova Publicação</h3>
        </div>
        </div>

        <br/>

        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    Título
                  </span>
                </div>
                <input type="text" className="form-control" 
                id="artcl_title"
                value={artcl_title}
                placeholder="Título do artigo"
                onChange={e => setTitle(e.target.value)} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    Slug
                  </span>
                </div>
                <input type="text" className="form-control" 
                id="artcl_slug"
                value={artcl_slug}
                placeholder="Palavras-chave (separadas por vírgula)"
                onChange={e => setSlug(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}