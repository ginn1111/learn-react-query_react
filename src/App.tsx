import { useIsFetching, useQueryClient } from '@tanstack/react-query'
import './App.css'
import { QueryKeys } from './constants/query-keys'
import { useState } from 'react'
import PrefetchingComponent from './prefetching-component'
import { getData } from './libs/mocks/apis'

function App() {
  const queryClient = useQueryClient()
  const globalLoading = useIsFetching()
  const [mount, setMount] = useState(false)

  return (
    <main>
      <h1 onMouseEnter={fetchInBackground}>Learn React Query</h1>
      {mount && <PrefetchingComponent />}
      <button onClick={() => setMount(true)}>Mount</button>
      <p>{globalLoading ? '...Loading' : ''}</p>
    </main>
  )


  function fetchInBackground() {
   queryClient.prefetchQuery({queryKey: QueryKeys.getData(), queryFn: getData}) 
  }

}

export default App
