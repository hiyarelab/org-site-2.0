import {
  Palette,
  Code2,
  ShoppingCart,
  Building2,
  LayoutTemplate,
  Search,
  Wrench,
  Zap,
  Server,
  Smartphone,
  Sparkles,
  Headset,
  DollarSign,
  Heart,
  Coffee,
  Scissors,
  Store,
  Hotel,
  Dumbbell,
  Shirt,
  Compass,
  type LucideIcon,
} from "lucide-react";

export type Service = { icon: LucideIcon; title: string; desc: string };
export const services: Service[] = [
  { icon: Palette, title: "Website Design", desc: "Custom, on-brand designs that make a strong first impression and turn visitors into customers." },
  { icon: Code2, title: "Website Development", desc: "Fast, reliable builds using modern frameworks so your site performs as good as it looks." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Online stores with secure checkout, inventory tools, and a smooth shopping experience." },
  { icon: Building2, title: "Business Websites", desc: "Professional sites that establish credibility and make it easy for customers to find you." },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "High-converting pages built around a single goal: turning clicks into leads." },
  { icon: Search, title: "SEO Optimization", desc: "On-page SEO and technical tuning so local customers find you on Google." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing updates, backups, and monitoring so your site stays secure and current." },
  { icon: Zap, title: "Performance Optimization", desc: "Faster load times that keep visitors engaged and improve search rankings." },
  { icon: Server, title: "Hosting Setup", desc: "Reliable hosting, domain setup, and SSL so your site is fast and secure from day one." },
  { icon: Smartphone, title: "Responsive Design", desc: "Every page looks and works great on phones, tablets, and desktops." },
];

export type Reason = { icon: LucideIcon; title: string; desc: string };
export const reasons: Reason[] = [
  { icon: Sparkles, title: "Modern Design", desc: "Contemporary visuals that feel current, not templated." },
  { icon: Zap, title: "Fast Performance", desc: "Sites built for speed from the ground up." },
  { icon: Search, title: "SEO Ready", desc: "Structured to rank well from launch day." },
  { icon: DollarSign, title: "Affordable", desc: "Premium quality at small-business pricing." },
  { icon: Smartphone, title: "Responsive", desc: "Flawless on every screen size." },
  { icon: Headset, title: "Reliable Support", desc: "We're here well after launch day." },
  { icon: Wrench, title: "Custom Solutions", desc: "No cookie-cutter templates, ever." },
  { icon: Heart, title: "Built with Care", desc: "Every detail considered, every time." },
];

export type ProcessStep = { n: string; title: string; desc: string };
export const process: ProcessStep[] = [
  { n: "01", title: "Discover", desc: "We learn your business, goals, and customers." },
  { n: "02", title: "Design", desc: "Wireframes and visuals tailored to your brand." },
  { n: "03", title: "Develop", desc: "Clean, fast code brings the design to life." },
  { n: "04", title: "Launch", desc: "Your site goes live, tested and polished." },
  { n: "05", title: "Support", desc: "Ongoing care to keep things running smoothly." },
];

export type Project = {
  icon: LucideIcon;
  title: string;
  cat: string;
  tech: string;
  from: string;
  to: string;
};
export const portfolio: Project[] = [
  { icon: Coffee, title: "Nordic Bean Coffee Co.", cat: "Coffee Shop", tech: "Next.js · Custom CSS", from: "#B45309", to: "#F59E0B" },
  { icon: Scissors, title: "Lumière Hair Studio", cat: "Salon", tech: "Next.js · Motion", from: "#BE185D", to: "#F472B6" },
  { icon: Store, title: "Marea Coastal Kitchen", cat: "Restaurant", tech: "Next.js · Sanity CMS", from: "#0369A1", to: "#38BDF8" },
  { icon: Hotel, title: "The Wayfarer Hotel", cat: "Hotel", tech: "Next.js · Tailwind CSS", from: "#166534", to: "#4ADE80" },
  { icon: Dumbbell, title: "Forge Strength & Conditioning", cat: "Gym", tech: "Next.js · Tailwind CSS", from: "#B91C1C", to: "#FB923C" },
  { icon: Shirt, title: "Thread & Co.", cat: "Fashion Store", tech: "Next.js · Custom Theme", from: "#6D28D9", to: "#C4B5FD" },
  { icon: Compass, title: "Monolith Architecture", cat: "Architecture Studio", tech: "Next.js · Three.js", from: "#374151", to: "#9CA3AF" },
  { icon: Building2, title: "Bright Smile Dental", cat: "Dental Clinic", tech: "Next.js · Tailwind CSS", from: "#0891B2", to: "#67E8F9" },
];

export type Stat = { value: number; suffix: string; label: string };
export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
];

export type Testimonial = { name: string; biz: string; quote: string; initials: string; color: string };
export const testimonials: Testimonial[] = [
  { name: "Maria Ionescu", biz: "Marea Coastal Kitchen", quote: "Reservations went up within the first month. The site finally looks as good as the food tastes.", initials: "MI", color: "#0369A1" },
  { name: "Jordan Blake", biz: "Forge Strength & Conditioning", quote: "Hiyare Labs got our brand immediately. Sign-ups from the new site paid for itself in six weeks.", initials: "JB", color: "#B91C1C" },
  { name: "Aiko Tanaka", biz: "Lumière Hair Studio", quote: "Every detail feels intentional. Clients compliment the booking page more than I expected.", initials: "AT", color: "#BE185D" },
  { name: "Daniel Cole", biz: "The Wayfarer Hotel", quote: "Direct bookings are up and we're paying less in commission to booking sites. Easy decision.", initials: "DC", color: "#166534" },
];

export type Plan = {
  name: string;
  price: number;
  desc: string;
  features: string[];
  highlight?: boolean;
};
export const pricing: Plan[] = [
  {
    name: "Starter",
    price: 499,
    desc: "For a simple, professional first website.",
    features: ["Up to 5 pages", "Mobile responsive design", "Basic SEO setup", "Contact form", "2 rounds of revisions"],
  },
  {
    name: "Business",
    price: 999,
    desc: "Our most popular plan for growing businesses.",
    features: ["Up to 10 pages", "Custom design & animations", "Advanced SEO setup", "Blog / CMS integration", "Hosting & domain setup", "3 months of support"],
    highlight: true,
  },
  {
    name: "Premium",
    price: 1999,
    desc: "Full-scale sites and online stores.",
    features: ["Unlimited pages", "E-commerce functionality", "Custom integrations", "Performance optimization", "Priority support", "6 months of support"],
  },
];

export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  { q: "How long does a project take?", a: "Most business websites take 2–4 weeks from kickoff to launch, depending on scope. E-commerce and custom builds can take 4–8 weeks. We'll give you a clear timeline before work begins." },
  { q: "Do you offer hosting?", a: "Yes — we can set up and manage reliable hosting, your domain, and SSL as part of any plan, so your site is fast and secure from day one." },
  { q: "Can you redesign my existing site?", a: "Absolutely. We regularly take over outdated or underperforming websites and rebuild them with modern design and better performance." },
  { q: "Do I need to provide content?", a: "Not necessarily. You can supply your own text and photos, or we can help write copy and source imagery as part of your project." },
  { q: "What's included in maintenance?", a: "Regular backups, security updates, uptime monitoring, and small content changes, so you never have to think about the technical side." },
  { q: "Do you work with businesses outside major cities?", a: "Yes — we work with local businesses everywhere. Most of our process happens remotely over calls, email, and shared documents." },
];

export const navLinks = ["Home", "Services", "Portfolio", "Process", "Pricing", "About", "FAQ", "Contact"];
export const logos = ["Marea Kitchen", "Lumière Studio", "Nordic Bean", "The Wayfarer", "Forge Gym", "Thread & Co."];
