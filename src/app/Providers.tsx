'use client';


import { Provider } from 'react-redux'
import store from '@/Redux/store';
import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()


export function Providers({children} : {children: React.ReactNode}) {
     return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>
     )
}