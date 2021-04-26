import { useQuery } from 'react-query'
import { default as axios } from 'axios'
import Head from 'next/head'
import Table from '../scr/atoms/Table'
const getData = async () => {
  return await axios.get(`/api/cases`).then((res) => res.data)
}
const page = () => {
  const { isLoading, isError, data: fetchedData } = useQuery('data', getData)
  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>Loading Error</div>
  }
  const { columns, data } = fetchedData
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
