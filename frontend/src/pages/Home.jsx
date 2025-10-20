import React, { useState, useEffect } from 'react';
import { Phone, Clock, Wifi, Coffee, Shield, Newspaper, Lock, BookOpen, Users, Award, MapPin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { mockData } from '../utils/mock';

const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'pricing', 'legacy', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:9778467700';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hey, I'm interested in booking a slot at Guruthwa Study Café");
    window.location.href = `https://wa.me/919778467700?text=${message}`;
  };

  return (
    <div className="newspaper-theme">
      {/* Newspaper Header */}
      <header className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="border-b border-black py-1 bg-gray-50">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs">
            <span className="font-serif hidden sm:block">URR14, Uppalam Road, Two Buildings After BSNL Bhavan</span>
            <span className="font-serif sm:hidden">URR14, Uppalam Road</span>
            <span className="font-serif hidden md:block">Excellence in Focus Since Legacy</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="text-center border-b-2 border-black pb-3 md:pb-4">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-wider mb-2">
              GURUTHWA
            </h1>
            <p className="font-serif text-lg sm:text-2xl md:text-3xl tracking-widest border-t border-b border-black py-2 inline-block px-4 sm:px-8">
              STUDY CAFÉ - READING ROOM
            </p>
            <p className="font-serif text-xs sm:text-sm mt-2 md:mt-3 tracking-wide">Where Legends Are Made • Est. Legacy Continues</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-3 md:mt-4 text-xs sm:text-sm font-serif gap-3">
            <div className="flex gap-4 sm:gap-6">
              <a href="#features" className="hover:underline transition-all">Facilities</a>
              <a href="#pricing" className="hover:underline transition-all">Membership</a>
              <a href="#legacy" className="hover:underline transition-all">Legacy</a>
            </div>
            <Button 
              onClick={handleCallNow}
              className="bg-black text-white hover:bg-gray-800 font-serif tracking-wide transition-all text-xs sm:text-sm"
              size="sm"
            >
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Call: 9778467700
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Newspaper Front Page Style */}
      <section id="hero" className="bg-amber-50 border-b-4 border-black">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="md:border-r-2 border-black md:pr-8">
              <div className="mb-3 md:mb-4">
                <Badge className="bg-black text-white font-serif px-2 md:px-3 py-1 text-xs">BREAKING NEWS</Badge>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                A Sanctuary for Serious Scholars
              </h2>
              <div className="border-l-4 border-black pl-3 md:pl-4 mb-4 md:mb-6">
                <p className="font-serif text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
                  Located at URR14, Uppalam Road (two buildings after BSNL Bhavan), Guruthwa Study Café stands as a beacon of academic excellence. 
                  A place where silence speaks volumes, where focus finds its home, and where the brightest minds 
                  have carved their path to success.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 py-4 md:py-6 border-t border-b border-black">
                <div className="text-center">
                  <Clock className="h-6 md:h-8 w-6 md:w-8 mx-auto mb-1 md:mb-2" />
                  <p className="font-serif text-xs md:text-sm font-bold">7 AM - 12 AM</p>
                  <p className="text-xs text-gray-600 hidden sm:block">Flexible Hours</p>
                </div>
                <div className="text-center border-l border-r border-black">
                  <Shield className="h-6 md:h-8 w-6 md:w-8 mx-auto mb-1 md:mb-2" />
                  <p className="font-serif text-xs md:text-sm font-bold">24/7 Security</p>
                  <p className="text-xs text-gray-600 hidden sm:block">CCTV & Biometric</p>
                </div>
                <div className="text-center">
                  <Coffee className="h-6 md:h-8 w-6 md:w-8 mx-auto mb-1 md:mb-2" />
                  <p className="font-serif text-xs md:text-sm font-bold">Beverages</p>
                  <p className="text-xs text-gray-600 hidden sm:block">Tea & Coffee</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleCallNow}
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 font-serif tracking-wide flex-1 transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 font-serif tracking-wide flex-1 transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-4 border-black overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_8b4fbf4e-8f0c-4dd4-8728-6ed76cfa17c9/artifacts/7uwv2rqn_WhatsApp%20Image%202025-10-17%20at%2019.27.46.jpeg"
                  alt="Student studying at Guruthwa"
                  className="w-full h-80 object-cover sepia-filter"
                />
                <div className="bg-black text-white p-3 font-serif text-sm">
                  <p className="font-bold">FOCUSED MINDS AT WORK</p>
                  <p className="text-xs mt-1">Clean, distraction-free environment designed for peak concentration</p>
                </div>
              </div>
              <div className="border-4 border-black overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_8b4fbf4e-8f0c-4dd4-8728-6ed76cfa17c9/artifacts/i10ywfly_WhatsApp%20Image%202025-10-19%20at%2001.04.36.jpeg"
                  alt="Coffee facilities at Guruthwa"
                  className="w-full h-64 object-cover sepia-filter"
                />
                <div className="bg-black text-white p-3 font-serif text-sm">
                  <p className="font-bold">PREMIUM AMENITIES</p>
                  <p className="text-xs mt-1">Complimentary beverages to fuel your study sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Newspaper Column Layout */}
      <section id="features" className="bg-white py-16 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 border-b-2 border-black pb-6">
            <h2 className="font-serif text-5xl font-bold mb-3">PREMIUM FACILITIES</h2>
            <p className="font-serif text-lg text-gray-700">Everything You Need for Uninterrupted Study</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardHeader className="border-b border-black bg-gray-50">
                  <div className="mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-serif text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="font-serif text-base text-gray-700 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Classified Ad Style */}
      <section id="pricing" className="bg-amber-50 py-16 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block border-4 border-black bg-white p-6 mb-6">
              <h2 className="font-serif text-5xl font-bold">MEMBERSHIP PLANS</h2>
              <p className="font-serif text-sm mt-2 tracking-widest">INVEST IN YOUR FUTURE</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {mockData.pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-4 border-black ${plan.featured ? 'bg-black text-white' : 'bg-white'} hover:scale-105 transition-transform`}>
                <CardHeader className={`border-b-2 ${plan.featured ? 'border-white' : 'border-black'} text-center pb-6`}>
                  {plan.featured && (
                    <Badge className="bg-white text-black font-serif mb-2">RECOMMENDED</Badge>
                  )}
                  <CardTitle className="font-serif text-3xl mb-1">{plan.name}</CardTitle>
                  {plan.subtitle && (
                    <p className={`font-serif text-sm italic mb-3 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                      {plan.subtitle}
                    </p>
                  )}
                  <div className="font-serif text-5xl font-bold my-4">
                    ₹{plan.price}
                    <span className="text-lg font-normal">/month</span>
                  </div>
                  <CardDescription className={plan.featured ? 'text-gray-300' : 'text-gray-600'}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start font-serif text-sm">
                        <span className="mr-2">▪</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 mt-6">
                    <Button 
                      onClick={handleCallNow}
                      className={`w-full font-serif tracking-wide transition-all ${
                        plan.featured 
                          ? 'bg-white text-black hover:bg-gray-200' 
                          : 'bg-black text-white hover:bg-gray-800'
                      }`}
                      size="lg"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call to Subscribe
                    </Button>
                    <Button 
                      onClick={handleWhatsApp}
                      className="w-full bg-green-600 text-white hover:bg-green-700 font-serif tracking-wide transition-all"
                      size="lg"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section - Editorial Style */}
      <section id="legacy" className="bg-white py-16 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-4 border-black p-8 mb-8 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-10 w-10" />
                <h2 className="font-serif text-4xl font-bold">OUR LEGACY</h2>
              </div>
              <div className="border-l-4 border-black pl-6">
                <p className="font-serif text-lg leading-relaxed mb-4">
                  <span className="text-6xl float-left mr-3 leading-none font-bold">G</span>
                  urutwa Study Café isn't just a reading room—it's a crucible where dreams are forged into reality. 
                  Though newly opened, this space carries the weight of history, having nurtured countless brilliant 
                  minds who have risen to positions of great influence and impact.
                </p>
                <p className="font-serif text-lg leading-relaxed mb-4">
                  From civil servants who now shape policy, to doctors saving lives, to entrepreneurs building 
                  empires—legends have walked these halls, sat in these chairs, and transformed their aspirations 
                  into achievements. Their success stories are not just our pride; they are our promise to you.
                </p>
                <p className="font-serif text-lg leading-relaxed">
                  The atmosphere here is charged with purpose. Every corner resonates with the determination of 
                  those who came before you. When you study at Guruthwa, you don't just join a reading room—you 
                  become part of a lineage of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Newspaper Q&A Column */}
      <section className="bg-amber-50 py-16 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-8 border-b-2 border-black pb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {mockData.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-black bg-white"
                >
                  <AccordionTrigger className="font-serif text-lg px-6 hover:bg-gray-50 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-serif px-6 pb-4 border-t border-black bg-gray-50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section - Classifieds Style */}
      <section id="contact" className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-bold mb-6 border-b-2 border-white pb-4 inline-block">
              RESERVE YOUR SEAT TODAY
            </h2>
            <p className="font-serif text-xl mb-8 leading-relaxed">
              Join the legacy. Transform your future. Begin your journey at Guruthwa Study Café.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="border-2 border-white p-6">
                <Phone className="h-10 w-10 mx-auto mb-3" />
                <p className="font-serif text-sm mb-2">CALL US</p>
                <p className="font-serif text-2xl font-bold">9778467700</p>
              </div>
              <div className="border-2 border-white p-6">
                <MapPin className="h-10 w-10 mx-auto mb-3" />
                <p className="font-serif text-sm mb-2">VISIT US</p>
                <p className="font-serif">URR14, Uppalam Road<br />Two Buildings After BSNL Bhavan<br />Trivandrum</p>
              </div>
              <div className="border-2 border-white p-6">
                <Clock className="h-10 w-10 mx-auto mb-3" />
                <p className="font-serif text-sm mb-2">TIMING</p>
                <p className="font-serif text-xl font-bold">7 AM - 12 AM</p>
                <p className="text-sm">Daily</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button 
                onClick={handleCallNow}
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-serif tracking-wide text-lg px-8 py-6 transition-all flex-1"
              >
                <Phone className="mr-3 h-6 w-6" />
                CALL NOW
              </Button>
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 font-serif tracking-wide text-lg px-8 py-6 transition-all flex-1"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Newspaper Credits Style */}
      <footer className="bg-white border-t-4 border-black py-8">
        <div className="container mx-auto px-4">
          <div className="border-2 border-black p-6 text-center">
            <p className="font-serif text-2xl font-bold mb-2">GURUTHWA STUDY CAFÉ</p>
            <p className="font-serif text-sm text-gray-600 mb-3">
              URR14, Uppalam Road, Two Buildings After BSNL Bhavan, Trivandrum | Ph: 9778467700
            </p>
            <div className="border-t border-black pt-3 mt-3">
              <p className="font-serif text-xs text-gray-500">
                © {new Date().getFullYear()} Guruthwa Study Café. Where Excellence Meets Legacy.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;