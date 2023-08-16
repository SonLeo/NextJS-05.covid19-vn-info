import axios from 'axios'

export default function Home({ covidData }) {
  return (
    <div>
      <h1>Vietnam's COVID-19 Infomation</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {covidData.map((entry, index) => (
            <tr key={index}>
              <td>{new Date(entry.Date).toLocaleDateString('en-US')}</td>
              <td>{entry.Confirmed}</td>
              <td>{entry.Active}</td>
              <td>{entry.Recovered}</td>
              <td>{entry.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export async function getStaticProps() {
  const response = await axios.get('http://localhost:3001/api/covid19-vn-info')
  console.log(response)
  const covidData = response.data
  return {
    props: {
      covidData
    }
  }
}