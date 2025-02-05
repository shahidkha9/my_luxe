import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            We&apos;d love to hear from you. Please fill out the form below or use our contact information to get in touch.
          </p>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> shahidkha993@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +92 336 1808581
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              D-306,
              <br />
              Street # 10, Road # 1
              <br />
              karachi, pakistan
            </p>
          </div>
        </div>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Your Message" rows={4} />
          <Button className="bg-gold hover:bg-gold/90 text-black">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

