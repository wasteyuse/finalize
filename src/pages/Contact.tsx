
import React, { useState } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. Fill out the form below or reach out to us directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-[#7069BC]" />
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#7069BC] hover:bg-[#5d58a3]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-[#F9F8FF] p-6 rounded-lg shadow-sm border mb-6">
              <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#7069BC] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">support@bleame.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#7069BC] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 (800) 123-4567</p>
                    <p className="text-gray-600 text-sm">Mon-Fri: 9AM - 5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#7069BC] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      123 Commerce St, Suite 100<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F9F8FF] p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">FAQ</h2>
              <p className="text-gray-600 mb-4">
                Check our <a href="/faq" className="text-[#7069BC] hover:underline">FAQ section</a> for quick answers to common questions about our products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
