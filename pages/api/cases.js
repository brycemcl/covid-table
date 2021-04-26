import { default as axios } from 'axios'
const getData = async () => {
  let columns
  let data
  {
    const csv = await axios
      .get(
        `http://www.bccdc.ca/Health-Info-Site/Documents/BCCDC_COVID19_Dashboard_Case_Details.csv`,
      )
      .then((res) => res.data)
    const lineData = csv.split('\n').map((line) => JSON.parse(`[${line}]`))
    const headers = lineData[0]
    data = lineData
      .slice(1)
      .map((line, index) => {
        const row = {}
        line.forEach((cell, index) => {
          row[headers[index]] = cell
        })
        return { id: index, ...row }
      })
      .reverse()
      .slice(1)
    columns = headers.map((item) => {
      return {
        Header: item,
        accessor: item,
      }
    })
  }
  return { columns, data }
}

export default async (req, res) => {
  await getData()
  res.status(200).json(await getData())
}
