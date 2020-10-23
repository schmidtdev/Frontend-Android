import React, {useState,useMemo} from 'react'
import api from '../../../services/api'

import './styles.css'
import file from '../../../assets/image/file.svg'

export default function Material({ history }) {
  const [material_name, setName] = useState('')
  const [material_component, setComponent] = useState('')
  const [material, setMaterial] = useState(null)

  const preview = useMemo(() => {
    return material ? URL.createObjectURL(material) : null
  }, [material]
  )

  async function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData()
    
    data.append('material', material)
    data.append('material_name', material_name)
    data.append('material_component', material_component)

    await api.post('/insertMaterial', data)

    history.push('/')
  }

  return (
    <>
      <div className="card mt-4">
        <div className="card-body text-center">
          <h3 className="text-center">Upload de material</h3>

          <hr/>

          <form onSubmit={handleSubmit}>
            <div className="input-group mt-4">
              <div className="input-group-prepend">
                <span className="input-group-text">Título *</span>
              </div>
              <input
                id="material_name"
                placeholder="Título"
                value={material_name}
                onChange={event => setName(event.target.value)}
                className="form-control" 
              />
            </div>

            <div className="input-group mt-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Componente *</span>
              </div>
              <input
                id="material_component"
                placeholder="Componente"
                value={material_component}
                onChange={event => setComponent(event.target.value)}
                className="form-control" 
              />
            </div>

            <h5 className="mt-3">Clique para escolher o arquivo</h5>

            <label
              id="material"
              style={{ backgroundImage: `url(${preview})` }}
              className={material ? 'has-material' : ''}
            >
              <input type="file" onChange={event => setMaterial(event.target.files[0])} />
              <img src={file} alt="Selecione um arquivo" width="50" />
            </label>

            <hr/>

            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </>
  )
}