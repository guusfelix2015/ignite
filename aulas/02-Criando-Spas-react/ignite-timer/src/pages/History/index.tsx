import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há dois meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}