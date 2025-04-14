import assembly from './assets/img/tsql.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>T-SQL</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>T-SQL, ou Transact-SQL, nasceu como uma extensão poderosa da linguagem SQL padrão, criada pela Microsoft e Sybase nos anos 80. Ele foi feito pra dar um upgrade no SQL puro, trazendo controle de fluxo, variáveis, tratamento de erros e muito mais — transformando simples consultas em verdadeiros scripts de programação. Desde então, T-SQL se tornou o dialeto oficial do SQL Server, sendo a espinha dorsal dos bancos de dados Microsoft. Ao longo das décadas, ele evoluiu junto com o SQL Server, ganhando novas funcionalidades e se mantendo firme no papel de cérebro por trás de milhões de sistemas corporativos, do financeiro ao hospitalar.</li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>T-SQL funciona como a mente por trás dos dados no SQL Server. Ele permite não só fazer SELECTs marotos, mas também construir lógicas completas com IFs, WHILEs, cursores e até procedimentos armazenados (os famosos stored procedures). Você pode automatizar tarefas, manipular grandes volumes de dados e até controlar transações como um maestro com sua orquestra. Tudo isso rodando direto no banco de dados, sem precisar sair pra tomar um ar. Ele é como um SQL com esteroides — ideal pra quem quer ir além da simples consulta e realmente dominar o fluxo dos dados de forma precisa e poderosa.</li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Débora / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
