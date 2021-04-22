import { default as axios } from 'axios'
import Head from 'next/head'
import Table from '../scr/atoms/Table'
export async function getStaticProps(context) {
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
    data = lineData.slice(1).map((line) => {
      const row = {}
      line.forEach((cell, index) => {
        row[headers[index]] = cell
      })
      return row
    })
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
        <title>Change me</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='' />
      </Head>
      {/* {typeof window !== 'undefined' && <Table columns={columns} data={data} />} */}
      <Table columns={columns} data={data} />
    </>
  )
}
export default page
