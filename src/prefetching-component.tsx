import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import './App.css'
import { QueryKeys } from './constants/query-keys'
import { getData, updateData } from './libs/mocks/apis'



const PrefetchingComponent = () => {

  const queryClient = useQueryClient()
  const {data, isLoading, isFetching, isError, error} = useQuery({
    queryKey: QueryKeys.getData(),
    queryFn: getData
  })

  const {mutate, isPending} = useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: QueryKeys.getData()})
    }
  })

  if(isLoading)
  return <p>Loading...</p>


  if(isError) {
    return error.message
  }

  return (
    <>
    
      <p>
      {isPending ? 'Updating...' : isFetching ? 'Fetching...' : data}
    </p>
      <button onClick={() => handleEditData('newData')}>Update</button>
      <button onClick={handleGetCache}>Get cache</button>
    </>
  )


  function handleEditData(newData: string) {
    mutate(newData)
  }
  function handleGetCache() {
    console.dir(queryClient.getQueryCache().getAll())
  }
}

export default PrefetchingComponent