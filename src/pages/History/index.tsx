import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return <HistoryContainer>
    <h1>Meu histórico</h1>

    <HistoryList>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Projeto 1</td>
            <td>20 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tr>
          <tr>
            <td>Projeto 2</td>
            <td>30 minutos</td>
            <td>Há 1 mês</td>
            <td>Em andamento</td>
          </tr>
          <tr>
            <td>Projeto 3</td>
            <td>30 minutos</td>
            <td>Há 1 mês</td>
            <td>Em andamento</td>
          </tr>
          <tr>
            <td>Projeto 4</td>
            <td>30 minutos</td>
            <td>Há 1 mês</td>
            <td>Em andamento</td>
          </tr>
          <tr>
            <td>Projeto 5</td>
            <td>30 minutos</td>
            <td>Há 1 mês</td>
            <td>Em andamento</td>
          </tr>
          <tr>
            <td>Projeto 6</td>
            <td>30 minutos</td>
            <td>Há 1 mês</td>
            <td>Em andamento</td>
          </tr>
        </tbody>
      </table>
    </HistoryList>
  </HistoryContainer>
}
