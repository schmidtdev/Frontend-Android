import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// General
  import Login from './pages/Login'
  import Articles from './pages/Articles'

// Admin
  import Dashboard from './pages/Admin/Dashboard'
  import User from './pages/Admin/User'
  import Article from './pages/Admin/Article'
  import Notification from './pages/Admin/Notification'
  import RequestService from './pages/Admin/ServiceRequest'
  import EditProfile from './pages/Admin/EditProfile'
  import QueryStudents from './pages/Admin/QueryStudents'
  import Students from './pages/Admin/Students'
  import Teachers from './pages/Admin/Teachers'
  import Frequency from './pages/Admin/FrequencyStudents'

// Teacher
  import Material from './pages/Teacher/Material'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* General */}
        <Route path="/" exact component={Login} />
        <Route path="/artigos" exact component={Articles} />
        
        {/* Admin */}
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/novoUsuario" exact component={User} />
        <Route path="/novoArtigo" exact component={Article} />
        <Route path="/novaNotificacao" exact component={Notification} />
        <Route path="/servicosRequisitados" exact component={RequestService} />
        <Route path="/editarPerfil" exact component={EditProfile} />
        <Route path="/pesquisarAlunos" exact component={QueryStudents} />
        <Route path="/alunos" exact component={Students} />
        <Route path="/professores" exact component={Teachers} />
        <Route path="/frequencia" exact component={Frequency} />

        {/* Teacher */}
        <Route path="/material" exact component={Material} />
      </Switch>
    </BrowserRouter>
  )
}