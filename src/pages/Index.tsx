import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Trophy, Users } from "lucide-react";
import CourseCurriculum from "@/components/CourseCurriculum";
import WhatYouWillGain from "@/components/WhatYouWillGain";
import AboutInstructor from "@/components/AboutInstructor";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import MoneyBackGuarantee from "@/components/MoneyBackGuarantee";
import CourseStructureAndOutcomes from "@/components/CourseStructureAndOutcomes";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/80 to-secondary" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <Badge className="mb-4 bg-accent text-white">
                Course begins January 10, 2025
              </Badge>
              <h1 className="heading-xl mb-6 text-white">
                AI for Research & Insights Workshop
              </h1>
              <p className="text-2xl md:text-4xl mb-8 text-white/90 font-semibold">
                12 Weeks to Become an AI Power User
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold"
                >
                  Register Now
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/80">
                Register before December 7th to get $500 off using code EARLY500
              </p>
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="heading-lg text-center mb-12">Course Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🚀",
                  title: "12 Live Learning Sessions",
                  description: "Weekly 2-hour deep dives into AI fundamentals",
                },
                {
                  icon: "💡",
                  title: "12 Live Q&A Sessions",
                  description: "Weekly 90-minute interactive sessions",
                },
                {
                  icon: "🎓",
                  title: "Optional Certification",
                  description: "Earn your AI Power User credential",
                },
                {
                  icon: "🔧",
                  title: "Hands-on Skills",
                  description: "Practice with real-world scenarios",
                },
              ].map((highlight, index) => (
                <Card key={index} className="p-6 hover-scale">
                  <div className="text-3xl mb-4">{highlight.icon}</div>
                  <h3 className="font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Key Dates Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <h2 className="heading-lg text-center mb-8">Key Dates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <CalendarIcon className="w-6 h-6 text-accent" />,
                  title: "Course Begins",
                  date: "January 10, 2025",
                },
                {
                  icon: <CalendarIcon className="w-6 h-6 text-accent" />,
                  title: "Early Bird Deadline",
                  date: "December 7, 2024",
                },
                {
                  icon: <Trophy className="w-6 h-6 text-accent" />,
                  title: "Certification Assessment",
                  date: "End of Course",
                },
              ].map((date, index) => (
                <Card key={index} className="p-6 text-center hover-scale">
                  <div className="flex justify-center mb-4">{date.icon}</div>
                  <h3 className="font-bold mb-2">{date.title}</h3>
                  <p className="text-muted-foreground">{date.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Risk-Free Offer */}
        <MoneyBackGuarantee />
        
        {/* Course Overview */}
        <section className="py-16 bg-secondary">
          <div className="container max-w-3xl">
            <h2 className="heading-lg text-center mb-8">Course Overview</h2>
            <div className="space-y-6">
              <p className="body-lg">
                Are you ready to harness the power of AI to elevate your research and insights work? Whether you're a 
                researcher, designer, product manager, or UX/CX professional, this 12-week workshop will transform AI 
                from a simple tool you use into an instrument you're on your way to mastering.
              </p>
              <p className="body-lg">
                From mastering prompt engineering to setting up automated workflows, this course is designed to turn 
                you into an AI Power User, ensuring you're ready to be productive, competitive, and indispensable in 2025.
              </p>
            </div>
          </div>
        </section>
        
        {/* Course Structure & Learning Outcomes */}
        <CourseStructureAndOutcomes />
        
        {/* What You'll Gain Section */}
        <WhatYouWillGain />
        
        {/* About the Instructor */}
        <AboutInstructor />
        
        {/* Who Should Enroll */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <h2 className="heading-lg text-center mb-12">Who Should Enroll?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Researchers",
                "Designers",
                "Product Managers",
                "UX/CX Professionals",
              ].map((role, index) => (
                <Card key={index} className="p-6 text-center hover-scale">
                  <Users className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold">{role}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* What's Included */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="heading-lg text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "12 Live Learning Sessions",
                  description: "Weekly 2-hour deep dives into AI fundamentals and advanced practices.",
                },
                {
                  title: "12 Live Q&A Sessions",
                  description: "Weekly 90-minute sessions for direct answers to your questions.",
                },
                {
                  title: "3 Private Coaching Sessions",
                  description: "Three 30-minute one-on-one sessions to address your specific challenges.",
                },
                {
                  title: "Exclusive Resources",
                  description: "Hundreds of templates, guides, and materials to accelerate your learning.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 hover-scale">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Curriculum Section */}
        <CourseCurriculum />
        
        {/* FAQ Section */}
        <FrequentlyAskedQuestions />
        
        {/* Pricing Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="heading-lg mb-12">Simple, Transparent Pricing</h2>
              <Card className="glass-card p-8">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-3xl font-bold">$999</span>
                  <span className="text-muted-foreground line-through">$1,499</span>
                </div>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Secure Your Spot
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  100% Money-Back Guarantee
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-primary text-primary-foreground">
          <div className="container text-center">
            <p className="text-sm">
              Copyright © 2024 Tetra Insights, Inc. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Questions? Email us at{" "}
              <a
                href="mailto:support@tetrainsights.com"
                className="text-accent hover:underline"
              >
                support@tetrainsights.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
