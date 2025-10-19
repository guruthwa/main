import { Wifi, Coffee, Shield, Newspaper, Lock, BookOpen, Users, Droplet, MessageCircle, UtensilsCrossed, Bath, ParkingCircle, Wind } from 'lucide-react';
import React from 'react';

export const mockData = {
  features: [
    {
      icon: <Wifi className="h-12 w-12" />,
      title: "High-Speed Internet",
      description: "Blazing fast WiFi connectivity ensuring seamless access to online resources, research materials, and digital learning platforms without interruption."
    },
    {
      icon: <Coffee className="h-12 w-12" />,
      title: "Beverages Available",
      description: "Tea and coffee service available with and without sugar, keeping you refreshed and energized throughout your study sessions."
    },
    {
      icon: <Droplet className="h-12 w-12" />,
      title: "Purified Drinking Water",
      description: "Access to filtered drinking water through our water purifier system. Bottled water in cans also available for your convenience."
    },
    {
      icon: <Wind className="h-12 w-12" />,
      title: "Air Conditioning",
      description: "Comfortable climate-controlled environment throughout the facility. Study in perfect temperature conditions regardless of weather outside."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "24/7 Security",
      description: "Advanced surveillance system with CCTV cameras monitoring all areas, plus biometric access control for your complete peace of mind."
    },
    {
      icon: <Newspaper className="h-12 w-12" />,
      title: "Daily Newspapers",
      description: "Access to leading newspapers and periodicals to keep you updated with current affairs—essential for competitive exam preparation."
    },
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: "Discussion Area",
      description: "Dedicated discussion spaces for group study sessions, collaborative learning, and academic discussions with fellow students."
    },
    {
      icon: <UtensilsCrossed className="h-12 w-12" />,
      title: "Pantry & Dining Area",
      description: "Well-equipped pantry area for dining and snacks. Bring your meals or enjoy light refreshments in a comfortable setting."
    },
    {
      icon: <Bath className="h-12 w-12" />,
      title: "Modern Restrooms",
      description: "Separate, well-maintained bathrooms for ladies and gents. Both European and Indian toilet facilities available for your comfort."
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Secure Lockers",
      description: "Personal locker facilities to safely store your books, laptops, and belongings. Study with peace of mind knowing your items are secure."
    },
    {
      icon: <ParkingCircle className="h-12 w-12" />,
      title: "Two Wheeler Parking",
      description: "Convenient and secure parking facility for two-wheelers. Your vehicle stays safe while you focus on your studies."
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Reference Library",
      description: "Curated collection of reference books, study materials, and resources across various subjects and competitive examination categories."
    }
  ],

  pricingPlans: [
    {
      name: "Standard Seating",
      price: "1,699",
      description: "Perfect for focused individual study",
      featured: false,
      features: [
        "Comfortable cubicle seating",
        "7 AM - 12 AM access",
        "High-speed WiFi",
        "Tea & coffee available",
        "Daily newspapers",
        "CCTV surveillance",
        "Biometric access",
        "Library access"
      ]
    },
    {
      name: "Premium Seating",
      price: "1,899",
      description: "Enhanced space & priority facilities",
      featured: true,
      features: [
        "Spacious premium cubicles",
        "7 AM - 12 AM access",
        "High-speed WiFi",
        "Tea & coffee available",
        "Daily newspapers",
        "CCTV surveillance",
        "Biometric access",
        "Library access",
        "Priority locker access",
        "Extended desk space",
        "Better lighting & ventilation"
      ]
    }
  ],

  achievements: [
    {
      number: "50+",
      label: "IAS/IPS Officers"
    },
    {
      number: "100+",
      label: "Medical Professionals"
    },
    {
      number: "200+",
      label: "Success Stories"
    }
  ],

  faqs: [
    {
      question: "What are the operating hours?",
      answer: "We are open daily from 7 AM to 12 AM (midnight), offering flexible timing to suit your study schedule whether you're an early bird or a night owl."
    },
    {
      question: "Is prior booking required?",
      answer: "While walk-ins are welcome based on availability, we highly recommend calling us at 9778467700 to reserve your seat, especially during peak exam seasons."
    },
    {
      question: "What's included in the membership fee?",
      answer: "Your membership includes access to study cubicles, high-speed WiFi, tea/coffee service, daily newspapers, library access, CCTV surveillance, and biometric security. Locker services are available at no extra cost."
    },
    {
      question: "Can I switch between Standard and Premium seating?",
      answer: "Yes, you can upgrade or modify your membership plan. Please call us to discuss the transition and any applicable charges."
    },
    {
      question: "Is there a trial period available?",
      answer: "We offer day passes for first-time visitors who want to experience our facilities before committing to a monthly membership. Call us for daily rates."
    },
    {
      question: "What security measures are in place?",
      answer: "We have comprehensive 24/7 CCTV surveillance throughout the premises and biometric access control. Your belongings can be safely stored in our locker facilities."
    }
  ]
};