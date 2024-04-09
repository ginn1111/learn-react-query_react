import {QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // using the data in cache (with query-key) util over the time 
            staleTime: 10 * 1000, //ms default: 0
            retry: 3, // default: 3
            retryDelay: (atempt) => {
                console.log('atempt', atempt)
                return 1000
            }
            
        }

    },
})

export default queryClient