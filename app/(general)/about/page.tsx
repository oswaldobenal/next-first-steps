import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Page Julian Benalcazar',
 keywords: ['About Page', 'Julian', 'Información']
};

export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  );
}
