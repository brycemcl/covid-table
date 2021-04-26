import { default as axios } from 'axios'
import Head from 'next/head'
import Table from '../scr/atoms/Table'
export async function getServerSideProps(context) {
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
  return {
    props: { columns, data },
  }
}
const page = ({ columns, data }) => {
  return (
    <>
      <Head>
        <title>B.C. Covid data</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='' />
      </Head>
      <Table columns={columns} data={data} />
    </>
  )
}
export default page
