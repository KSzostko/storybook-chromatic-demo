import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PhotosList } from './components/PhotosLIst/PhotosList.tsx';
import './App.css';

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <PhotosList />
      </main>
    </QueryClientProvider>
  );
}

export default App
