import { Service, AddOn } from '@/types/booking';

// Calculate total from service and add-ons
export function calculateTotal(service: Service, addOns: AddOn[]): number {
    // Use the average of the price range for the service
    const servicePrice = Math.round((service.priceRange[0] + service.priceRange[1]) / 2);
    const addOnTotal = addOns.reduce((sum, addOn) => sum + addOn.price, 0);
    return servicePrice + addOnTotal;
}

// Generate WhatsApp message with detailed breakdown
export function generateWhatsAppMessage(
    service: Service,
    addOns: AddOn[],
    total: number,
    dateTime: string,
    particulars: string,
    hasInspirationPhotos: boolean = false,
    inspirationLook?: number
): string {
    // Build add-ons list with total
    const addOnTotal = addOns.reduce((sum, a) => sum + a.price, 0);
    const addOnList = addOns.length > 0
        ? addOns.map((a) => `- ${a.name} (+GH₵ ${a.price})`).join('\n')
        : 'None';

    // Calculate price range (service range + add-ons total)
    const minTotal = service.priceRange[0] + addOnTotal;
    const maxTotal = service.priceRange[1] + addOnTotal;

    // Inspiration photos note
    const photoNote = hasInspirationPhotos
        ? '\n\n(I will send my inspiration photos in this chat)'
        : '';

    // Inspiration look reference (if customer clicked "Book this look" from gallery)
    const lookReference = inspirationLook
        ? `\n🎨 *Inspired by:* Look ${String(inspirationLook).padStart(2, '0')} from your gallery`
        : '';

    const message = `Hi Titi! I'd like to request an appointment.

*Service:* ${service.name}
*Add-ons:* ${addOnList}${lookReference}

📅 *Preferred Time:* ${dateTime}
_(Please confirm if this time works for you, or suggest an alternative)_
*Estimated Cost:* GH₵ ${minTotal} - ${maxTotal}
*Booking Fee:* GH₵ 50 (separate)

*Notes:* ${particulars || 'None'}${photoNote}

I understand this is a request and await your confirmation.`;

    return encodeURIComponent(message);
}

export function formatPrice(price: number): string {
    return `GH₵ ${price.toLocaleString()}`;
}

export function formatPriceRange(range: [number, number]): string {
    return `GH₵ ${range[0].toLocaleString()} - ${range[1].toLocaleString()}`;
}
