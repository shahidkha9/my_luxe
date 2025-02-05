export default function ReturnsPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Returns Policy</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Period</h2>
            <p>We offer a 30-day return policy for all unopened and unused products.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Contact our customer service team to initiate a return.</li>
              <li>Receive a Return Merchandise Authorization (RMA) number.</li>
              <li>Package the item securely with the RMA number clearly marked.</li>
              <li>Ship the package to the provided return address.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
            <p>Refunds will be processed within 5-7 business days after we receive and inspect the returned item.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
            <p>
              If you wish to exchange an item, please return the original item for a refund and place a new order for the
              desired item.
            </p>
          </section>
        </div>
      </div>
    )
  }
  
  