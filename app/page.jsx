import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CompanyCarousel from "@/components/company-carousel";
import {
  ArrowRight,
  BarChart,
  Calendar,
  ChevronRight,
  Layout,
} from "lucide-react";
import faqs from "@/data/faqs";

export default function Home() {
  const features = [
    {
      title: "Intuitive Kanban Boards",
      description:
        "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
      icon: Layout,
    },
    {
      title: "Powerful Sprint Planning",
      description:
        "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
      icon: Calendar,
    },
    {
      title: "Comprehensive Reporting",
      description:
        "Gain insights into your team's performance with detailed, customizable reports and analytics.",
      icon: BarChart,
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="min-h-screen  container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with {""}
            <span className="text-8xl sm:text-9xl lg:text-10xl font-extrabold  gradient-title tracking-wider inline-block px-4 py-1 rounded">
              BIRGE
            </span>
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with our intuitive project management solution.
        </p>
        <Link href={"/onboarding"}>
          <Button size="lg" className="mr-2">
            Get Started
            <ChevronRight size={18} />
          </Button>
        </Link>
        <Link href={"#features"}>
          <Button size="lg" className="mr-4" variant="destructive ">
            Learn More
            <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
      </section>
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={"bg-gray-800"}>
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-400" />
                  <h4>{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>

          <CompanyCarousel />
        </div>
      </section>
      <section className=" bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <div>
            {faqs.map(({ question, answer }, i) => {
              return (
                <Accordion key={i} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Ready to Transform Your Workflow?
          </h3>

          <p className="text-xl mb-12">
            Join thousands of teams already using BIRGE to streamline their
            projects and boo st productivity.
          </p>
          <Link href={"/onboarding"}>
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
