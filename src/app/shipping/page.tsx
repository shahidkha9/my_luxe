export default function ShippingPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Methods</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Standard Shipping (5-7 business days)</li>
              <li>Express Shipping (2-3 business days)</li>
              <li>Overnight Shipping (Next business day)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Rates</h2>
            <p>Shipping rates are calculated based on the destination and the shipping method selected at checkout.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
            <p>
              We offer international shipping to select countries. Please note that additional customs fees may apply.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
            <p>
              Once your order has been shipped, you will receive a tracking number via email to monitor your package&apos;s
              progress.
            </p>
          </section>
        </div>
      </div>
    )
  }
  
  