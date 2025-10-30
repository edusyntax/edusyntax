import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import FullstackDevelopment from './pages/courses/FullstackDevelopment';
import DataScience from './pages/courses/DataScience';
import DigitalMarketing from './pages/courses/DigitalMarketing';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Terms from './pages/Terms';
import SuccessStories from './pages/SuccessStories';
import ContactPage from './pages/contact';
import UpcomingBatchesPage from './pages/Bootcamps';

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
            <Route path="/successstories" element={<SuccessStories />} />
            <Route path="/upcomingbatches" element={<UpcomingBatchesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<NotFound />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms" element={<Terms />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;