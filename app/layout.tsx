import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Nailed By Titi - Book Your Perfect Set',
    description:
        'Build your perfect nail set, see the price instantly, and book via WhatsApp. Student nail tech specializing in clean, durable acrylic sets.',
    keywords: [
        'nail tech',
        'acrylic nails',
        'nail art',
        'Ghana',
        'booking',
        'manicure',
    ],
    openGraph: {
        title: 'Nailed By Titi - Book Your Perfect Set',
        description: 'Clean, durable acrylic sets. Build your look and book instantly.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased overflow-x-hidden">
                <main>{children}</main>
            </body>
        </html>
    );
}
