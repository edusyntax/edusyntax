import { CompanyLogo } from "../components/ui/CompanyLogoCard";

export const companies: CompanyLogo[] = Array.from({ length:20 }, (_, i) => ({
  name: `Logo ${i + 1}`,
  src: `/logos/${i + 1}.svg`,
}));
