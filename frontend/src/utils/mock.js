import { Wifi, Coffee, Shield, Newspaper, Lock, BookOpen, Users } from 'lucide-react';
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
      icon: <Lock className="h-12 w-12" />,
      title: "Secure Lockers",
      description: "Personal locker facilities to safely store your books, laptops, and belongings. Study with peace of mind knowing your items are secure."
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
        "Unlimited tea & coffee",
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
        "Unlimited tea & coffee",
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
      answer: "Your membership includes access to study cubicles, high-speed WiFi, unlimited tea/coffee, daily newspapers, library access, CCTV surveillance, and biometric security. Locker services are available at no extra cost."
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