import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import FullstackDevelopment from './pages/courses/FullstackDevelopment';
import DataScience from './pages/courses/DataScience';
import DigitalMarketing from './pages/courses/DigitalMarketing';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/fullstack-development" element={<FullstackDevelopment />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;