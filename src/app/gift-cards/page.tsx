import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectContent } from "@/components/ui/select"

export default function GiftCardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gift Cards</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Purchase a Gift Card</h2>
          <form className="space-y-4">
            <Select>
              <SelectTrigger>
                <option value="">Select Amount</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="200">$200</option>
                <option value="custom">Custom Amount</option>
              </SelectTrigger>
              <SelectContent>
                <option value="">Select Amount</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="200">$200</option>
                <option value="custom">Custom Amount</option>
              </SelectContent>
            </Select>
            <Input type="number" placeholder="Custom Amount" />
            <Input placeholder="Recipient's Name" />
            <Input type="email" placeholder="Recipient's Email" />
            <Textarea placeholder="Personal Message (Optional)" rows={4} />
            <Button className="bg-gold hover:bg-gold/90 text-black">Purchase Gift Card</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gift Card Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gift cards are delivered via email and contain instructions to redeem them at checkout.</li>
            <li>Our gift cards have no additional processing fees.</li>
            <li>Gift cards are valid for 12 months from the date of purchase.</li>
            <li>Gift cards can be used for multiple purchases until the balance is depleted.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

