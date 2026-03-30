import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'

function App() {

  return <div>
    <aside className="hidden md:block bg-gray-30">
    </aside>
      <header className="flex flex-row">
        <img src={logo} alt="imagem do logo" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    <main>
      <header>
        <h1>Olá, Aluno!</h1>
        <img src={avatar} alt="imagem do avatar" />
      </header>
      <h2></h2>
      <section>
        <article>
          <h3></h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3></h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3></h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
    </main>
  </div>
}

export default App;
